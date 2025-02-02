document.addEventListener('DOMContentLoaded', () => {
    showCategories();

    document.querySelector('.categories').addEventListener('click', (event) => {
        if (
        event.target.tagName === "DIV" && 
        event.target.classList.contains("category")){
            const categoryID = event.target.getAttribute('data-id');
            showProductsByCategory(categoryID);
        }
    });

    document.querySelector('.products').addEventListener('click', (event) => {
        if (
            event.target.tagName === "DIV" && 
            event.target.classList.contains("product")){
                console.dir(event.target.textContent);
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