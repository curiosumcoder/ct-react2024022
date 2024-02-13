const showProduct = (id, name, price) => {
    console.info('Prueba de TypeScript!' + new Date().toLocaleTimeString());
    console.table([id, name, price]);
};
showProduct('1', 'Laptop', 1500);
export default showProduct;
