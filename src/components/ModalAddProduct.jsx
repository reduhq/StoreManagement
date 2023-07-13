import { useState } from 'react'
import styles from './../styles/ModalAddProduct.module.css'

const ModalAddProduct = ({
    product,
    setAddProduct,
    ProductList,
    setAddProductList,
}) =>{
    const [quantity, setQuantity] = useState(1)
    if(Object.keys(product).length === 0){
        return null
    }

    const btnCancelarClick = () =>{
        setAddProduct({})
    }

    const btnAceptarClick = () =>{
        const productUpdated = {...product}
        productUpdated.quantity = productUpdated.quantity = quantity
        setAddProductList([...ProductList, productUpdated])
        setAddProduct({})
    }

    return (
    <div className={styles.containerModal}>
        <div className={styles.container}>
            <h3>Comprando {product.product_name}</h3>
            <div className={styles.cont}>
                <label>Cantidad: </label>
                <input onChange={(e)=>setQuantity(e.target.value)} defaultValue={1} type="number" max={product.quantity} min={1}/>
            </div>
            <div className={styles.cont}>
            <button onClick={()=>btnAceptarClick()} className={styles.btnAceptar}>Aceptar</button>
            <button onClick={()=>btnCancelarClick()} className={styles.btnCancelar}>Cancelar</button>
            </div>
        </div>
    </div>
    )
}

export default ModalAddProduct