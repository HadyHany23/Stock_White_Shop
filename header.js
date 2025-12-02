// Inject header anywhere using <div id="header"></div>

function loadHeader() {
  const headerHTML = `
    <!-- HEADER -->
    <header class="header">
        <div class="header-inner">

            <!-- Burger Icon (mobile only) -->
            <button class="burger" aria-label="Menu">
                <i class="fa-solid fa-bars"></i>
            </button>

            <!-- Left Links (desktop only) -->
            <nav class="nav-left">
                <a href="index.html">Home</a>
                <a href="products.html">Products</a>
                <a href="about.html">About</a>
            </nav>

            <!-- Center Logo with Image + Text -->
            <div class="logo">
                <a href="index.html" class="logo-link">
                    <img src="images/SW-Logo.png" alt="Stock White Logo" class="logo-img">
                    <span class="logo-text">Stock<span style="color: gray;">White</span></span>
                </a>
            </div>

            <!-- Right Social Icons -->
            <div class="social">
                <a href="#" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
                <a href="#" aria-label="Tiktok"><i class="fa-brands fa-tiktok"></i></a>
                <a href="#" aria-label="Facebook"><i class="fa-brands fa-facebook"></i></a>
                <a href="#" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>
            </div>
        </div>

        <!-- Mobile Menu -->
        <div class="mobile-menu">
            <a href="index.html">Home</a>
            <a href="products.html">Products</a>
            <a href="about.html">About</a>
            <div class="mobile-social">
                <a href="#" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
                <a href="#" aria-label="Tiktok"><i class="fa-brands fa-tiktok"></i></a>
                <a href="#" aria-label="Facebook"><i class="fa-brands fa-facebook"></i></a>
                <a href="#" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>
                <button class="mobile-menu__close" aria-label="Close menu">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>
        </div>
    </header>
  `;

  document.getElementById("header").innerHTML = headerHTML;

  // Re-attach JS events after injecting HTML
  attachHeaderEvents();
}

function attachHeaderEvents() {
  // Burger opens menu
  document.querySelector(".burger")?.addEventListener("click", () => {
    document.querySelector(".mobile-menu").classList.add("active");
  });

  // Close button
  document.querySelector(".mobile-menu__close")?.addEventListener("click", () => {
    document.querySelector(".mobile-menu").classList.remove("active");
  });
}

// Auto-load header when JS file runs
window.addEventListener("DOMContentLoaded", loadHeader);
