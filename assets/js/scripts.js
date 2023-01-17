const productForm = document.getElementById("add-product");
const allProducDiv = document.getElementById("all-product");
const productNameInput = document.getElementById("product-name");
const productImageInput = document.getElementById("product-image");
const productPriceInput = document.getElementById("product-price");
const productTextInput = document.getElementById("product-text");

const products = JSON.parse(localStorage.getItem("lsProducts")) || [];

// Add Products
const addProduct = (nameValue, imageValue, priceValue, textValue) => {
  products.push({
    image: imageValue,
    price: priceValue,
    name: nameValue,
    text: textValue,
  });
  // Add Local Stroage Products
  localStorage.setItem("lsProducts", JSON.stringify(products));
};

// Create Element
const createElement = (nameValue, imageValue, priceValue, textValue) => {
  // Create Col
  const productCol = document.createElement("div");
  productCol.classList.add("col-lg-4");

  // Create Single Product
  const productDiv = document.createElement("div");
  productDiv.classList.add("single-product");

  // Create Image
  const productImage = document.createElement("img");
  productImage.setAttribute("src", imageValue);

  // Create Price
  const productPrice = document.createElement("h5");
  productPrice.innerText = priceValue;

  // Create Name
  const productName = document.createElement("h3");
  productName.innerText = nameValue;

  // Create Text
  const productText = document.createElement("p");
  productText.innerText = textValue;

  // Create Single Product
  productDiv.append(productImage, productPrice, productName, productText);

  // Complete Single Product
  productCol.appendChild(productDiv);

  // Complete Col
  allProducDiv.appendChild(productCol);
};

productForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const nameValue = productNameInput.value;
  const imageValue = productImageInput.value;
  const priceValue = productPriceInput.value;
  const textValue = productTextInput.value;

  // Task One
  createElement(nameValue, imageValue, priceValue, textValue);

  // Task Two
  addProduct(nameValue, imageValue, priceValue, textValue);
});

// Task Three (Show Products From Local Storage)
products.forEach((product) => {
  createElement(
    product["name"],
    product["image"],
    product["price"],
    product["text"]
  );
});
