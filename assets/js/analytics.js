// Enable Bootstrap tooltips for report table
document.addEventListener("DOMContentLoaded", function () {
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  tooltipTriggerList.forEach(function (tooltipTriggerEl) {
    new bootstrap.Tooltip(tooltipTriggerEl);
  });
});
// Page Views Trend
new Chart(document.getElementById("pageViewsChart").getContext("2d"), {
  type: "line",
  data: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Page Views",
        data: [1800, 2100, 1950, 2200, 2500, 2300, 2600],
        borderColor: "#0d6efd",
        backgroundColor: "rgba(13,110,253,0.08)",
        tension: 0.4,
        fill: true,
        pointRadius: 4,
        pointBackgroundColor: "#0d6efd",
      },
    ],
  },
  options: {
    plugins: { legend: { display: false } },
    scales: { y: { beginAtZero: true } },
  },
});
// User Demographics
new Chart(document.getElementById("userDemographicsChart").getContext("2d"), {
  type: "doughnut",
  data: {
    labels: ["Male", "Female", "Other"],
    datasets: [
      {
        data: [54, 43, 3],
        backgroundColor: ["#0d6efd", "#198754", "#ffc107"],
      },
    ],
  },
  options: { plugins: { legend: { position: "bottom" } } },
});
// Session Duration
new Chart(document.getElementById("sessionDurationChart").getContext("2d"), {
  type: "bar",
  data: {
    labels: ["0-1m", "1-3m", "3-5m", "5-10m", "10m+"],
    datasets: [
      {
        label: "Sessions",
        data: [1200, 3200, 2800, 1500, 400],
        backgroundColor: "#ffc107",
      },
    ],
  },
  options: {
    plugins: { legend: { display: false } },
    scales: { y: { beginAtZero: true } },
  },
});
// Bounce Rate
new Chart(document.getElementById("bounceRateChart").getContext("2d"), {
  type: "line",
  data: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Bounce Rate",
        data: [38, 36, 35, 37, 34, 33, 32],
        borderColor: "#dc3545",
        backgroundColor: "rgba(220,53,69,0.08)",
        tension: 0.4,
        fill: true,
        pointRadius: 4,
        pointBackgroundColor: "#dc3545",
      },
    ],
  },
  options: {
    plugins: { legend: { display: false } },
    scales: { y: { beginAtZero: true } },
  },
});

// Conversion Rate Chart
new Chart(document.getElementById("conversionRateChart").getContext("2d"), {
  type: "line",
  data: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Conversion Rate",
        data: [2.1, 2.4, 2.2, 2.7, 2.9, 3.1, 3.0],
        borderColor: "#6c757d",
        backgroundColor: "rgba(108,117,125,0.08)",
        tension: 0.4,
        fill: true,
        pointRadius: 4,
        pointBackgroundColor: "#6c757d",
      },
    ],
  },
  options: {
    plugins: { legend: { display: false } },
    scales: { y: { beginAtZero: true, ticks: { callback: (v) => v + "%" } } },
  },
});
// Device Breakdown Chart
new Chart(document.getElementById("deviceBreakdownChart").getContext("2d"), {
  type: "doughnut",
  data: {
    labels: ["Desktop", "Mobile", "Tablet"],
    datasets: [
      {
        data: [62, 31, 7],
        backgroundColor: ["#212529", "#0d6efd", "#ffc107"],
      },
    ],
  },
  options: { plugins: { legend: { position: "bottom" } } },
});
// Revenue Trend Chart
new Chart(document.getElementById("revenueTrendChart").getContext("2d"), {
  type: "bar",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Revenue",
        data: [3200, 4100, 3900, 4700, 5200, 4800, 5500],
        backgroundColor: "#198754",
      },
    ],
  },
  options: {
    plugins: { legend: { display: false } },
    scales: { y: { beginAtZero: true } },
  },
});

// AOV Trend Chart
new Chart(document.getElementById("aovTrendChart").getContext("2d"), {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "AOV",
        data: [72, 80, 77, 85, 90, 88, 95],
        borderColor: "#0dcaf0",
        backgroundColor: "rgba(13,202,240,0.08)",
        tension: 0.4,
        fill: true,
        pointRadius: 4,
        pointBackgroundColor: "#0dcaf0",
      },
    ],
  },
  options: {
    plugins: { legend: { display: false } },
    scales: { y: { beginAtZero: true } },
  },
});
// Repeat Customer Rate Chart
new Chart(document.getElementById("repeatCustomerChart").getContext("2d"), {
  type: "bar",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Repeat Rate",
        data: [18, 20, 19, 22, 24, 23, 25],
        backgroundColor: "#198754",
      },
    ],
  },
  options: {
    plugins: { legend: { display: false } },
    scales: {
      y: { beginAtZero: true, max: 30, ticks: { callback: (v) => v + "%" } },
    },
  },
});
// Abandoned Cart Rate Chart
new Chart(document.getElementById("abandonedCartChart").getContext("2d"), {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Abandoned Cart Rate",
        data: [68, 65, 66, 62, 60, 61, 59],
        borderColor: "#ffc107",
        backgroundColor: "rgba(255,193,7,0.08)",
        tension: 0.4,
        fill: true,
        pointRadius: 4,
        pointBackgroundColor: "#ffc107",
      },
    ],
  },
  options: {
    plugins: { legend: { display: false } },
    scales: {
      y: { beginAtZero: true, max: 100, ticks: { callback: (v) => v + "%" } },
    },
  },
});

// Sales by Category Chart
new Chart(document.getElementById("salesByCategoryChart").getContext("2d"), {
  type: "doughnut",
  data: {
    labels: ["Electronics", "Wearables", "Accessories", "Home", "Other"],
    datasets: [
      {
        data: [44, 23, 18, 9, 6],
        backgroundColor: [
          "#ffc107",
          "#dc3545",
          "#0d6efd",
          "#198754",
          "#6c757d",
        ],
      },
    ],
  },
  options: { plugins: { legend: { position: "bottom" } } },
});
// Orders by Status Chart
new Chart(document.getElementById("ordersByStatusChart").getContext("2d"), {
  type: "bar",
  data: {
    labels: ["Pending", "Processing", "Shipped", "Delivered", "Cancelled"],
    datasets: [
      {
        label: "Orders",
        data: [32, 48, 41, 67, 7],
        backgroundColor: [
          "#ffc107",
          "#0d6efd",
          "#198754",
          "#6c757d",
          "#dc3545",
        ],
      },
    ],
  },
  options: {
    plugins: { legend: { display: false } },
    scales: { y: { beginAtZero: true } },
  },
});

// --- Advanced Analytics Chart.js Logic ---
if (window.Chart) {
  // CLV Trend
  new Chart(document.getElementById('clvTrendChart'), {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      datasets: [{
        label: 'CLV',
        data: [220, 240, 260, 250, 270, 300, 320],
        borderColor: '#0dcaf0',
        backgroundColor: 'rgba(13,202,240,0.1)',
        tension: 0.4,
        fill: true,
        pointRadius: 4,
        pointBackgroundColor: '#0dcaf0',
      }]
    },
    options: { plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true } } }
  });

  // Sales Funnel (Funnel chart simulated with horizontal bar)
  new Chart(document.getElementById('salesFunnelChart'), {
    type: 'bar',
    data: {
      labels: ['Visitors', 'Added to Cart', 'Checkout', 'Paid', 'Shipped'],
      datasets: [{
        label: 'Funnel',
        data: [5000, 2200, 1200, 900, 850],
        backgroundColor: [
          '#0d6efd', '#0dcaf0', '#ffc107', '#198754', '#6f42c1'
        ],
        borderRadius: 12,
        barPercentage: 0.7,
        categoryPercentage: 0.7
      }]
    },
    options: {
      indexAxis: 'y',
      plugins: { legend: { display: false } },
      scales: { x: { beginAtZero: true } }
    }
  });

  // Churn Rate
  new Chart(document.getElementById('churnRateChart'), {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      datasets: [{
        label: 'Churn %',
        data: [4.2, 4.5, 4.1, 4.8, 5.0, 4.7, 4.3],
        borderColor: '#dc3545',
        backgroundColor: 'rgba(220,53,69,0.1)',
        tension: 0.4,
        fill: true,
        pointRadius: 4,
        pointBackgroundColor: '#dc3545',
      }]
    },
    options: { plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true } } }
  });

  // Order Fulfillment Time
  new Chart(document.getElementById('fulfillmentTimeChart'), {
    type: 'line',
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [{
        label: 'Hours',
        data: [18, 16, 15, 14, 13, 17, 19],
        borderColor: '#ffc107',
        backgroundColor: 'rgba(255,193,7,0.1)',
        tension: 0.4,
        fill: true,
        pointRadius: 4,
        pointBackgroundColor: '#ffc107',
      }]
    },
    options: { plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true } } }
  });

  // Net Promoter Score (NPS)
  new Chart(document.getElementById('npsChart'), {
    type: 'bar',
    data: {
      labels: ['Promoters', 'Passives', 'Detractors'],
      datasets: [{
        label: 'NPS',
        data: [68, 22, 10],
        backgroundColor: ['#6c757d', '#0dcaf0', '#dc3545'],
        borderRadius: 8
      }]
    },
    options: {
      plugins: { legend: { display: false } },
      scales: { y: { beginAtZero: true, max: 100 } }
    }
  });

  // Sales Heatmap (simulate with matrix chart using Chart.js bubble)
  const heatmapCanvas = document.getElementById('salesHeatmapChart');
  if (heatmapCanvas) {
    const ctx = heatmapCanvas.getContext('2d');
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const hours = [8, 10, 12, 14, 16, 18, 20];
    const heatmapData = [];
    for (let d = 0; d < days.length; d++) {
      for (let h = 0; h < hours.length; h++) {
        heatmapData.push({
          x: h,
          y: d,
          r: Math.floor(Math.random() * 12) + 6 // random bubble size
        });
      }
    }
    new Chart(ctx, {
      type: 'bubble',
      data: {
        datasets: [{
          label: 'Sales',
          data: heatmapData,
          backgroundColor: 'rgba(13,110,253,0.5)',
          borderColor: '#0d6efd',
          borderWidth: 1
        }]
      },
      options: {
        plugins: { legend: { display: false } },
        scales: {
          x: {
            title: { display: true, text: 'Hour' },
            min: 7, max: 21, ticks: { stepSize: 2, callback: v => v+':00' }
          },
          y: {
            title: { display: true, text: 'Day' },
            min: -0.5, max: 6.5,
            ticks: { callback: v => days[v] }
          }
        }
      }
    });
  }
}
