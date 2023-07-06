let addToCartProducts = [];

function addToCartFunction(value) {
    addToCartProducts.push(value);

    localStorage.setItem('addToCart', JSON.stringify(addToCartProducts))
    console.log(addToCartProducts);
}



function removeCard(button) {
    const productCard = button.closest('.product-card');
    productCard.remove();
}
let number = 0;


let nmbr = 0;

function incrementNumber() {
  nmbr++;
  document.getElementById('nmbr').textContent = nmbr;
}

function incrementNumber() {
  number++;
  document.getElementById('number').textContent = number;
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
            <img src="${product.productImg}" alt="" class="img-fluid d-none d-md-block rounded mb-2 shadow ">
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
          <button class="btn btn-white border-secondary bg-white btn-md mb-2" >
            <i class="fas fa-sync"></i>
          </button>
          <button class="btn btn-white border-secondary bg-white btn-md mb-2" onclick="removeCard(this)">
            <i class="fas fa-trash"></i>
          </button>
        </div>
      </td>
    </tr>
  `;

    productContainer.appendChild(productCard);
});






// let total = 0;

// function addValue() {
//   const inputField = document.getElementById('input-field');
//   const value = parseInt(inputField.value);

//   if (!isNaN(value)) {
//     total += value;
//     inputField.value = '';
//     updateTotal();
//   }
// }

// function updateTotal() {
//   const totalElement = document.getElementById('total');
//   totalElement.textContent = 'Total: ' + total;
// }


// const cardContainer = document.getElementById('card-container');
// const addCardBtn = document.getElementById('add-card-btn');
// const calculateTotalBtn = document.getElementById('calculate-total-btn');
// const totalElement = document.getElementById('total');

// let cards = [];

// addCardBtn.addEventListener('click', addCard);
// calculateTotalBtn.addEventListener('click', calculateTotal);

// function addCard() {
//   const card = document.createElement('div');
//   card.classList.add('card');
//   const input = document.createElement('input');
//   input.type = 'number';
//   card.appendChild(input);
//   cardContainer.appendChild(card);
//   cards.push(input);
// }

// function calculateTotal() {
//   let total = 0;
//   for (let i = 0; i < cards.length; i++) {
//     const value = parseFloat(cards[i].value) || 0;
//     total += value;
//   }
//   totalElement.textContent = 'Total: ' + total;
// }