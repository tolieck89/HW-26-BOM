document.addEventListener('DOMContentLoaded', () => {
    showCategories();

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
            const selectedProduct = selecteCategory.items.find(item => item.id === productID);
            console.log(selectedProduct);
            showProductInfo(selectedProduct);
            }
});
});

function showCategories(){
    showEntities('.categories', 'category', categories);
}

function showProductsByCategory(categoryID){

    const myCategory = categories.find(category => category.id === categoryID);
    const products = myCategory.items;
    showEntities('.products', 'product', products);
}

function showEntities(parentSelector, elementClassName, entities) {

    const parentElement = document.querySelector(parentSelector);
    parentElement.innerHTML = '';
    
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

    parent.innerHTML = `
    <h2>${product.name}</h2>
    <p>${product.price}</p>
    <p>${product.description}</p>
    `;

    parent.innerHTML += generateSliderLayout();
    initializeSlider();

    const bueBtn = document.createElement('button');
    bueBtn.type = 'button';
    bueBtn.textContent = 'Buy';
    bueBtn.addEventListener('click', () => {
        const notification =  document.querySelector('.notification');
        notification.textContent = `Congrats! You bought the ${product.name}`;
        notification.classList.remove('hidden');
        setTimeout(() => {
            notification.classList.add('hidden')
        }, 3000);

    } );

    parent.appendChild(bueBtn);

}