import styles from './../styles/Products.module.css'
import { useState } from 'react'

const Product = ({
    productList,
    searchProduct
}) =>{
    let products = productList

    if(searchProduct !== ''){
        products = products.filter(product => product.product_name.toLowerCase().includes(searchProduct.toLowerCase()))
        if(!products){
            products = []
        }
    }

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
                    {products.map( product =>(
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