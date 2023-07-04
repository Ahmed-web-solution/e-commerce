let addToCartProducts = [];

function addToCartFunction(value) {
  addToCartProducts.push(value);

  localStorage.setItem('addToCart', JSON.stringify(addToCartProducts))
  console.log(addToCartProducts);
}



const productContainer = document.getElementById('product-container');
let productData = localStorage.getItem('addToCart')
console.log(productData);

productData = JSON.parse(productData)
productData.forEach(product => {
  console.log('product0', product);

  const productCard = document.createElement('tr');
  productCard.classList.add('product-card');

  productCard.innerHTML = `
  <tr>
                              <td data-th="Product">
                                  <div class="row">
                                      <div class="col-md-3 text-left">
                                          <img src={../img/hero/${product.productImg}} alt="" class="img-fluid d-none d-md-block rounded mb-2 shadow ">
                                      </div>
                                      <div class="col-md-9 text-left mt-sm-2">
                                          <h4 id="h4"> ${product.productName}</h4>
                                          <p class="font-weight-light">Brand &amp; Name</p>
                                      </div>
                                  </div>
                              </td>
                              <td data-th="Price">${product.price}</td>
                              <td data-th="Quantity">
                                  <input type="number" class="form-control form-control-lg text-center" value="1">
                              </td>
                              <td class="actions" data-th="">
                                  <div class="text-right">
                                      <button class="btn btn-white border-secondary bg-white btn-md mb-2">
                                          <i class="fas fa-sync"></i>
                                      </button>
                                      <button class="btn btn-white border-secondary bg-white btn-md mb-2">
                                          <i class="fas fa-trash"></i>
                                      </button>
                                  </div>
                              </td>
                          </tr>
  `;

  productContainer.appendChild(productCard);
});


