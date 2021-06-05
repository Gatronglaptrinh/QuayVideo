var manufactureList = {
	"Apple": [
		"Iphone5", "Iphone5s", "Iphone12", "Iphone12 Pro Max","Iphone10","Iphone9","Laptop"
	],
	"Sam Sung": [
		"Galaxy S5", "Galaxy 10", "Galaxy A31", "Galaxy Note 10","Galaxy J3 Pro","Galaxy Pro Max"
	],
	"GL": [
		"Tivi 30ich", "Smartphone", "Tivi 4K", "LG V20", "LG V60"
	],
	"Windows": [
		"Windows 5", "Windows 7", "Windows 7 Basic", "Windows 10", "Windows 10 Basic"
	],
	"Android": [
		"Android 9","Android 10","Android 11", "Android TV Smart Box"
	],
	"Microsoft": [
		"Phần mềm Microsoft Word","Phần mềm Microsoft Exel","Phần mềm Microsoft PowerPonit","Surface Pro 7"
	]
}

var productList = [];

var manuafaturerTag = document.getElementById('manufacturer_name');
for(var key in manufactureList) {
	manuafaturerTag.innerHTML += `<option value="${key}">${key}</option>`
}
function changeManufacturer() {
	key = manuafaturerTag.value;
	categoryList = manufactureList[key];
	console.log(categoryList);
	var categoryTag = document.getElementById('category_name');
	categoryTag.innerHTML = '';
	if(categoryList != null) {
		for(var i = 0; i < categoryList.length; i++) {
			categoryTag.innerHTML += `<option value="${categoryList[i]}">${categoryList[i]}</option>`
		}
	}
}
function updateTotalPrice() {
	var price = document.getElementById('price').value;
	var quantity = document.getElementById('quantity').value;

	totalPrice = price * quantity;

	document.getElementById('total_price').value = totalPrice;
}
var count = 0;
function addRroduct() {
	var index = document.getElementById('index').value;
	var productName = document.getElementById('product_name').value;
	var manufacturerName = document.getElementById('manufacturer_name').value;
	var price = document.getElementById('price').value;
	var categoryName = document.getElementById('category_name').value;
	var quantity = document.getElementById('quantity').value;
	var totalPrice = document.getElementById('total_price').value;

	var product = {
		'productName': productName,
		'manufacturerName': manufacturerName,
		'categoryName': categoryName,
		'price': price,
		'quantity': quantity,
		'totalPrice': totalPrice
	};

	if (index != '') {
		productList[index] = product;
		showProduct();
		return;
	}

	productList.push(product);

	document.getElementById('result').innerHTML += `
		<tr>
			<td>${++count}</td>
			<td>${productName}</td>
			<td>${manufacturerName}</td>
			<td>${categoryName}</td>
			<td>${price}</td>
			<td>${quantity}</td>
			<td>${totalPrice}</td>
			<td><button id="btn btn-warning" onclick="editProduct(${count - 1})">Edit</button></td>
			<td><button id="btn btn-danger" onclick="deleteProduct(${count - 1})">Delete</button></td>
		</tr>`
}
function deleteProduct(index) {
	console.log(index);
	productList.splice(index, 1);
	showProduct();
}
function showProduct() {
	document.getElementById('result').innerHTML = '';
	for(var i = 0; i < productList.length; i++) {
		document.getElementById('result').innerHTML += `
		<tr>
			<td>${i+1}</td>
			<td>${productList[i].productName}</td>
			<td>${productList[i].manufacturerName}</td>
			<td>${productList[i].categoryName}</td>
			<td>${productList[i].price}</td>
			<td>${productList[i].quantity}</td>
			<td>${productList[i].totalPrice}</td>
			<td><button id="btn btn-warning onclick="editProduct(${i})">Edit</button></td>
			<td><button id="btn btn-danger" onclick="deleteProduct(${i})">Delete</button></td>
		</tr>`
	}
}
function editProduct(index) {
	var product = productList[index];
	document.getElementById('index').value = index;
	document.getElementById('product_name').value = product.productName;
	document.getElementById('manufacturer_name').value = product.manufacturerName;
	changeManufacturer();
	document.getElementById('price').value = product.price;
	document.getElementById('category_name').value = product.categoryName;
	document.getElementById('quantity').value = product.quantity;
	document.getElementById('total_price').value = product.totalPrice;
}