// Render Module for Product Cards and Collections
const RenderModule = {
  createProductCard(product, collectionId) {
    return `
      <div class="product-card" id="${product.slug}" onclick="window.location.href='collection-detail.html?id=${collectionId}#${product.slug}'">
        <div class="product-image-placeholder">
          <span>Ảnh: ${product.name}</span>
        </div>
        <h3 class="product-title">${product.name}</h3>
        <p class="product-price">${product.price}</p>
      </div>
    `;
  },

  renderCollectionDetail() {
    const container = document.getElementById('collection-detail-container');
    const headerTitle = document.getElementById('collection-title');
    const headerSection = document.querySelector('.collection-header');
    
    if (!container) return;

    // Get collection ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const collectionId = urlParams.get('id');

    if (!collectionId) {
      container.innerHTML = '<p>Không tìm thấy bộ sưu tập.</p>';
      return;
    }

    const collection = getCollectionById(collectionId);
    if (!collection) {
      container.innerHTML = '<p>Bộ sưu tập không tồn tại.</p>';
      return;
    }

    // Update Header
    if (headerTitle) headerTitle.textContent = collection.name;
    if (headerSection) headerSection.style.backgroundColor = collection.themeColor;

    // Track View
    Analytics.viewCollection(collection.id, collection.name);

    // Render Products
    let html = '';
    collection.products.forEach(product => {
      html += this.createProductCard(product, collection.id);
    });

    container.innerHTML = html;
  },

  renderAllCollections() {
    const container = document.getElementById('all-collections-container');
    if (!container) return;

    let html = '';
    collections.forEach(col => {
      html += `
        <section style="margin-bottom: var(--space-xxl);">
          <div class="collection-header" style="background-color: ${col.themeColor}; cursor: pointer;" onclick="window.location.href='collection-detail.html?id=${col.id}'">
            <h1>${col.name}</h1>
          </div>
          <div class="product-grid">
      `;
      
      // Render first 4 products as preview
      const previewProducts = col.products.slice(0, 4);
      previewProducts.forEach(product => {
        html += this.createProductCard(product, col.id);
      });

      html += `
          </div>
          <div style="text-align: center; margin-top: var(--space-lg);">
            <a href="collection-detail.html?id=${col.id}" class="nav-link">Xem toàn bộ ${col.name} &rarr;</a>
          </div>
        </section>
      `;
    });

    container.innerHTML = html;
  }
};
