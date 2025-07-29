document.addEventListener("DOMContentLoaded", function () {
  // Sidebar Toggle
  const sidebarCollapse = document.getElementById("sidebarCollapse");
  if (sidebarCollapse) {
    sidebarCollapse.addEventListener("click", function () {
      document.getElementById("sidebar").classList.toggle("collapsed");
      document.getElementById("content").classList.toggle("full-width");
    });
  }

  // Only use data-bs-theme for theme switching (light/dark)
  const body = document.body;
  const toggle = document.getElementById("darkModeToggle");
  const icon = document.getElementById("themeIcon");
  // Set theme from localStorage or default to light
  let theme = localStorage.getItem("bs-theme") || "light";
  body.setAttribute("data-bs-theme", theme);
  if (icon) {
    icon.classList.remove("fa-sun", "fa-moon");
    icon.classList.add(theme === "dark" ? "fa-sun" : "fa-moon");
  }
  if (toggle) {
    toggle.addEventListener("click", function () {
      theme = body.getAttribute("data-bs-theme") === "light" ? "dark" : "light";
      body.setAttribute("data-bs-theme", theme);
      localStorage.setItem("bs-theme", theme);
      if (icon) {
        icon.classList.remove("fa-sun", "fa-moon");
        icon.classList.add(theme === "dark" ? "fa-sun" : "fa-moon");
      }
    });
  }

  // Keyboard shortcuts for topbar
  document.addEventListener("keydown", function (e) {
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
    if (e.key === "n" || e.key === "N") {
      document.querySelector(".top-navbar .fa-bell").closest("a").click();
      e.preventDefault();
    }
    if (e.key === "a" || e.key === "A") {
      document
        .querySelector(
          ".top-navbar .fa-user, .top-navbar .fa-user-circle, .top-navbar .fa-user-alt"
        )
        ?.closest("a")
        ?.click();
      // fallback to avatar
      document
        .querySelector(".top-navbar .user-avatar-badge")
        ?.closest("a")
        ?.click();
      e.preventDefault();
    }
    if (e.key === "/") {
      const searchInput = document.querySelector(
        '.top-navbar input[type="search"]'
      );
      if (searchInput) {
        searchInput.focus();
        e.preventDefault();
      }
    }
  });

  // Quick search icon (mobile)
  const quickSearchBtn = document.querySelector(".quick-search-mobile");
  if (quickSearchBtn) {
    quickSearchBtn.addEventListener("click", function () {
      const searchInput = document.querySelector(
        '.top-navbar input[type="search"]'
      );
      if (searchInput) {
        searchInput.focus();
      }
    });
  }

  // Animate notification bell if there are new notifications
  const notifBell = document.getElementById("notifBell");
  if (notifBell) {
    notifBell.classList.add("notify-animate");
  }

  // --- ✨ Gemini API Integration ---
  const generateBtn = document.getElementById("generateContentBtn");
  const aiPrompt = document.getElementById("aiPrompt");
  const aiResult = document.getElementById("aiResult");
  const spinner = generateBtn.querySelector(".spinner-border");

  generateBtn.addEventListener("click", async () => {
    const prompt = aiPrompt.value;
    if (!prompt) {
      aiResult.textContent = "Please enter a prompt.";
      return;
    }

    // Show loading state
    spinner.classList.remove("d-none");
    generateBtn.disabled = true;
    aiResult.textContent = "Generating...";

    try {
      // Prepare the payload for the Gemini API
      const chatHistory = [{ role: "user", parts: [{ text: prompt }] }];
      const payload = { contents: chatHistory };
      const apiKey = ""; // API key is handled by the environment
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

      // Make the API call
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.statusText}`);
      }

      const result = await response.json();

      // Display the result
      if (
        result.candidates &&
        result.candidates.length > 0 &&
        result.candidates[0].content &&
        result.candidates[0].content.parts &&
        result.candidates[0].content.parts.length > 0
      ) {
        const text = result.candidates[0].content.parts[0].text;
        aiResult.textContent = text;
      } else {
        aiResult.textContent =
          "Sorry, I could not generate a response. Please try again.";
      }
    } catch (error) {
      console.error("Error calling Gemini API:", error);
      aiResult.textContent = `An error occurred: ${error.message}`;
    } finally {
      // Hide loading state
      spinner.classList.add("d-none");
      generateBtn.disabled = false;
    }
  });
});
