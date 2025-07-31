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


// New Customer List
document.addEventListener("DOMContentLoaded", function () {
  // Advanced New Customers List Demo
    const allCustomers = [
      { name: 'Alex Johnson', email: 'alex.johnson@email.com', phone: '+1 555-1234', location: 'New York, USA', joined: 'Jul 31, 2025', status: 'Active', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
      { name: 'Maria Lee', email: 'maria.lee@email.com', phone: '+1 555-5678', location: 'London, UK', joined: 'Jul 31, 2025', status: 'Active', avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
      { name: 'Sam Carter', email: 'sam.carter@email.com', phone: '+1 555-8765', location: 'Sydney, AUS', joined: 'Jul 30, 2025', status: 'Pending', avatar: 'https://randomuser.me/api/portraits/men/45.jpg' },
      { name: 'Nina Patel', email: 'nina.patel@email.com', phone: '+1 555-4321', location: 'Mumbai, IND', joined: 'Jul 29, 2025', status: 'Active', avatar: 'https://randomuser.me/api/portraits/women/65.jpg' },
      { name: 'John Smith', email: 'john.smith@email.com', phone: '+1 555-1111', location: 'Toronto, CAN', joined: 'Jul 28, 2025', status: 'Active', avatar: 'https://randomuser.me/api/portraits/men/33.jpg' },
      { name: 'Emily Chen', email: 'emily.chen@email.com', phone: '+1 555-2222', location: 'Singapore', joined: 'Jul 27, 2025', status: 'Pending', avatar: 'https://randomuser.me/api/portraits/women/66.jpg' },
      { name: 'Carlos Ruiz', email: 'carlos.ruiz@email.com', phone: '+1 555-3333', location: 'Madrid, ESP', joined: 'Jul 27, 2025', status: 'Active', avatar: 'https://randomuser.me/api/portraits/men/46.jpg' },
      { name: 'Olga Ivanova', email: 'olga.ivanova@email.com', phone: '+1 555-4444', location: 'Moscow, RUS', joined: 'Jul 26, 2025', status: 'Active', avatar: 'https://randomuser.me/api/portraits/women/67.jpg' },
      { name: 'Liam O’Brien', email: 'liam.obrien@email.com', phone: '+1 555-5555', location: 'Dublin, IRL', joined: 'Jul 25, 2025', status: 'Pending', avatar: 'https://randomuser.me/api/portraits/men/47.jpg' },
      { name: 'Sophia Rossi', email: 'sophia.rossi@email.com', phone: '+1 555-6666', location: 'Rome, ITA', joined: 'Jul 24, 2025', status: 'Active', avatar: 'https://randomuser.me/api/portraits/women/68.jpg' }
    ];
    let filterRange = 'day', filterStatus = '', searchTerm = '', currentPage = 1, pageSize = 5;

    function filterCustomers() {
      // Date range filter (demo: just by index)
      let filtered = allCustomers.slice();
      if (filterRange === 'day') filtered = filtered.filter((c, i) => i < 2);
      else if (filterRange === 'week') filtered = filtered.filter((c, i) => i < 7);
      // Status filter
      if (filterStatus) filtered = filtered.filter(c => c.status === filterStatus);
      // Search filter
      if (searchTerm) {
        const term = searchTerm.toLowerCase();
        filtered = filtered.filter(c =>
          c.name.toLowerCase().includes(term) ||
          c.email.toLowerCase().includes(term) ||
          c.phone.toLowerCase().includes(term) ||
          c.location.toLowerCase().includes(term)
        );
      }
      return filtered;
    }

    function renderCustomers() {
      const tbody = document.getElementById('newCustomersTableBody');
      const pag = document.getElementById('customerPagination');
      const filtered = filterCustomers();
      const total = filtered.length;
      const pages = Math.ceil(total / pageSize);
      currentPage = Math.max(1, Math.min(currentPage, pages || 1));
      const start = (currentPage - 1) * pageSize;
      const end = start + pageSize;
      const pageRows = filtered.slice(start, end);
      tbody.innerHTML = pageRows.map(c => `
        <tr>
          <td><img src='${c.avatar}' class='rounded-circle me-2' width='32' height='32' alt='${c.name}'> ${c.name}</td>
          <td>${c.email}</td>
          <td>${c.phone}</td>
          <td>${c.location}</td>
          <td>${c.joined}</td>
          <td><span class='badge ${c.status === 'Active' ? 'bg-success' : 'bg-warning text-dark'}'>${c.status}</span></td>
          <td>
            <button class='btn btn-sm btn-outline-primary me-1' title='View'><i class='fa fa-eye'></i></button>
            <button class='btn btn-sm btn-outline-success me-1' title='Message'><i class='fa fa-envelope'></i></button>
            <button class='btn btn-sm btn-outline-danger' title='Remove'><i class='fa fa-trash'></i></button>
          </td>
        </tr>
      `).join('');
      // Pagination
      pag.innerHTML = '';
      if (pages > 1) {
        pag.innerHTML += `<button class='btn btn-sm btn-light border' ${currentPage === 1 ? 'disabled' : ''} onclick='gotoPage(1)'>&laquo;</button>`;
        pag.innerHTML += `<button class='btn btn-sm btn-light border' ${currentPage === 1 ? 'disabled' : ''} onclick='gotoPage(${currentPage - 1})'>&lsaquo;</button>`;
        for (let i = 1; i <= pages; i++) {
          pag.innerHTML += `<button class='btn btn-sm ${i === currentPage ? 'btn-primary' : 'btn-light border'}' onclick='gotoPage(${i})'>${i}</button>`;
        }
        pag.innerHTML += `<button class='btn btn-sm btn-light border' ${currentPage === pages ? 'disabled' : ''} onclick='gotoPage(${currentPage + 1})'>&rsaquo;</button>`;
        pag.innerHTML += `<button class='btn btn-sm btn-light border' ${currentPage === pages ? 'disabled' : ''} onclick='gotoPage(${pages})'>&raquo;</button>`;
      }
    }

    function gotoPage(p) {
      currentPage = p;
      renderCustomers();
    }

    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', function () {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        filterRange = this.getAttribute('data-range');
        currentPage = 1;
        renderCustomers();
      });
    });
    document.getElementById('statusFilter').addEventListener('change', function () {
      filterStatus = this.value;
      currentPage = 1;
      renderCustomers();
    });
    document.getElementById('customerSearch').addEventListener('input', function () {
      searchTerm = this.value;
      currentPage = 1;
      renderCustomers();
    });

    // Initial render
    renderCustomers();
    window.gotoPage = gotoPage;
});


// Order List
document.addEventListener("DOMContentLoaded", function () { 
    // Advanced Orders List Demo (with custom filter controls)
    const allOrders = [
      { id: 'ORD-1001', customer: 'Alex Johnson', product: 'Laptop', date: '2025-07-31', status: 'Delivered', total: '$1,200' },
      { id: 'ORD-1002', customer: 'Maria Lee', product: 'Smartphone', date: '2025-07-31', status: 'Processing', total: '$800' },
      { id: 'ORD-1003', customer: 'Sam Carter', product: 'Headphones', date: '2025-07-30', status: 'Shipped', total: '$150' },
      { id: 'ORD-1004', customer: 'Nina Patel', product: 'Camera', date: '2025-07-29', status: 'Pending', total: '$500' },
      { id: 'ORD-1005', customer: 'John Smith', product: 'Monitor', date: '2025-07-28', status: 'Cancelled', total: '$300' },
      { id: 'ORD-1006', customer: 'Emily Chen', product: 'Tablet', date: '2025-07-27', status: 'Delivered', total: '$400' },
      { id: 'ORD-1007', customer: 'Carlos Ruiz', product: 'Keyboard', date: '2025-07-27', status: 'Processing', total: '$70' },
      { id: 'ORD-1008', customer: 'Olga Ivanova', product: 'Mouse', date: '2025-07-26', status: 'Delivered', total: '$40' },
      { id: 'ORD-1009', customer: 'Liam O’Brien', product: 'Printer', date: '2025-07-25', status: 'Shipped', total: '$200' },
      { id: 'ORD-1010', customer: 'Sophia Rossi', product: 'Desk Lamp', date: '2025-07-24', status: 'Delivered', total: '$60' }
    ];
    let orderStatusFilter = [], orderSearchTerm = '', orderFrom = '', orderTo = '', orderPage = 1, orderPageSize = 5;

    // --- FILTER LOGIC ---
    function filterOrders() {
      let filtered = allOrders.slice();
      // Status filter (multi)
      if (orderStatusFilter.length) filtered = filtered.filter(o => orderStatusFilter.includes(o.status));
      // Date range filter
      if (orderFrom) filtered = filtered.filter(o => new Date(o.date) >= new Date(orderFrom));
      if (orderTo) filtered = filtered.filter(o => new Date(o.date) <= new Date(orderTo));
      // Search filter
      if (orderSearchTerm) {
        const term = orderSearchTerm.toLowerCase();
        filtered = filtered.filter(o =>
          o.id.toLowerCase().includes(term) ||
          o.customer.toLowerCase().includes(term) ||
          o.product.toLowerCase().includes(term)
        );
      }
      return filtered;
    }

    // --- RENDER LOGIC ---
    function renderOrders() {
      const tbody = document.getElementById('ordersTableBody');
      const pag = document.getElementById('ordersPagination');
      const summary = document.getElementById('ordersSummary');
      const filtered = filterOrders();
      const total = filtered.length;
      const pages = Math.ceil(total / orderPageSize);
      orderPage = Math.max(1, Math.min(orderPage, pages || 1));
      const start = (orderPage - 1) * orderPageSize;
      const end = start + orderPageSize;
      const pageRows = filtered.slice(start, end);
      tbody.innerHTML = pageRows.map(o => `
        <tr>
          <td>${o.id}</td>
          <td>${o.customer}</td>
          <td>${o.product}</td>
          <td>${o.date}</td>
          <td><span class='badge ${
            o.status === 'Delivered' ? 'bg-success' :
            o.status === 'Processing' ? 'bg-primary' :
            o.status === 'Shipped' ? 'bg-info text-dark' :
            o.status === 'Pending' ? 'bg-warning text-dark' :
            'bg-danger'}'>${o.status}</span></td>
          <td>${o.total}</td>
          <td>
            <button class='btn btn-sm btn-outline-primary me-1' title='View'><i class='fa fa-eye'></i></button>
            <button class='btn btn-sm btn-outline-success me-1' title='Invoice'><i class='fa fa-file-invoice'></i></button>
            <button class='btn btn-sm btn-outline-danger' title='Cancel'><i class='fa fa-times'></i></button>
          </td>
        </tr>
      `).join('');
      // Pagination
      pag.innerHTML = '';
      if (pages > 1) {
        pag.innerHTML += `<button class='btn btn-sm btn-light border' ${orderPage === 1 ? 'disabled' : ''} onclick='gotoOrderPage(1)'>&laquo;</button>`;
        pag.innerHTML += `<button class='btn btn-sm btn-light border' ${orderPage === 1 ? 'disabled' : ''} onclick='gotoOrderPage(${orderPage - 1})'>&lsaquo;</button>`;
        for (let i = 1; i <= pages; i++) {
          pag.innerHTML += `<button class='btn btn-sm ${i === orderPage ? 'btn-warning text-dark' : 'btn-light border'}' onclick='gotoOrderPage(${i})'>${i}</button>`;
        }
        pag.innerHTML += `<button class='btn btn-sm btn-light border' ${orderPage === pages ? 'disabled' : ''} onclick='gotoOrderPage(${orderPage + 1})'>&rsaquo;</button>`;
        pag.innerHTML += `<button class='btn btn-sm btn-light border' ${orderPage === pages ? 'disabled' : ''} onclick='gotoOrderPage(${pages})'>&raquo;</button>`;
      }
      // Summary
      if (summary) summary.textContent = `Showing ${start + 1}-${Math.min(end, total)} of ${total} orders`;
      // Status badge count
      document.getElementById('orderStatusCount').textContent = orderStatusFilter.length;
    }

    function gotoOrderPage(p) {
      orderPage = p;
      renderOrders();
    }

    // --- FILTER CONTROL WIRING ---
    // Search
    document.getElementById('orderSearch').addEventListener('input', function () {
      orderSearchTerm = this.value;
      orderPage = 1;
      renderOrders();
    });
    document.getElementById('clearOrderSearch').addEventListener('click', function () {
      document.getElementById('orderSearch').value = '';
      orderSearchTerm = '';
      orderPage = 1;
      renderOrders();
    });
    // Status checkboxes
    const statusCheckboxes = [
      'statusPending', 'statusProcessing', 'statusShipped', 'statusDelivered', 'statusCancelled'
    ];
    statusCheckboxes.forEach(id => {
      document.getElementById(id).addEventListener('change', function () {
        orderStatusFilter = statusCheckboxes
          .filter(cid => document.getElementById(cid).checked)
          .map(cid => document.getElementById(cid).value);
        orderPage = 1;
        renderOrders();
      });
    });
    document.getElementById('clearStatusFilter').addEventListener('click', function () {
      statusCheckboxes.forEach(id => document.getElementById(id).checked = false);
      orderStatusFilter = [];
      orderPage = 1;
      renderOrders();
    });
    // Date range
    document.getElementById('orderFrom').addEventListener('change', function () {
      orderFrom = this.value;
      orderPage = 1;
      renderOrders();
    });
    document.getElementById('orderTo').addEventListener('change', function () {
      orderTo = this.value;
      orderPage = 1;
      renderOrders();
    });
    // Clear all filters
    document.getElementById('clearOrderFilters').addEventListener('click', function () {
      document.getElementById('orderSearch').value = '';
      document.getElementById('orderFrom').value = '';
      document.getElementById('orderTo').value = '';
      document.getElementById('clearOrderSearch').click();
      document.getElementById('clearStatusFilter').click();
      orderFrom = '';
      orderTo = '';
      orderPage = 1;
      renderOrders();
    });

    // Initial render
    renderOrders();
    window.gotoOrderPage = gotoOrderPage;
});