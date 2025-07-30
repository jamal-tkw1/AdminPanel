// --- Begin migrated Mega Menu and App Settings logic ---
document.addEventListener('DOMContentLoaded', function() {
  // --- Mega Menu Settings Panel Logic ---
  const megaMenuDropdown = document.getElementById('megaMenuDropdown');
  const leftRadio = document.getElementById('megaMenuLeft');
  const centerRadio = document.getElementById('megaMenuCenter');
  const widthSelect = document.getElementById('megaMenuWidth');
  const offsetInput = document.getElementById('megaMenuOffset');
  const openSettingsBtn = document.getElementById('openMegaMenuSettings');
  const contentWrapper = document.getElementById('content-relative-wrapper');
  if (openSettingsBtn) {
    openSettingsBtn.addEventListener('click', function(e) {
      e.preventDefault();
      const offcanvas = new bootstrap.Offcanvas(document.getElementById('megaMenuSettings'));
      offcanvas.show();
    });
  }
  function moveMegaMenuToContentWrapper() {
    if (contentWrapper && megaMenuDropdown && !contentWrapper.contains(megaMenuDropdown)) {
      contentWrapper.appendChild(megaMenuDropdown);
    }
  }
  function moveMegaMenuToNavParent() {
    const navParent = document.getElementById('megaMenuParent');
    if (navParent && megaMenuDropdown && !navParent.contains(megaMenuDropdown)) {
      navParent.appendChild(megaMenuDropdown);
    }
  }
  function updateAlignment() {
    if (!megaMenuDropdown) return;
    if (centerRadio && centerRadio.checked) {
      megaMenuDropdown.classList.add('mega-menu-centered');
      moveMegaMenuToContentWrapper();
      megaMenuDropdown.classList.remove('mega-menu-full');
      if (widthSelect && widthSelect.value !== 'full') {
        megaMenuDropdown.style.minWidth = widthSelect.value + 'px';
        megaMenuDropdown.style.width = widthSelect.value + 'px';
        megaMenuDropdown.style.maxWidth = '';
      }
    } else {
      megaMenuDropdown.classList.remove('mega-menu-centered');
      if (widthSelect && widthSelect.value !== 'full') {
        moveMegaMenuToNavParent();
      }
    }
    updateWidth();
  }
  if (leftRadio) leftRadio.addEventListener('change', updateAlignment);
  if (centerRadio) centerRadio.addEventListener('change', updateAlignment);
  function updateWidth() {
    if (!megaMenuDropdown) return;
    megaMenuDropdown.classList.remove('mega-menu-full');
    megaMenuDropdown.style.position = '';
    megaMenuDropdown.style.left = '';
    megaMenuDropdown.style.right = '';
    megaMenuDropdown.style.minWidth = '';
    megaMenuDropdown.style.width = '';
    megaMenuDropdown.style.maxWidth = '';
    if (widthSelect && widthSelect.value === 'full') {
      megaMenuDropdown.classList.add('mega-menu-full');
      moveMegaMenuToContentWrapper();
    } else {
      if (centerRadio && centerRadio.checked) {
        moveMegaMenuToContentWrapper();
      } else {
        moveMegaMenuToNavParent();
      }
      if (widthSelect) {
        megaMenuDropdown.style.minWidth = widthSelect.value + 'px';
        megaMenuDropdown.style.width = widthSelect.value + 'px';
      }
    }
  }
  if (widthSelect) widthSelect.addEventListener('change', updateWidth);
  function updateOffset() {
    if (!megaMenuDropdown) return;
    megaMenuDropdown.style.top = offsetInput && offsetInput.value ? offsetInput.value + 'px' : '';
  }
  if (offsetInput) offsetInput.addEventListener('input', updateOffset);
  // Initial state
  updateAlignment();
  updateWidth();
  updateOffset();

  // --- App Settings Panel Logic (horizontal nav, breadcrumb, etc) ---
  const openAppSettingsBtn = document.getElementById('openAppSettings');
  const appSettingsPanel = document.getElementById('appSettingsPanel');
  const toggleHorizontalMenu = document.getElementById('toggleHorizontalMenu');
  const horizontalNav = document.getElementById('horizontalNavBar');
  const breadcrumbNav = document.getElementById('breadcrumbNav');
  const breadcrumbBefore = document.getElementById('breadcrumbBefore');
  const breadcrumbAfter = document.getElementById('breadcrumbAfter');
  if (openAppSettingsBtn && appSettingsPanel) {
    openAppSettingsBtn.addEventListener('click', function(e) {
      e.preventDefault();
      const offcanvas = new bootstrap.Offcanvas(appSettingsPanel);
      offcanvas.show();
    });
  }
  if (toggleHorizontalMenu && horizontalNav) {
    if (localStorage.getItem('horizontalMenuEnabled') === 'false') {
      toggleHorizontalMenu.checked = false;
      horizontalNav.style.display = 'none';
    }
    toggleHorizontalMenu.addEventListener('change', function() {
      horizontalNav.style.display = this.checked ? '' : 'none';
      localStorage.setItem('horizontalMenuEnabled', this.checked);
    });
  }
  function setBreadcrumbPosition(pos) {
    if (!horizontalNav || !breadcrumbNav) return;
    if (pos === 'before') {
      horizontalNav.parentNode.insertBefore(breadcrumbNav, horizontalNav);
    } else {
      horizontalNav.parentNode.insertBefore(breadcrumbNav, horizontalNav.nextSibling);
    }
    localStorage.setItem('breadcrumbPosition', pos);
  }
  if (breadcrumbBefore && breadcrumbAfter && horizontalNav && breadcrumbNav) {
    const savedPos = localStorage.getItem('breadcrumbPosition') || 'after';
    if (savedPos === 'before') {
      breadcrumbBefore.checked = true;
      setBreadcrumbPosition('before');
    } else {
      breadcrumbAfter.checked = true;
      setBreadcrumbPosition('after');
    }
    breadcrumbBefore.addEventListener('change', function() {
      if (this.checked) setBreadcrumbPosition('before');
    });
    breadcrumbAfter.addEventListener('change', function() {
      if (this.checked) setBreadcrumbPosition('after');
    });
  }

  // --- Sidebar multi-level menu logic (from inline) ---
  document.querySelectorAll('#sidebar .dropdown-toggle').forEach(function(toggle) {
    toggle.addEventListener('click', function(e) {
      e.preventDefault();
      const submenu = this.nextElementSibling;
      if (!submenu) return;
      const isOpen = submenu.classList.contains('open');
      const parentUl = this.closest('ul');
      if (parentUl) {
        parentUl.querySelectorAll('.sidebar-submenu.open').forEach(function(openSub) {
          if (openSub !== submenu) openSub.classList.remove('open');
        });
        parentUl.querySelectorAll('.dropdown-toggle.open').forEach(function(openTog) {
          if (openTog !== toggle) openTog.classList.remove('open');
        });
      }
      submenu.classList.toggle('open', !isOpen);
      this.classList.toggle('open', !isOpen);
    });
  });
});
// --- End migrated Mega Menu and App Settings logic ---
document.addEventListener("DOMContentLoaded", function () {
  // Force sidebar to be compact and hide toggle button on mobile devices
  function handleSidebarMobile() {
    const sidebar = document.getElementById("sidebar");
    const content = document.getElementById("content");
    const sidebarCollapse = document.getElementById("sidebarCollapse");
    if (window.innerWidth <= 991.98) {
      if (sidebar && !sidebar.classList.contains("compact")) {
        sidebar.classList.add("compact");
      }
      if (content) {
        content.classList.add("sidebar-compact");
      }
      if (sidebarCollapse) {
        sidebarCollapse.style.display = "none";
      }
    } else {
      if (sidebarCollapse) {
        sidebarCollapse.style.display = "";
      }
    }
  }
  handleSidebarMobile();
  window.addEventListener("resize", handleSidebarMobile);

  // Sidebar Toggle (compact mode)
  const sidebarCollapse = document.getElementById("sidebarCollapse");
  const sidebar = document.getElementById("sidebar");
  const content = document.getElementById("content");

  if (sidebarCollapse && sidebar && content) {
    sidebarCollapse.addEventListener("click", function () {
      debugger;
      sidebar.classList.toggle("compact");
      content.classList.toggle("sidebar-compact");
      // Optionally persist state
      localStorage.setItem(
        "sidebarCompact",
        sidebar.classList.contains("compact")
      );
    });
  }
  // Sidebar JS removed: Sidebar is now fully CSS/SCSS-driven. No JS toggling or hiding.

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

  // App Settings Panel Logic
  document.addEventListener("DOMContentLoaded", function () {
    const openAppSettingsBtn = document.getElementById("openAppSettings");
    const appSettingsPanel = document.getElementById("appSettingsPanel");
    const toggleHorizontalMenu = document.getElementById(
      "toggleHorizontalMenu"
    );
    const horizontalNav = document.getElementById("horizontalNavBar");
    const breadcrumbNav = document.getElementById("breadcrumbNav");
    const breadcrumbBefore = document.getElementById("breadcrumbBefore");
    const breadcrumbAfter = document.getElementById("breadcrumbAfter");
    // Open App Settings panel
    openAppSettingsBtn.addEventListener("click", function (e) {
      e.preventDefault();
      const offcanvas = new bootstrap.Offcanvas(appSettingsPanel);
      offcanvas.show();
    });
    // Load setting from localStorage
    if (localStorage.getItem("horizontalMenuEnabled") === "false") {
      toggleHorizontalMenu.checked = false;
      if (horizontalNav) horizontalNav.style.display = "none";
    }
    // Toggle horizontal menu
    toggleHorizontalMenu.addEventListener("change", function () {
      if (horizontalNav)
        horizontalNav.style.display = this.checked ? "" : "none";
      localStorage.setItem("horizontalMenuEnabled", this.checked);
    });

    // Breadcrumb position logic
    function setBreadcrumbPosition(pos) {
      if (!horizontalNav || !breadcrumbNav) return;
      if (pos === "before") {
        horizontalNav.parentNode.insertBefore(breadcrumbNav, horizontalNav);
      } else {
        horizontalNav.parentNode.insertBefore(
          breadcrumbNav,
          horizontalNav.nextSibling
        );
      }
      localStorage.setItem("breadcrumbPosition", pos);
    }
    // Set initial state from localStorage
    const savedPos = localStorage.getItem("breadcrumbPosition") || "after";
    if (savedPos === "before") {
      breadcrumbBefore.checked = true;
      setBreadcrumbPosition("before");
    } else {
      breadcrumbAfter.checked = true;
      setBreadcrumbPosition("after");
    }
    // Listen for changes
    breadcrumbBefore.addEventListener("change", function () {
      if (this.checked) setBreadcrumbPosition("before");
    });
    breadcrumbAfter.addEventListener("change", function () {
      if (this.checked) setBreadcrumbPosition("after");
    });
  });

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
