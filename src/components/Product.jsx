import styles from './../styles/Products.module.css'
import { useState, useEffect } from 'react'

const Product = ({
    searchProduct,
    setAddProduct
}) =>{
    const [ProductList, setProductList] = useState([])
    let products= []

    useEffect(() =>{
        getProducts()
    }, [])
    
    const getProducts = async () =>{
        const url = 'http://127.0.0.1:8000/api/v1/product/' 
        try{
            const response = await fetch(url)
            const r = await response.json()
            setProductList(r)
        }catch(e){
            console.log('error', e)
        }
    }
    
    if(searchProduct !== ''){
        products = ProductList.filter(product => product.product_name.toLowerCase().includes(searchProduct.toLowerCase()))
    }else{
        products = ProductList
    }

    const addProduct = (product) =>{
        setAddProduct(product)
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
                            <td><button onClick={()=>addProduct(product)}>Agregar</button></td>
                        </tr>
                    ) )}
                </tbody>
            </table>
            {ProductList.length === 0 && <p>No hay productos</p>}
        </div>
    )
}

export default Product