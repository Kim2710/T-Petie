// Main application entry point
document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Analytics
  Analytics.init();

  // 2. Render Page Content based on current page
  if (window.location.pathname.includes('collection-detail.html')) {
    RenderModule.renderCollectionDetail();
  } else if (window.location.pathname.includes('collections.html')) {
    RenderModule.renderAllCollections();
  }

  // 3. Handle Smooth Scrolling & Highlighting for hash URLs
  handleHashNavigation();

  // 4. Page Fade-in (Remove 'loaded' class if you want custom logic, else it's in CSS)
  setTimeout(() => {
    document.body.classList.add('loaded');
  }, 100);
});

function handleHashNavigation() {
  const hash = window.location.hash;
  if (!hash) return;

  // Wait a bit for DOM to be fully rendered (especially product cards)
  setTimeout(() => {
    const targetId = hash.substring(1); // remove '#'
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      // 1. Smooth scroll to element
      // Calculate offset for sticky header
      const headerOffset = 100;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // 2. Highlight element
      targetElement.classList.add('highlight-pulse');
      
      // Remove class after animation finishes (2s)
      setTimeout(() => {
        targetElement.classList.remove('highlight-pulse');
      }, 2000);
      
      // Track view product if it's a product hash
      const urlParams = new URLSearchParams(window.location.search);
      const collectionId = urlParams.get('id');
      if (collectionId) {
         const productName = targetElement.querySelector('.product-title')?.textContent;
         Analytics.viewProduct(targetId, productName || targetId, collectionId);
      }
    }
  }, 300); // 300ms delay to ensure cards are rendered
}
