// Mobile menu toggle
document.querySelector('.burger').addEventListener('click', () => {
  document.querySelector('.mobile-menu').classList.toggle('active');
});

// Close menu when clicking a link (optional)
document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.mobile-menu').classList.remove('active');
  });
});

// Fake products data
const products = [
  { name: "White Oversized Shirt", price: "$89", category: "women", img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800" },
  { name: "Minimal Black Blazer", price: "$189", category: "women", img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800" },
  { name: "Linen Summer Dress", price: "$129", category: "men", img: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=800" },
  { name: "Tailored Wool Coat", price: "$279", category: "men", img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800" },
  { name: "Classic White Sneakers", price: "$119", category: "men", img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800" },
  { name: "New Silk Scarf", price: "$95", category: "new", img: "https://images.unsplash.com/photo-1604176354204-9268737828e4?w=800" },
];

// Render all products
// function renderProducts(filter = "all") {
//   const grid = document.getElementById("productsGrid");
//   if (!grid) return;

//   const filtered = filter === "all" ? products : products.filter(p => p.category === filter);

//   if (filtered.length === 0) {
//     grid.innerHTML = `
//       <div class="no-products">
//         <p>No products available in this category yet.</p>
//       </div>
//     `;
//   } else {
//     grid.innerHTML = filtered.map(product => `
//       <div class="product-card">
//         <img src="${product.img}" alt="${product.name}">
//         <h3>${product.name}</h3>
//         <p class="price">${product.price}</p>
//       </div>
//     `).join('');
//   }
// }
function renderProducts(filter = "all") {
  const grid = document.getElementById("productsGrid");
  if (!grid) return;

  const filtered = filter === "all" ? products : products.filter(p => p.category === filter);

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="no-products">
        <p>No products available in this category yet.</p>
      </div>
    `;
  } else {
    grid.innerHTML = filtered.map((product, index) => `
      <div class="product-card" data-id="${index}" onclick="openProductDetails(${index})">
        <img src="${product.img}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p class="price">${product.price}</p>
      </div>
    `).join('');
  }
}

// Function to open product details with correct product
function openProductDetails(productIndex) {
  // Save the selected product index in localStorage
  localStorage.setItem('selectedProductIndex', productIndex);
  // Go to details page
  window.location.href = 'product-details.html';
}

// Filter buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.filter-btn.active').classList.remove('active');
    btn.classList.add('active');
    renderProducts(btn.dataset.category);
  });
});

// Initial load
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
});


// PRODUCT DETAILS PAGE SCRIPT
if (document.querySelector('.product-details-page')) {
  // Example product data (in real project you'd get this from URL or database)
  const currentProduct = {
    name: "White Oversized Shirt",
    code: "SW001",
    price: "$89",
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=1200",
      "https://images.unsplash.com/photo-1618354691551-44de113f0164?w=1200",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=1200",
    ]
  };

  // Fill content
  document.getElementById('productName').textContent = currentProduct.name;
  document.getElementById('productCode').textContent = currentProduct.code;
  document.getElementById('productPrice').textContent = currentProduct.price;
  document.getElementById('bigImage').src = currentProduct.images[0];

  // Thumbnails
  const thumbContainer = document.querySelector('.thumbnail-slider');
  currentProduct.images.forEach((img, i) => {
    const imgEl = document.createElement('img');
    imgEl.src = img;
    if (i === 0) imgEl.classList.add('active');
    imgEl.onclick = () => {
      document.getElementById('bigImage').src = img;
      document.querySelectorAll('.thumbnail-slider img').forEach(t => t.classList.remove('active'));
      imgEl.classList.add('active');
    };
    thumbContainer.appendChild(imgEl);
  });

  // Size & color selection
  document.querySelectorAll('.size-btn').forEach(btn => {
    btn.onclick = () => {
      document.querySelector('.size-btn.active')?.classList.remove('active');
      btn.classList.add('active');
    };
  });

  document.querySelectorAll('.color-btn').forEach(btn => {
    btn.onclick = () => {
      document.querySelector('.color-btn.active')?.classList.remove('active');
      btn.classList.add('active');
    };
  });
}
