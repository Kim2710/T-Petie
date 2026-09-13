// Initialize Navigation Logic
document.addEventListener('DOMContentLoaded', () => {
  const NavModule = {
    init() {
      this.renderMegaMenu();
      this.setupMobileMenu();
      this.highlightActiveLink();
    },

    renderMegaMenu() {
      // Find the mega menu container
      const megaMenuContainer = document.querySelector('.mega-menu-inner');
      if (!megaMenuContainer || typeof collections === 'undefined') return;

      // Render 4 columns based on collections
      let html = '';
      collections.forEach((col, index) => {
        html += `
          <div class="mega-col col-${index + 1}">
            <a href="collection-detail.html?id=${col.id}" class="mega-col-title" 
               onclick="Analytics.viewCollection('${col.id}', '${col.name}')">
               ${col.name}
            </a>
            <ul class="mega-col-list">
        `;
        
        // Render max 6 products per column to avoid overcrowding the menu
        const displayProducts = col.products.slice(0, 6);
        displayProducts.forEach(prod => {
          html += `
            <li>
              <a href="collection-detail.html?id=${col.id}#${prod.slug}"
                 onclick="Analytics.viewProduct('${prod.id}', '${prod.name}', '${col.id}')">
                 ${prod.name}
              </a>
            </li>
          `;
        });
        
        if (col.products.length > 6) {
           html += `<li><a href="collection-detail.html?id=${col.id}"><em>Xem tất cả...</em></a></li>`;
        }

        html += `
            </ul>
          </div>
        `;
      });

      megaMenuContainer.innerHTML = html;

      // Track menu hover for analytics
      const collectionsLink = document.querySelector('.mega-menu-wrapper');
      if(collectionsLink) {
        collectionsLink.addEventListener('mouseenter', () => {
          Analytics.menuInteraction('hover', 'Collections');
        });
      }
    },

    setupMobileMenu() {
      const toggleBtn = document.querySelector('.menu-toggle');
      const nav = document.querySelector('.main-nav');
      
      // Create overlay
      const overlay = document.createElement('div');
      overlay.className = 'mobile-overlay';
      document.body.appendChild(overlay);

      if (!toggleBtn || !nav) return;

      const toggleMenu = () => {
        nav.classList.toggle('open');
        overlay.classList.toggle('active');
        // Prevent body scroll when menu is open
        document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
      };

      toggleBtn.addEventListener('click', toggleMenu);
      overlay.addEventListener('click', toggleMenu);

      // Accordion for mega menu on mobile
      const megaMenuWrapper = document.querySelector('.mega-menu-wrapper > .nav-link');
      if (megaMenuWrapper) {
        megaMenuWrapper.addEventListener('click', (e) => {
          if (window.innerWidth <= 991) {
            e.preventDefault();
            const megaMenu = document.querySelector('.mega-menu');
            megaMenu.classList.toggle('accordion-open');
          }
        });
      }
    },

    highlightActiveLink() {
      const currentPath = window.location.pathname.split('/').pop() || 'index.html';
      const navLinks = document.querySelectorAll('.main-nav .nav-link');
      
      navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }
  };

  NavModule.init();
});
