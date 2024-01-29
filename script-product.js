let shopItems = localStorage.getItem('shopItemsData');
let shopItemsData = shopItems ? JSON.parse(shopItems) : [] ;

let basketData = localStorage.getItem('basket');
let basket = basketData ? JSON.parse(basketData) : [] ;

const getProductId = () =>{
  const urlParams = new URLSearchParams(window.location.search)
  return urlParams.get('id');
}

const productId = getProductId();
console.log(productId);
const product = shopItemsData.find((x) => x.id === productId);

document.title = product.name;

let generateProductPage = () =>{
  let {id,name,price,desc,img} = product;
  document.querySelector('.product-page-container').innerHTML = `
  <div class="product-container">
  <img src=${img} alt="Img Not Found" class="product-img">
  <div class="product-details">
    <div class="product-details-text">
      <div class="product-text-noprice">
        <div class="product-details-title">${name}</div>
        <div class="product-details-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer eget aliquet nibh praesent. Pellentesque elit eget gravida cum sociis natoque penatibus. Sapien nec sagittis aliquam malesuada bibendum arcu. Lectus proin nibh nisl condimentum id venenatis a condimentum vitae. Cras tincidunt lobortis feugiat vivamus at. Amet justo donec enim diam vulputate.</div>
      </div>
      <div class="product-page-price">$ ${price}</div>
    </div>
    <div class="product-buttons">
      <a href="checkout.html">
        <button class="add-to-cart-btn" onclick="addBtn()">
          <div class="back-btn-inside">
        Add to Cart <i class="bi bi-cart"></i>
        </div>
    </button>
    </a>
      <a href="index.html">
      <button class="back-btn">Back</button>
      </a>
    </div>
  </div>
  </div>
  </div>
  `
}

const addBtn = () => {
  const basketItem = basket.find((x) => x.id === productId);
  if(!basketItem){
    basket.push({
      id:productId,
      item:1
    })
  }

  localStorage.setItem('basket', JSON.stringify(basket));
}


let total = 0;
basket.forEach((x) => {
  total += x.item;
});

document.querySelector('.cart-amount').innerHTML = total;

generateProductPage();

