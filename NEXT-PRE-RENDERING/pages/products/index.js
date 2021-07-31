function ProductList({ products }) {


    return <div>
        <h1>List of products</h1>
        {products.map((product) => {
            
            return <h2>{product.title}{product.id}{ product.price}</h2>
        })}
    </div>
}

export default ProductList;


export async function getStaticProps() {
console.log('Generating or regenerating product list');
    const response = await fetch("http://localhost:4000/products")
    const data = await response.json();

    return {
        props: {
            products: data
        },
        revalidate:10,
    }
}