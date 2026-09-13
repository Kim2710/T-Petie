const Analytics = {
  // Flag to indicate if we're in dev mode
  isDev: true,

  // Initialize analytics
  init: function() {
    this.track('page_view', { 
      page_path: window.location.pathname,
      page_title: document.title
    });
  },

  // Main tracking function
  track: function(eventName, eventParams = {}) {
    // Add common parameters like timestamp
    const payload = {
      ...eventParams,
      timestamp: new Date().toISOString()
    };

    if (this.isDev) {
      console.log(`%c[Analytics] %c${eventName}`, 'color: #3b82f6; font-weight: bold;', 'color: #10b981; font-weight: bold;', payload);
    } else {
      // Future: Replace with actual tracking code, e.g., gtag
      // if (typeof gtag === 'function') {
      //   gtag('event', eventName, payload);
      // }
    }
  },

  // Specific helper methods for the application
  viewCollection: function(collectionId, collectionName) {
    this.track('view_collection', { collection_id: collectionId, collection_name: collectionName });
  },

  viewProduct: function(productId, productName, collectionId) {
    this.track('view_product', { product_id: productId, product_name: productName, collection_id: collectionId });
  },

  viewSizeGuide: function() {
    this.track('view_size_guide');
  },

  clickOffer: function(offerId) {
    this.track('click_offer', { offer_id: offerId });
  },

  menuInteraction: function(action, categoryHovered) {
    this.track('menu_interaction', { action: action, category: categoryHovered });
  }
};
