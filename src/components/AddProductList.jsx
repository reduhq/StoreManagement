
const AddProductList = ({
    productList,
    setAddProduct,
    setRemoveProduct
}) =>{

    const btnEliminarClick = (product) =>{
        setAddProduct(product)
        setRemoveProduct(true)
    }
    
    return(
        <>
            <h2>Lista de Productos Agregados</h2>
            <table>
                <thead>
                    <tr>
                        <th>Nombre Producto</th>
                        <th>Precio Producto</th>
                        <th>Cantidad Comprada</th>
                    </tr>
                </thead>

                <tbody>
                    {productList.map( (product) =>(
                        <tr key={product.id}>
                            <td>{product.product_name}</td>
                            <td>{product.price}</td>
                            <td>{product.quantity}</td>
                            <td><button onClick={()=>btnEliminarClick(product)}>Eliminar</button></td>
                        </tr>
                    ) )}
                </tbody>
            </table>
            {productList.length === 0 && <p>No se han agregado productos</p>}
        </>
    )
}

export default AddProductList