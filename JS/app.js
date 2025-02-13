let selectedProduct;
document.addEventListener('DOMContentLoaded', () => {
    showCategories();
    // showStartPage();
    
});

// document.querySelector('.cat').addEventListener('click', () => {
//     showCategories();


// })


   
    document.querySelector('.categories').addEventListener('click', (event) => {
        if (
        event.target.tagName === "DIV" && 
        event.target.classList.contains("category")){
            const categoryID = event.target.getAttribute('data-id');
            document.querySelector(".products").setAttribute('data-category', categoryID);
            showProductsByCategory(categoryID);
        }
    });

    document.querySelector('.products').addEventListener('click', (event) => {
        if (
            event.target.tagName === "DIV" && 
            event.target.classList.contains("product")){
            const selecteCategoryID = event.target.parentNode.getAttribute('data-category');
            const productID = event.target.getAttribute('data-id');
            const selecteCategory = categories.find(category => category.id === selecteCategoryID);
            selectedProduct = selecteCategory.items.find(item => item.id === productID);
            console.log(selectedProduct);
            showProductInfo(selectedProduct);
            }
});

function showCategories(){
    showEntities('.categories', 'category', categories, 'Категорії:');
}

function showProductsByCategory(categoryID){

    const myCategory = categories.find(category => category.id === categoryID);
    const products = myCategory.items;
    showEntities('.products', 'product', products, myCategory.name);
}

function showEntities(parentSelector, elementClassName, entities, title=null) {
    
    const parentElement = document.querySelector(parentSelector);
    parentElement.innerHTML = `
    <h3>${title}:</h3> <br>
    `;
    
    for (let entity  of entities) {
    const divElement = document.createElement('div');
    divElement.textContent = entity.name;
    divElement.classList.add(elementClassName);
    divElement.setAttribute('data-id', entity.id);
    parentElement.appendChild(divElement);
}}

function showProductInfo(product){
    if(!product){
        return;
    }

    const parent = document.querySelector('.product_info');
    
    let orderForm = document.querySelector('.order_form');
    if (!orderForm) {
        orderForm = document.createElement('div');
        orderForm.classList.add('order_form', 'hidden');
        orderForm.innerHTML = `
            <form name="order">
                <div><input type="text" name="name" placeholder="Your name"></div>
                <div><input type="number" name="amount" placeholder="Amount"><span id="calculation"></span></div>
                <div><input type="text" name="phone" placeholder="Phone number"></div>
                <select name="city">
                    <option value="-1">Select your city</option>
                    <option value="KOZ">Koziatyn</option>
                    <option value="IRP">Irpin</option>
                    <option value="BCH">Bucha</option>
                    <option value="HSTML">Hostomel</option>
                    <option value="KY">Kyiv</option>
                    <option value="ROM">Romanivka</option>
                    <option value="KRK">Kriukivshchyna</option>
                    <option value="VSHN">Vyshneve</option>
                </select>
                <div><button type="button" id="finish_order">Order now</button></div>
            </form>
        `;
    }

    parent.innerHTML = `
        <h2 class="product_name">${product.name}</h2>
        <p class="product_price"><b>Price:</b> $${product.price}</p>
        <p class="product_description"><b>Description:</b> ${product.description}</p>
    `;
    
    parent.appendChild(orderForm);

    const buyBtn = document.createElement('button');
    buyBtn.type = 'button';
    buyBtn.classList.add('buybtn');
    buyBtn.textContent = 'Buy';
    buyBtn.addEventListener('click', () => showOrderForm(product));
    parent.appendChild(buyBtn);

    parent.insertAdjacentHTML('beforeend', generateSliderLayout());
    initializeSlider(product.images);
}


 
function showOrderForm(product){
    const orderForm = document.querySelector('.order_form');
    
    if (!orderForm) {
        console.error('Елемент .order_form не знайдено!');
        return;
    }

    orderForm.classList.remove('hidden');
}


document.querySelector('#finish_order').addEventListener('click', () =>{ 
    const client = {
        name: document.forms.order.name.value,
        city: cities[document.forms.order.city.value],
        
    };


    showSuccessNotification();
    document.querySelector('.order_form').classList.add('hidden');
});

    function showSuccessNotification() {
    const notification =  document.querySelector('.notification');
    notification.textContent = `Congrats! You bought the ${selectedProduct.name}`;
    notification.classList.remove('hidden');
    setTimeout(() => {
        notification.classList.add('hidden')
    }, 3000);
}

document.querySelector('input[name="amount"]').addEventListener('change',  event => {
    const newAmount = event.target.value;
    if(newAmount<1){
        event.target.value = 1;
        return;
    }
    const price = parseInt(selectedProduct.price);
    const result = newAmount * price;
    document.getElementById('calculation').textContent = `$${result}`;
})

