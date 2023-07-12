import styles from './../styles/Products.module.css'

const Product = ({
    productList
}) =>{
    return(
        <div className={styles.container}>
            <h2>Lista De Productos</h2>

            <table>
                <thead>
                    <tr>
                        <th>Nombre Producto</th>
                        <th>Precio Producto</th>
                        <th>Cantidad Producto</th>
                    </tr>
                </thead>

                <tbody>
                    {productList.map( product =>(
                        <tr key={product.id}>
                            <td>{product.product_name}</td>
                            <td>{product.price}</td>
                            <td>{product.quantity}</td>
                        </tr>
                    ) )}
                </tbody>
            </table>
        </div>
    )
}

export default Product