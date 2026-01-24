function printWeb(message, data = "") {
    if (typeof data === "object" && data !== null) {
        data = JSON.stringify(data, null, 2);
    }
    
    const div = document.createElement("div");
    div.className = "log-line";
    
    if (typeof message === 'string' && /^\d+\./.test(message.trim())) {
        div.classList.add("highlight");
    }

    div.innerText = message + " " + data;
    document.body.appendChild(div);
}


// CÂU 1:
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

// CÂU 2:
const products = [
    new Product(1, "iPhone 15 Pro", 32000000, 10, "Phone", true),
    new Product(2, "Samsung S24 Ultra", 31000000, 5, "Phone", true),
    new Product(3, "MacBook Air M2", 28000000, 0, "Laptop", false),
    new Product(4, "Dell XPS 13", 45000000, 3, "Laptop", true),
    new Product(5, "AirPods Pro 2", 5500000, 20, "Accessories", true),
    new Product(6, "Sony WH-1000XM5", 8000000, 15, "Accessories", true),
    new Product(7, "Xiaomi 14", 18000000, 0, "Phone", true),
];

printWeb("--- Khởi tạo dữ liệu thành công ---");

// CÂU 3:
const productInfo = products.map(p => ({name: p.name, price: p.price}));
printWeb("\n3. Mảng Name và Price:", productInfo);

// CÂU 4:
const inStockProducts = products.filter(p => p.quantity > 0);
printWeb("\n4. Sản phẩm còn hàng:", inStockProducts);

// CÂU 5:
const hasExpensiveProduct = products.some(p => p.price > 30000000);
printWeb("\n5. Có ít nhất một sản phẩm có giá trên 30.000.000 hay không:", hasExpensiveProduct ? "Có" : "Không");

// CÂU 6:
const areAllAccessoriesAvailable = products
    .filter(p => p.category === "Accessories")
    .every(p => p.isAvailable) === true;
printWeb("\n6. Tất cả sản phẩm thuộc danh mục 'Accessories' có đang được bán hay không:", areAllAccessoriesAvailable ? "Có" : "Không");

// CÂU 7:
const totalInventoryValue = products.reduce((total, p) => total + (p.price * p.quantity), 0);
printWeb("\n7. Tổng giá trị kho hàng:", totalInventoryValue);

// CÂU 8:
printWeb("\n8. Danh sách sản phẩm (for...of):");
for (const p of products) {
    const statusText = p.isAvailable ? "Đang bán" : "Ngừng bán";
    printWeb(`- ${p.name} - ${p.category} - ${statusText}`);
}

// CÂU 9:
printWeb("\n9. Chi tiết thuộc tính của sản phẩm (for...in):");
for (let index in products) {
    let currentProduct = products[index];
    // Tạo khoảng trắng để dễ nhìn
    printWeb(`\n--- Sản phẩm thứ ${parseInt(index) + 1} ---`); 

    for (let key in currentProduct) {
        printWeb(`   ${key}: ${currentProduct[key]}`);
    }
}

// CÂU 10:
const activeSellingProducts = products
    .filter(p => p.isAvailable === true && p.quantity > 0)
    .map(p => p.name);
printWeb("\n10. Tên các sản phẩm đang được bán và còn hàng:", activeSellingProducts);