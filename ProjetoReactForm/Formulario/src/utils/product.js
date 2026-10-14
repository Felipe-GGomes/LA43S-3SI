export function createProduct(name, price){
    return {
        id: crypto.randomUUID(),
        name:name.trim(),
        price,
        quantity: 1
    }
}