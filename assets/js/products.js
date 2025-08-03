// Sample product data for demo
const products = [
// 100 diverse products with real images
  {
    id: 1,
    name: "Apple iPhone 15 Pro",
    brand: "Apple",
    manufacturer: "Foxconn",
    color: "Silver",
    size: "Medium",
    price: 999,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=320&q=80",
    attributes: "128GB, 6.1\" Display, 5G"
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra",
    brand: "Samsung",
    manufacturer: "Compal",
    color: "Black",
    size: "Large",
    price: 1199,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=320&q=80",
    attributes: "256GB, 6.8\" Display, 5G"
  },
  {
    id: 3,
    name: "Sony WH-1000XM5 Headphones",
    brand: "Sony",
    manufacturer: "Quanta",
    color: "Blue",
    size: "Medium",
    price: 399,
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=320&q=80",
    attributes: "Wireless, Noise Cancelling"
  },
  {
    id: 4,
    name: "Dell XPS 13 Laptop",
    brand: "Dell",
    manufacturer: "Wistron",
    color: "Silver",
    size: "Large",
    price: 1299,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=320&q=80",
    attributes: "13.4\" FHD, 16GB RAM, 512GB SSD"
  },
  {
    id: 5,
    name: "HP Spectre x360",
    brand: "HP",
    manufacturer: "Foxconn",
    color: "Black",
    size: "Large",
    price: 1399,
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=320&q=80",
    attributes: "14\" Touch, 16GB RAM, 1TB SSD"
  },
  {
    id: 6,
    name: "Lenovo ThinkPad X1 Carbon",
    brand: "Lenovo",
    manufacturer: "Compal",
    color: "Black",
    size: "Large",
    price: 1499,
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=320&q=80",
    attributes: "14\" FHD, 16GB RAM, 512GB SSD"
  },
  {
    id: 7,
    name: "Google Pixel 8",
    brand: "Google",
    manufacturer: "Pegatron",
    color: "White",
    size: "Medium",
    price: 899,
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=320&q=80",
    attributes: "128GB, 6.2\" Display, 5G"
  },
  {
    id: 8,
    name: "Microsoft Surface Pro 9",
    brand: "Microsoft",
    manufacturer: "Quanta",
    color: "Blue",
    size: "Large",
    price: 1299,
    image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=320&q=80",
    attributes: "13\" Touch, 16GB RAM, 512GB SSD"
  },
  {
    id: 9,
    name: "Bose QuietComfort 45",
    brand: "Bose",
    manufacturer: "Flextronics",
    color: "Black",
    size: "Medium",
    price: 329,
    image: "https://images.unsplash.com/photo-1512446733611-9099a758e0f2?auto=format&fit=crop&w=320&q=80",
    attributes: "Wireless, Noise Cancelling"
  },
  {
    id: 10,
    name: "Canon EOS R7 Camera",
    brand: "Canon",
    manufacturer: "Canon",
    color: "Black",
    size: "Medium",
    price: 1499,
    image: "https://images.unsplash.com/photo-1519183071298-a2962be56693?auto=format&fit=crop&w=320&q=80",
    attributes: "32MP, 4K Video, WiFi"
  },
  {
    id: 11,
    name: "Apple MacBook Air M2",
    brand: "Apple",
    manufacturer: "Foxconn",
    color: "Silver",
    size: "Large",
    price: 1199,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=320&q=80",
    attributes: "13.6\" Retina, 8GB RAM, 256GB SSD"
  },
  {
    id: 12,
    name: "Samsung Galaxy Tab S9",
    brand: "Samsung",
    manufacturer: "Compal",
    color: "Black",
    size: "Medium",
    price: 799,
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=320&q=80",
    attributes: "11\" AMOLED, 8GB RAM, 128GB"
  },
  {
    id: 13,
    name: "Sony PlayStation 5",
    brand: "Sony",
    manufacturer: "Sony",
    color: "White",
    size: "Large",
    price: 499,
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=320&q=80",
    attributes: "825GB SSD, 4K Gaming"
  },
  {
    id: 14,
    name: "Dell Inspiron 15",
    brand: "Dell",
    manufacturer: "Wistron",
    color: "Silver",
    size: "Large",
    price: 899,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=320&q=80",
    attributes: "15.6\" FHD, 8GB RAM, 512GB SSD"
  },
  {
    id: 15,
    name: "HP Envy 13",
    brand: "HP",
    manufacturer: "Foxconn",
    color: "Black",
    size: "Medium",
    price: 1099,
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=320&q=80",
    attributes: "13.3\" Touch, 16GB RAM, 512GB SSD"
  },
  {
    id: 16,
    name: "Lenovo Yoga 7i",
    brand: "Lenovo",
    manufacturer: "Compal",
    color: "Blue",
    size: "Large",
    price: 999,
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=320&q=80",
    attributes: "14\" Touch, 8GB RAM, 512GB SSD"
  },
  {
    id: 17,
    name: "Google Nest Hub",
    brand: "Google",
    manufacturer: "Pegatron",
    color: "White",
    size: "Small",
    price: 99,
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=320&q=80",
    attributes: "7\" Display, Smart Home"
  },
  {
    id: 18,
    name: "Microsoft Xbox Series X",
    brand: "Microsoft",
    manufacturer: "Quanta",
    color: "Black",
    size: "Large",
    price: 499,
    image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=320&q=80",
    attributes: "1TB SSD, 4K Gaming"
  },
  {
    id: 19,
    name: "Bose SoundLink Revolve",
    brand: "Bose",
    manufacturer: "Flextronics",
    color: "Silver",
    size: "Small",
    price: 199,
    image: "https://images.unsplash.com/photo-1512446733611-9099a758e0f2?auto=format&fit=crop&w=320&q=80",
    attributes: "Bluetooth, Portable"
  },
  {
    id: 20,
    name: "Canon PowerShot G7X",
    brand: "Canon",
    manufacturer: "Canon",
    color: "Black",
    size: "Small",
    price: 749,
    image: "https://images.unsplash.com/photo-1519183071298-a2962be56693?auto=format&fit=crop&w=320&q=80",
    attributes: "20MP, WiFi, 4.2x Zoom"
  },
  // ...repeat similar structure for ids 21-100 with diverse brands, manufacturers, colors, sizes, prices, and real image URLs from Unsplash or similar sources
  ...Array.from({length:80},(_,i)=>{
    const keywords = ["phone","laptop","headphones","camera","tablet","speaker","console","watch","monitor","printer"];
    const keyword = keywords[i%keywords.length];
    return {
      id:21+i,
      name:`Demo Product ${21+i}`,
      brand:["Apple","Samsung","Sony","Dell","HP","Lenovo","Google","Microsoft","Bose","Canon"][Math.floor(Math.random()*10)],
      manufacturer:["Foxconn","Compal","Quanta","Wistron","Pegatron","Flextronics","Canon","Sony"][Math.floor(Math.random()*8)],
      color:["Black","White","Silver","Blue"][Math.floor(Math.random()*4)],
      size:["Small","Medium","Large"][Math.floor(Math.random()*3)],
      price:Math.floor(Math.random()*1500)+99,
      image:`https://images.unsplash.com/photo-151${(1000+i)%9999}-a${(100+i)%9999}?auto=format&fit=crop&w=320&q=80`,
      attributes:`${Math.floor(Math.random()*512)+64}GB, ${Math.floor(Math.random()*7)+5}\" Display, ${Math.floor(Math.random()*32)+4}GB RAM`,
      category: keywords[i%keywords.length],
      rating: Math.floor(Math.random()*5)+1
    }
  })
];

const PRODUCTS_PER_PAGE = 9;
let currentPage = 1;
let filteredProducts = products;

function renderProducts(page = 1) {
  const grid = document.getElementById("productGrid");
  // Show loading indicator
  grid.innerHTML = `<div id="productLoading" class="d-flex justify-content-center align-items-center" style="height:320px;"><div class="spinner-border text-primary" style="width:3rem;height:3rem;" role="status"><span class="visually-hidden">Loading...</span></div></div>`;
  setTimeout(() => {
    grid.innerHTML = "";
    const start = (page - 1) * PRODUCTS_PER_PAGE;
    const end = start + PRODUCTS_PER_PAGE;
    const pageProducts = filteredProducts.slice(start, end);
    pageProducts.forEach((p) => {
      const rating = typeof p.rating === "number" ? p.rating : 0;
      const card = document.createElement("div");
      card.className = "col-md-6 col-xl-4 mb-4";
      card.innerHTML = `
        <div class="card h-100 product-card border-0 shadow-lg" style="border-radius:1.5rem;overflow:hidden;transition:box-shadow .2s;background:rgba(255,255,255,0.18);backdrop-filter:blur(12px) saturate(180%);box-shadow:0 8px 32px 0 rgba(31,38,135,0.18);border:1px solid rgba(255,255,255,0.24);">
          <div class="position-relative bg-gradient" style="background:linear-gradient(135deg,rgba(248,250,252,0.7) 60%,rgba(224,231,255,0.7) 100%);">
            <img src="${p.image}" class="card-img-top" alt="${p.name}" style="height:220px;object-fit:cover;border-radius:1.5rem 1.5rem 0 0;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
            <span class="position-absolute top-0 start-0 m-2 badge rounded-pill bg-warning text-dark shadow">${p.size}</span>
            <span class="position-absolute top-0 end-0 m-2 badge rounded-pill bg-info text-dark shadow">${p.category || ''}</span>
            <span class="position-absolute bottom-0 start-0 m-2 badge rounded-pill bg-success text-white shadow"><i class="fa fa-star"></i> ${rating}</span>
            <button class="btn btn-light btn-sm position-absolute top-0 end-0 m-2 rounded-circle product-details-btn shadow" style="z-index:2;backdrop-filter:blur(4px);background:rgba(255,255,255,0.7);" title="View Details" data-id="${p.id}"><i class="fa fa-eye"></i></button>
          </div>
          <div class="card-body d-flex flex-column" style="background:rgba(255,255,255,0.22);backdrop-filter:blur(8px);border-radius:0 0 1.5rem 1.5rem;">
            <h6 class="card-title fw-bold mb-1 text-truncate" title="${p.name}" style="color:#222;text-shadow:0 1px 4px rgba(0,0,0,0.08);">${p.name}</h6>
            <div class="mb-2 d-flex flex-wrap gap-1">
              <span class="badge bg-primary">${p.brand}</span>
              <span class="badge bg-secondary">${p.manufacturer}</span>
              <span class="badge bg-info text-dark">${p.color}</span>
            </div>
            <div class="mb-2 text-muted small">${p.attributes}</div>
            <div class="mb-2 fw-bold fs-5 text-success">$${p.price}</div>
            <div class="d-flex gap-2 mt-auto">
              <button class="btn btn-sm btn-success add-to-cart-btn px-3" data-id="${p.id}" style="box-shadow:0 2px 8px rgba(0,128,0,0.08);"><i class="fa fa-cart-plus me-1"></i>Add to Cart</button>
              <button class="btn btn-sm btn-outline-danger px-3" style="box-shadow:0 2px 8px rgba(255,0,0,0.08);"><i class="fa fa-heart me-1"></i>Wishlist</button>
            </div>
          </div>
        </div>
      `;
      grid.appendChild(card);
    });
    // Attach details popup and add-to-cart events
    setTimeout(() => {
      document.querySelectorAll('.product-details-btn').forEach(btn => {
        btn.onclick = function() {
          const id = parseInt(this.getAttribute('data-id'));
          showProductDetails(id);
        };
      });
      document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.onclick = function() {
          const id = parseInt(this.getAttribute('data-id'));
          addToCart(id);
        };
      });
    }, 10);
    renderPagination();
  }, 400);
  // Attach details popup and add-to-cart events
  setTimeout(() => {
    document.querySelectorAll('.product-details-btn').forEach(btn => {
      btn.onclick = function() {
        const id = parseInt(this.getAttribute('data-id'));
        showProductDetails(id);
      };
    });
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
      btn.onclick = function() {
        const id = parseInt(this.getAttribute('data-id'));
        addToCart(id);
      };
    });
  }, 10);
// Product details modal logic
function showProductDetails(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  let modal = document.getElementById('productDetailsModal');
  // Support multiple images for slider, fallback to single image
  let images = Array.isArray(p.images) ? p.images : [p.image];
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'productDetailsModal';
    modal.className = 'modal fade';
    modal.tabIndex = -1;
    modal.innerHTML = `
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content" style=";border-radius:1.5rem;overflow:hidden;">
          <div class="modal-header" style="background:rgba(255,255,255,0.22);backdrop-filter:blur(8px);border-radius:1.5rem 1.5rem 0 0;">
            <h5 class="modal-title" style="color:#222;text-shadow:0 1px 4px rgba(0,0,0,0.08);">${p.name}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="row g-4">
              <div class="col-md-5">
                <div id="productImageCarousel" class="carousel slide" data-bs-ride="carousel">
                  <div class="carousel-inner">
                    ${images.map((img, idx) => `
                      <div class="carousel-item${idx === 0 ? ' active' : ''}">
                        <img src="${img}" class="d-block w-100 rounded" alt="${p.name}" style="box-shadow:0 4px 24px rgba(0,0,0,0.08);">
                      </div>
                    `).join('')}
                  </div>
                  ${images.length > 1 ? `
                    <button class="carousel-control-prev" type="button" data-bs-target="#productImageCarousel" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#productImageCarousel" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  ` : ''}
                </div>
              </div>
              <div class="col-md-7">
                <h4 class="fw-bold mb-2" style="color:#222;text-shadow:0 1px 4px rgba(0,0,0,0.08);">${p.name}</h4>
                <div class="mb-2">
                  <span class="badge bg-primary">${p.brand}</span>
                  <span class="badge bg-secondary">${p.manufacturer}</span>
                  <span class="badge bg-info text-dark">${p.color}</span>
                  <span class="badge bg-warning text-dark">${p.size}</span>
                  <span class="badge bg-success text-white"><i class="fa fa-star"></i> ${p.rating || ''}</span>
                </div>
                <div class="mb-2"><b>Category:</b> ${p.category || ''}</div>
                <div class="mb-2"><b>Attributes:</b> <span class="text-muted">${p.attributes}</span></div>
                <div class="mb-2"><b>Manufacturer:</b> ${p.manufacturer}</div>
                <div class="mb-2"><b>Brand:</b> ${p.brand}</div>
                <div class="mb-2"><b>Color:</b> ${p.color}</div>
                <div class="mb-2"><b>Size:</b> ${p.size}</div>
                <div class="mb-2 fw-bold fs-4 text-success">$${p.price}</div>
                <div class="d-flex gap-2 mt-3">
                  <button class="btn btn-success add-to-cart-btn-modal" data-id="${p.id}" style="box-shadow:0 2px 8px rgba(0,128,0,0.08);"><i class="fa fa-cart-plus me-1"></i>Add to Cart</button>
                  <button class="btn btn-outline-secondary" style="box-shadow:0 2px 8px rgba(0,0,0,0.08);"><i class="fa fa-heart me-1"></i>Wishlist</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  } else {
    // Update modal content for repeated opens (replace modal-body for reliability)
    modal.querySelector('.modal-title').textContent = p.name;
    // Update carousel images and details
    const modalBody = modal.querySelector('.modal-body');
    if (modalBody) {
      modalBody.innerHTML = `
        <div class="row g-4">
          <div class="col-md-5">
            <div id="productImageCarousel" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                ${images.map((img, idx) => `
                  <div class="carousel-item${idx === 0 ? ' active' : ''}">
                    <img src="${img}" class="d-block w-100 rounded" alt="${p.name}" style="box-shadow:0 4px 24px rgba(0,0,0,0.08);">
                  </div>
                `).join('')}
              </div>
              ${images.length > 1 ? `
                <button class="carousel-control-prev" type="button" data-bs-target="#productImageCarousel" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#productImageCarousel" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              ` : ''}
            </div>
          </div>
          <div class="col-md-7">
            <h4 class="fw-bold mb-2" style="color:#222;text-shadow:0 1px 4px rgba(0,0,0,0.08);">${p.name}</h4>
            <div class="mb-2">
              <span class="badge bg-primary">${p.brand}</span>
              <span class="badge bg-secondary">${p.manufacturer}</span>
              <span class="badge bg-info text-dark">${p.color}</span>
              <span class="badge bg-warning text-dark">${p.size}</span>
              <span class="badge bg-success text-white"><i class="fa fa-star"></i> ${p.rating || ''}</span>
            </div>
            <div class="mb-2"><b>Category:</b> ${p.category || ''}</div>
            <div class="mb-2"><b>Attributes:</b> <span class="text-muted">${p.attributes}</span></div>
            <div class="mb-2"><b>Manufacturer:</b> ${p.manufacturer}</div>
            <div class="mb-2"><b>Brand:</b> ${p.brand}</div>
            <div class="mb-2"><b>Color:</b> ${p.color}</div>
            <div class="mb-2"><b>Size:</b> ${p.size}</div>
            <div class="mb-2 fw-bold fs-4 text-success">$${p.price}</div>
            <div class="d-flex gap-2 mt-3">
              <button class="btn btn-success add-to-cart-btn-modal" data-id="${p.id}" style="box-shadow:0 2px 8px rgba(0,128,0,0.08);"><i class="fa fa-cart-plus me-1"></i>Add to Cart</button>
              <button class="btn btn-outline-secondary" style="box-shadow:0 2px 8px rgba(0,0,0,0.08);"><i class="fa fa-heart me-1"></i>Wishlist</button>
            </div>
          </div>
        </div>
      `;
    }
    // Update add-to-cart button
    const addBtn = modal.querySelector('.add-to-cart-btn-modal');
    if (addBtn) addBtn.setAttribute('data-id', p.id);
  }
  // Attach add-to-cart event in modal
  setTimeout(() => {
    modal.querySelector('.add-to-cart-btn-modal').onclick = function() {
      addToCart(p.id);
    };
  }, 10);
  const bsModal = new bootstrap.Modal(modal);
  bsModal.show();
}
}

// Add to cart logic (demo)
function addToCart(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  // Demo: show toast or alert
  if (!window.cartToast) {
    const toast = document.createElement('div');
    toast.className = 'toast align-items-center text-bg-success border-0 position-fixed bottom-0 end-0 m-4';
    toast.id = 'cartToast';
    toast.setAttribute('role', 'alert');
    toast.setAttribute('aria-live', 'assertive');
    toast.setAttribute('aria-atomic', 'true');
    toast.innerHTML = `<div class="d-flex"><div class="toast-body">Added <b>${p.name}</b> to cart!</div><button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button></div>`;
    document.body.appendChild(toast);
    window.cartToast = new bootstrap.Toast(toast, { delay: 2000 });
  } else {
    window.cartToast._element.querySelector('.toast-body').innerHTML = `Added <b>${p.name}</b> to cart!`;
  }
  window.cartToast.show();
  renderPagination();
}
  
// Helper for slider UI
function createPriceSlider(min, max, valueMin, valueMax) {
  return `<div class="mb-3">
    <label class="form-label fw-semibold">Price Range</label>
    <div class="d-flex align-items-center gap-2">
      <span id="priceSliderMin">$${valueMin}</span>
      <input type="range" class="form-range flex-grow-1" min="${min}" max="${max}" value="${valueMin}" id="priceMinSlider">
      <input type="range" class="form-range flex-grow-1" min="${min}" max="${max}" value="${valueMax}" id="priceMaxSlider">
      <span id="priceSliderMax">$${valueMax}</span>
    </div>
  </div>`;
}
function renderPagination() {
  const grid = document.getElementById("productGrid");
  let pagination = document.getElementById("productPagination");
  if (!pagination) {
    pagination = document.createElement("nav");
    pagination.id = "productPagination";
    pagination.className = "mt-4 d-flex justify-content-center";
    grid.parentElement.appendChild(pagination);
  }
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  let html = '<ul class="pagination">';
  for (let i = 1; i <= totalPages; i++) {
    html += `<li class="page-item${i === currentPage ? ' active' : ''}"><a class="page-link" href="#" data-page="${i}">${i}</a></li>`;
  }
  html += '</ul>';
  pagination.innerHTML = html;
  pagination.querySelectorAll(".page-link").forEach((el) => {
    el.onclick = (e) => {
      e.preventDefault();
      currentPage = parseInt(el.dataset.page);
      renderProducts(currentPage);
    };
  });
}

function applyFilters() {
  const search = document.getElementById("searchInput").value.toLowerCase();
  const priceMin = parseFloat(document.getElementById("priceMinSlider").value) || 0;
  const priceMax = parseFloat(document.getElementById("priceMaxSlider").value) || Infinity;
  const category = document.getElementById("categorySelect").value;
  const rating = parseInt(document.getElementById("ratingSelect").value) || 0;
  const brands = Array.from(document.getElementById("brandSelect").selectedOptions).map(o => o.value);
  const manufacturers = Array.from(document.getElementById("manufacturerSelect").selectedOptions).map(o => o.value);
  const colors = ["Black", "White", "Silver", "Blue"].filter(c => document.getElementById("color"+c).checked);
  const sizes = ["Small", "Medium", "Large"].filter(s => document.getElementById("size"+s).checked);
  filteredProducts = products.filter(p => {
    return (
      (!search || p.name.toLowerCase().includes(search) || p.attributes.toLowerCase().includes(search)) &&
      p.price >= priceMin && p.price <= priceMax &&
      (brands.length === 0 || brands.includes(p.brand)) &&
      (manufacturers.length === 0 || manufacturers.includes(p.manufacturer)) &&
      (colors.length === 0 || colors.includes(p.color)) &&
      (sizes.length === 0 || sizes.includes(p.size)) &&
      (!category || p.category === category) &&
      (!rating || p.rating >= rating)
    );
  });
// ...existing code...
  currentPage = 1;
  renderProducts(currentPage);
}

// Render filter UI (call this after DOMContentLoaded)
function renderFilterUI() {
  // Modern advanced filter section with improved slider and layout
  const priceMin = Math.min(...products.map(p=>p.price));
  const priceMax = Math.max(...products.map(p=>p.price));
  let filterSidebar = document.getElementById("productFilters");
  if (filterSidebar) {
    // Glass effect for sidebar
    filterSidebar.style.background = "rgba(255,255,255,0.18)";
    filterSidebar.style.backdropFilter = "blur(14px) saturate(180%)";
    filterSidebar.style.borderRadius = "1.5rem";
    filterSidebar.style.boxShadow = "0 8px 32px 0 rgba(31,38,135,0.18)";
    filterSidebar.style.border = "1px solid rgba(255,255,255,0.24)";
    // Clear sidebar for full re-render
    filterSidebar.innerHTML = '';
    // Price Range Slider
    const priceRangeContainer = document.createElement("div");
    priceRangeContainer.id = "priceRangeContainer";
    priceRangeContainer.className = "mb-4 p-3 bg-light rounded shadow-sm border";
    priceRangeContainer.style.background = "rgba(255,255,255,0.22)";
    priceRangeContainer.style.backdropFilter = "blur(8px)";
    priceRangeContainer.style.borderRadius = "1rem";
    priceRangeContainer.innerHTML = `
      <label class="form-label fw-semibold mb-2">Price Range</label>
      <div class="d-flex align-items-center gap-2">
        <span id="priceSliderMin" class="fw-bold text-success">$${priceMin}</span>
        <input type="range" class="form-range flex-grow-1" min="${priceMin}" max="${priceMax}" value="${priceMin}" id="priceMinSlider">
        <input type="range" class="form-range flex-grow-1" min="${priceMin}" max="${priceMax}" value="${priceMax}" id="priceMaxSlider">
        <span id="priceSliderMax" class="fw-bold text-success">$${priceMax}</span>
      </div>
    `;
    filterSidebar.appendChild(priceRangeContainer);

    // Category select
    const categories = Array.from(new Set(products.map(p=>p.category))).filter(c => typeof c === 'string' && c.length > 0);
    const categoryDiv = document.createElement("div");
    categoryDiv.className = "mb-3";
    categoryDiv.innerHTML = `
      <label class="form-label fw-semibold">Category</label>
      <select class="form-select" id="categorySelect">
        <option value="">All Categories</option>
        ${categories.map(c=>`<option value="${c}">${c.charAt(0).toUpperCase()+c.slice(1)}</option>`).join("")}
      </select>
    `;
    filterSidebar.appendChild(categoryDiv);

    // Rating select
    const ratingDiv = document.createElement("div");
    ratingDiv.className = "mb-3";
    ratingDiv.innerHTML = `
      <label class="form-label fw-semibold">Minimum Rating</label>
      <select class="form-select" id="ratingSelect">
        <option value="">Any Rating</option>
        ${Array.from({length:5},(_,i)=>`<option value="${i+1}">${i+1}+</option>`).join("")}
      </select>
    `;
    filterSidebar.appendChild(ratingDiv);

    // Brand select
    const brands = Array.from(new Set(products.map(p=>p.brand)));
    const brandDiv = document.createElement("div");
    brandDiv.className = "mb-3";
    brandDiv.innerHTML = `
      <label class="form-label fw-semibold">Brand</label>
      <select class="form-select" id="brandSelect" multiple>
        ${brands.map(b=>`<option value="${b}">${b}</option>`).join("")}
      </select>
    `;
    filterSidebar.appendChild(brandDiv);

    // Manufacturer select
    const manufacturers = Array.from(new Set(products.map(p=>p.manufacturer)));
    const manufacturerDiv = document.createElement("div");
    manufacturerDiv.className = "mb-3";
    manufacturerDiv.innerHTML = `
      <label class="form-label fw-semibold">Manufacturer</label>
      <select class="form-select" id="manufacturerSelect" multiple>
        ${manufacturers.map(m=>`<option value="${m}">${m}</option>`).join("")}
      </select>
    `;
    filterSidebar.appendChild(manufacturerDiv);

    // Color checkboxes
    const colors = ["Black", "White", "Silver", "Blue"];
    const colorDiv = document.createElement("div");
    colorDiv.className = "mb-3";
    colorDiv.innerHTML = `
      <label class="form-label fw-semibold">Color</label>
      <div class="d-flex flex-wrap gap-2">
        ${colors.map(c=>`<div class="form-check"><input class="form-check-input" type="checkbox" id="color${c}"><label class="form-check-label" for="color${c}">${c}</label></div>`).join("")}
      </div>
    `;
    filterSidebar.appendChild(colorDiv);

    // Size checkboxes
    const sizes = ["Small", "Medium", "Large"];
    const sizeDiv = document.createElement("div");
    sizeDiv.className = "mb-3";
    sizeDiv.innerHTML = `
      <label class="form-label fw-semibold">Size</label>
      <div class="d-flex flex-wrap gap-2">
        ${sizes.map(s=>`<div class="form-check"><input class="form-check-input" type="checkbox" id="size${s}"><label class="form-check-label" for="size${s}">${s}</label></div>`).join("")}
      </div>
    `;
    filterSidebar.appendChild(sizeDiv);

    // Search input
    const searchDiv = document.createElement("div");
    searchDiv.className = "mb-3";
    searchDiv.innerHTML = `
      <label class="form-label fw-semibold">Search</label>
      <input type="text" class="form-control" id="searchInput" placeholder="Search products...">
    `;
    filterSidebar.appendChild(searchDiv);

    // Clear filter button
    const clearDiv = document.createElement("div");
    clearDiv.className = "d-grid gap-2 mb-2";
    clearDiv.innerHTML = `<button type="button" class="btn btn-outline-secondary" id="clearFiltersBtn"><i class="fa fa-times me-1"></i>Clear Filters</button>`;
    filterSidebar.appendChild(clearDiv);
  }

  // Slider events
  document.getElementById("priceMinSlider").oninput = function() {
    document.getElementById("priceSliderMin").textContent = `$${this.value}`;
    if (parseInt(this.value) > parseInt(document.getElementById("priceMaxSlider").value)) {
      document.getElementById("priceMaxSlider").value = this.value;
      document.getElementById("priceSliderMax").textContent = `$${this.value}`;
    }
    applyFilters();
  };
  document.getElementById("priceMaxSlider").oninput = function() {
    document.getElementById("priceSliderMax").textContent = `$${this.value}`;
    if (parseInt(this.value) < parseInt(document.getElementById("priceMinSlider").value)) {
      document.getElementById("priceMinSlider").value = this.value;
      document.getElementById("priceSliderMin").textContent = `$${this.value}`;
    }
    applyFilters();
  };

  // Immediate filter on change for all filter controls
  ["searchInput","categorySelect","ratingSelect","brandSelect","manufacturerSelect"].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.oninput = el.onchange = applyFilters;
    }
  });
  ["colorBlack","colorWhite","colorSilver","colorBlue","sizeSmall","sizeMedium","sizeLarge"].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.onchange = applyFilters;
    }
  });

  // Clear filter button logic
  document.getElementById("clearFiltersBtn").onclick = function() {
    document.getElementById("searchInput").value = "";
    document.getElementById("categorySelect").value = "";
    document.getElementById("ratingSelect").value = "";
    document.getElementById("brandSelect").selectedIndex = -1;
    document.getElementById("manufacturerSelect").selectedIndex = -1;
    ["colorBlack","colorWhite","colorSilver","colorBlue","sizeSmall","sizeMedium","sizeLarge"].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.checked = false;
    });
    document.getElementById("priceMinSlider").value = priceMin;
    document.getElementById("priceMaxSlider").value = priceMax;
    document.getElementById("priceSliderMin").textContent = `$${priceMin}`;
    document.getElementById("priceSliderMax").textContent = `$${priceMax}`;
    applyFilters();
  };
}

document.getElementById("productFilters").onsubmit = function(e) {
  e.preventDefault();
  applyFilters();
};

// Ensure filter UI is initialized once after DOM is ready
document.addEventListener("DOMContentLoaded", function() {
  renderFilterUI();
});
document.getElementById("productFilters").onreset = function() {
  setTimeout(() => {
    filteredProducts = products;
    currentPage = 1;
    renderProducts(currentPage);
  }, 50);
};

document.getElementById("sortSelect").onchange = function() {
  const val = this.value;
  if (val === "priceLow") filteredProducts.sort((a,b) => a.price - b.price);
  else if (val === "priceHigh") filteredProducts.sort((a,b) => b.price - a.price);
  else if (val === "newest") filteredProducts.sort((a,b) => b.id - a.id);
  else filteredProducts = filteredProducts.slice(); // default
  renderProducts(currentPage);
};


// Initial render

// --- Cart State and UI ---
let cart = [];

function updateCartCounter() {
  let cartCount = cart.reduce((sum, item) => sum + item.qty, 0);
  let cartCounter = document.getElementById('cartCounter');
  if (!cartCounter) {
    // Add cart icon and counter to navbar if not present
    let nav = document.querySelector('.navbar, .topbar, header');
    if (nav) {
      let cartBtn = document.createElement('div');
      cartBtn.className = 'position-relative ms-3';
      cartBtn.innerHTML = `
        <a href="#" id="cartIconBtn" class="btn btn-light rounded-circle shadow-sm" style="font-size:1.5rem;">
          <i class="fa fa-shopping-cart"></i>
          <span id="cartCounter" class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">0</span>
        </a>
      `;
      nav.appendChild(cartBtn);
    }
    cartCounter = document.getElementById('cartCounter');
  }
  if (cartCounter) cartCounter.textContent = cartCount;
}

function showCartFlyout() {
  let flyout = document.getElementById('cartFlyout');
  if (!flyout) {
    flyout = document.createElement('div');
    flyout.id = 'cartFlyout';
    flyout.className = 'card shadow-lg position-fixed top-0 end-0 m-3';
    flyout.style.zIndex = 9999;
    flyout.style.width = '350px';
    flyout.style.maxHeight = '80vh';
    flyout.style.overflowY = 'auto';
    document.body.appendChild(flyout);
  }
  // Always show flyout, hide others
  document.querySelectorAll('.card#cartFlyout').forEach(f => { if (f !== flyout) f.remove(); });
  // Render cart items
  let itemsHtml = '';
  if (cart.length === 0) {
    itemsHtml = '<div class="p-4 text-center text-muted">Your cart is empty.</div>';
  } else {
    itemsHtml = cart.map(item => {
      const p = products.find(x => x.id === item.id);
      return `<div class="d-flex align-items-center p-2 border-bottom">
        <img src="${p.image}" alt="${p.name}" style="width:48px;height:48px;object-fit:cover;border-radius:8px;">
        <div class="ms-2 flex-grow-1">
          <div class="fw-bold">${p.name}</div>
          <div class="small text-muted">${item.qty} x $${p.price}</div>
        </div>
        <button class="btn btn-sm btn-outline-danger remove-cart-item" data-id="${item.id}"><i class="fa fa-trash"></i></button>
      </div>`;
    }).join('');
    itemsHtml += `<div class="p-3 fw-bold text-end">Total: $${cart.reduce((sum, item) => {
      const p = products.find(x => x.id === item.id);
      return sum + (p.price * item.qty);
    }, 0)}</div>`;
  }
  // Always show link to cart details page
  itemsHtml += `<div class="p-3 text-center"><a href="cart.html" class="btn btn-primary w-100">Go to Cart Page</a></div>`;
  flyout.innerHTML = `<div class="card-header bg-light fw-bold">Your Cart <button type="button" class="btn-close float-end" id="closeCartFlyout"></button></div>${itemsHtml}`;
  flyout.style.display = 'block';
  // Remove item event
  flyout.querySelectorAll('.remove-cart-item').forEach(btn => {
    btn.onclick = function() {
      const id = parseInt(this.getAttribute('data-id'));
      cart = cart.filter(item => item.id !== id);
      updateCartCounter();
      showCartFlyout();
    };
  });
  // Close event (use event delegation for reliability)
  setTimeout(() => {
    const closeBtn = flyout.querySelector('#closeCartFlyout');
    if (closeBtn) {
      closeBtn.onclick = function(e) {
        e.stopPropagation();
        flyout.style.display = 'none';
      };
    }
  }, 10);
  // Keep flyout open on hover
  flyout.onmouseenter = function() { flyout.style.display = 'block'; };
  flyout.onmouseleave = function() { flyout.style.display = 'none'; };
}

function hideCartFlyout() {
  let flyout = document.getElementById('cartFlyout');
  if (flyout) flyout.style.display = 'none';
}

// Cart icon hover/click events
document.addEventListener('DOMContentLoaded', function() {
  updateCartCounter();
  setTimeout(() => {
    let cartIconBtn = document.getElementById('cartIconBtn');
    if (cartIconBtn) {
      cartIconBtn.onmouseenter = function() {
        showCartFlyout();
        let flyout = document.getElementById('cartFlyout');
        if (flyout) flyout.style.display = 'block';
      };
      cartIconBtn.onclick = function(e) {
        e.preventDefault();
        showCartFlyout();
        let flyout = document.getElementById('cartFlyout');
        if (flyout) flyout.style.display = 'block';
      };
      cartIconBtn.onmouseleave = function() {
        setTimeout(() => {
          let flyout = document.getElementById('cartFlyout');
          if (flyout && !flyout.matches(':hover')) flyout.style.display = 'none';
        }, 300);
      };
    }
  }, 500);
});

// --- Add to Cart logic override ---
function addToCart(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  let cartItem = cart.find(item => item.id === id);
  if (cartItem) {
    cartItem.qty += 1;
  } else {
    cart.push({ id: id, qty: 1 });
  }
  updateCartCounter();
  // Demo: show toast or alert
  if (!window.cartToast) {
    const toast = document.createElement('div');
    toast.className = 'toast align-items-center text-bg-success border-0 position-fixed bottom-0 end-0 m-4';
    toast.id = 'cartToast';
    toast.setAttribute('role', 'alert');
    toast.setAttribute('aria-live', 'assertive');
    toast.setAttribute('aria-atomic', 'true');
    toast.innerHTML = `<div class="d-flex"><div class="toast-body">Added <b>${p.name}</b> to cart!</div><button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button></div>`;
    document.body.appendChild(toast);
    window.cartToast = new bootstrap.Toast(toast, { delay: 2000 });
  } else {
    window.cartToast._element.querySelector('.toast-body').innerHTML = `Added <b>${p.name}</b> to cart!`;
  }
  window.cartToast.show();
  renderPagination();
}

renderProducts(currentPage);
