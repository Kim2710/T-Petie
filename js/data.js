const collections = [
  {
    id: "hoc-sinh-kem",
    name: "BST Học Sinh Kem",
    themeColor: "#FFD1DC", // Soft Pink
    products: [
      { id: "ao-so-mi-trai-dat", name: "Áo Sơ Mi Trái Đất", price: "Liên hệ để biết giá", slug: "ao-so-mi-trai-dat" },
      { id: "chan-vay-jeans", name: "Chân Váy Jeans", price: "Liên hệ để biết giá", slug: "chan-vay-jeans" },
      { id: "ao-baby-blue", name: "Áo Baby Blue", price: "Liên hệ để biết giá", slug: "ao-baby-blue" },
      { id: "quan-baggy-be", name: "Quần Baggy Be", price: "Liên hệ để biết giá", slug: "quan-baggy-be" },
      { id: "ao-ghile-hoi-hoa", name: "Áo Ghile Hội Hoạ", price: "Liên hệ để biết giá", slug: "ao-ghile-hoi-hoa" },
      { id: "chan-vay-hoi-hoa", name: "Chân Váy Hội Hoạ", price: "Liên hệ để biết giá", slug: "chan-vay-hoi-hoa" },
      { id: "ao-thanh-lam", name: "Áo Thanh Lam", price: "Liên hệ để biết giá", slug: "ao-thanh-lam" },
      { id: "set-nhi-nhanh-3-items", name: "Set Nhí Nhảnh 3 Items", price: "Liên hệ để biết giá", slug: "set-nhi-nhanh-3-items" },
      { id: "vay-thi-ca", name: "Váy Thi Ca", price: "Liên hệ để biết giá", slug: "vay-thi-ca" },
      { id: "vay-nang-mai", name: "Váy Nắng Mai", price: "Liên hệ để biết giá", slug: "vay-nang-mai" },
      { id: "ao-polo-trang-giay", name: "Áo Polo Trang Giấy", price: "Liên hệ để biết giá", slug: "ao-polo-trang-giay" },
      { id: "sooc-jeans", name: "Sooc Jeans", price: "Liên hệ để biết giá", slug: "sooc-jeans" },
      { id: "vay-ghile-o-ly", name: "Váy Ghile Ô Ly", price: "Liên hệ để biết giá", slug: "vay-ghile-o-ly" },
      { id: "set-tinh-khoi", name: "Set Tinh Khôi", price: "Liên hệ để biết giá", slug: "set-tinh-khoi" }
    ]
  },
  {
    id: "trung-thu-kem-com",
    name: "BST Trung Thu Kem & Cốm",
    themeColor: "#C1E1C1", // Soft Green
    products: [
      { id: "set-lan-cat", name: "Set Lân Cát", price: "Liên hệ để biết giá", slug: "set-lan-cat" },
      { id: "set-lan-tuong", name: "Set Lân Tường", price: "Liên hệ để biết giá", slug: "set-lan-tuong" },
      { id: "set-ao-dai-dan-nguyet", name: "Set áo dài Đan Nguyệt", price: "Liên hệ để biết giá", slug: "set-ao-dai-dan-nguyet" },
      { id: "set-mut-tao", name: "Set Mứt Táo", price: "Liên hệ để biết giá", slug: "set-mut-tao" },
      { id: "set-yukata", name: "Set Yukata", price: "Liên hệ để biết giá", slug: "set-yukata" },
      { id: "set-trang-non", name: "Set Trăng Non", price: "Liên hệ để biết giá", slug: "set-trang-non" }
    ]
  },
  {
    id: "ha-mat-t6-2026",
    name: "BST Hạ Mật Tháng 6 2026",
    themeColor: "#AEC6CF", // Pastel Blue
    products: [
      { id: "vay-chanh-tay", name: "Váy Chanh Tây", price: "Liên hệ để biết giá", slug: "vay-chanh-tay" },
      { id: "vay-luu-ly", name: "Váy Lưu Ly", price: "Liên hệ để biết giá", slug: "vay-luu-ly" },
      { id: "vay-muoi-hong", name: "Váy Muối Hồng", price: "Liên hệ để biết giá", slug: "vay-muoi-hong" },
      { id: "vay-sao-xanh-kem-yem", name: "Váy Sao Xanh kèm yếm", price: "Liên hệ để biết giá", slug: "vay-sao-xanh-kem-yem" },
      { id: "set-bien-xanh-kem-ghim-cam", name: "Set Biển Xanh kèm ghim cam", price: "Liên hệ để biết giá", slug: "set-bien-xanh-kem-ghim-cam" },
      { id: "ao-matcha-latte", name: "Áo Matcha Latte", price: "Liên hệ để biết giá", slug: "ao-matcha-latte" },
      { id: "quan-bi-nau", name: "Quần bí nâu", price: "Liên hệ để biết giá", slug: "quan-bi-nau" },
      { id: "quan-vay-2-tang-navy", name: "Quần váy 2 tầng navy", price: "Liên hệ để biết giá", slug: "quan-vay-2-tang-navy" },
      { id: "quan-bi-navy", name: "Quần bí navy", price: "Liên hệ để biết giá", slug: "quan-bi-navy" },
      { id: "ao-so", name: "Áo Sò", price: "Liên hệ để biết giá", slug: "ao-so" },
      { id: "ao-lam-tinh-babydoll-2-tang", name: "Áo Lam Tinh babydoll 2 tầng", price: "Liên hệ để biết giá", slug: "ao-lam-tinh-babydoll-2-tang" },
      { id: "mu-bucket", name: "Mũ bucket", price: "Liên hệ để biết giá", slug: "mu-bucket" }
    ]
  },
  {
    id: "he-t3-khanh-vy",
    name: "BST Hè T3 Khánh Vy",
    themeColor: "#FDFD96", // Pastel Yellow
    products: [
      { id: "vay-thi-tho-trang", name: "Váy Thi Thơ trắng", price: "Liên hệ để biết giá", slug: "vay-thi-tho-trang" },
      { id: "vay-thi-tho-hong", name: "Váy Thi Thơ hồng (ngừng nhận đơn)", price: "Liên hệ để biết giá", slug: "vay-thi-tho-hong" },
      { id: "vay-tuong-vi", name: "Váy Tường Vi", price: "Liên hệ để biết giá", slug: "vay-tuong-vi" },
      { id: "vay-ha-lam", name: "Váy Hạ Lam", price: "Liên hệ để biết giá", slug: "vay-ha-lam" },
      { id: "ao-thanh-yen-chan-vay-caro-xanh", name: "Áo Thanh Yên + Chân váy caro xanh", price: "Liên hệ để biết giá", slug: "ao-thanh-yen-chan-vay-caro-xanh" },
      { id: "ao-mut-cam-quan-sooc-be", name: "Áo Mứt Cam + Quần sooc be", price: "Liên hệ để biết giá", slug: "ao-mut-cam-quan-sooc-be" },
      { id: "ao-chim-cau-trang-quan-bom-jean-xanh-no", name: "Áo Chim Câu trắng + Quần bom jean xanh nơ", price: "Liên hệ để biết giá", slug: "ao-chim-cau-trang-quan-bom-jean-xanh-no" },
      { id: "ao-hai-au-kem-khan-quang-co", name: "Áo Hải Âu kèm khăn quàng cổ", price: "Liên hệ để biết giá", slug: "ao-hai-au-kem-khan-quang-co" },
      { id: "quan-jump-navy-ha-an", name: "Quần Jump navy Hạ An", price: "Liên hệ để biết giá", slug: "quan-jump-navy-ha-an" }
    ]
  }
];

// Helper to get collection by ID
function getCollectionById(id) {
  return collections.find(c => c.id === id);
}

// Helper to get product by slug
function getProductBySlug(collectionId, slug) {
  const collection = getCollectionById(collectionId);
  if (!collection) return null;
  return collection.products.find(p => p.slug === slug);
}
