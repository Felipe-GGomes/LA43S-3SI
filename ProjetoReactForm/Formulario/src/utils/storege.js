export const STORAGE_KEY = "produtos";

export function loadProducts(){
    const produtos = localStorage.getItem('produtos');

    if(produtos){
        return JSON.parse(produtos);
    }
    return [];
}

export function saveProducts(produtos){
    localStorage.setItem('produtos', JSON.stringify(produtos));
}