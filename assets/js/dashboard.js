// Mini Bar Chart for Analytics Overview
document.addEventListener("DOMContentLoaded", function () {
  if (window.Chart && document.getElementById("miniBarChart")) {
    new Chart(document.getElementById("miniBarChart").getContext("2d"), {
      type: "bar",
      data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
          {
            label: "Visits",
            data: [120, 190, 300, 250, 220, 310, 400],
            backgroundColor: "rgba(40, 167, 69, 0.7)",
            borderRadius: 6,
            maxBarThickness: 18,
          },
        ],
      },
      options: {
        plugins: { legend: { display: false } },
        scales: {
          x: { display: false },
          y: { display: false },
        },
        responsive: true,
        maintainAspectRatio: false,
      },
    });
  }
});

// Quick Tasks Widget Interactivity
document.addEventListener("DOMContentLoaded", function () {
  const tasksList = document.querySelector(".quick-tasks-list");
  const addTaskBtn = document.querySelector(".add-task-btn");
  const addTaskForm = document.querySelector(".add-task-form");
  const newTaskInput = document.querySelector(".new-task-input");

  // Remove task
  tasksList.addEventListener("click", function (e) {
    if (e.target.closest(".remove-task-btn")) {
      e.preventDefault();
      const li = e.target.closest("li");
      if (li) li.remove();
    }
  });

  // Add task from form
  addTaskForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const val = newTaskInput.value.trim();
    if (!val) return;
    const li = document.createElement("li");
    li.className = "d-flex align-items-center gap-2 mb-2";
    li.innerHTML = `<input class="form-check-input mt-0" type="checkbox" value=""><span class="flex-grow-1"></span><button class="btn btn-sm btn-link text-danger p-0 remove-task-btn" title="Remove"><i class="fa fa-trash"></i></button>`;
    li.querySelector("span").textContent = val;
    tasksList.appendChild(li);
    newTaskInput.value = "";
  });

  // Focus input when clicking Add button
  addTaskBtn.addEventListener("click", function () {
    newTaskInput.focus();
  });
});

// Traffic Sources Doughnut Chart
document.addEventListener("DOMContentLoaded", function () {
  if (window.Chart && document.getElementById("trafficDoughnutChart")) {
    new Chart(
      document.getElementById("trafficDoughnutChart").getContext("2d"),
      {
        type: "doughnut",
        data: {
          labels: ["Direct", "Referral", "Social"],
          datasets: [
            {
              data: [45, 30, 25],
              backgroundColor: [
                "rgba(13, 110, 253, 0.85)", // Primary
                "rgba(25, 135, 84, 0.85)", // Success
                "rgba(255, 193, 7, 0.85)", // Warning
              ],
              borderWidth: 2,
              borderColor: "#fff",
              hoverOffset: 6,
            },
          ],
        },
        options: {
          plugins: { legend: { display: false } },
          cutout: "70%",
          responsive: true,
          maintainAspectRatio: false,
        },
      }
    );
  }
});
