import { useState } from 'react'
import styles from './../styles/ModalAddProduct.module.css'

const ModalAddProduct = ({
    product,
    setAddProduct,
    ProductList,
    setAddProductList,
    removeProduct,
    setRemoveProduct
}) =>{
    const [quantity, setQuantity] = useState(1)
    const [isActive, setIsActive] = useState(false)

    const btnCancelarClick = () =>{
        setAddProduct({})
        setRemoveProduct(false)
    }

    const btnAceptarClick = () =>{
        if(removeProduct){
            const productUpdated = [...ProductList]
            const idProduct = productUpdated.findIndex( (p) =>(p.id === product.id) )
            productUpdated[idProduct].quantity = parseInt(product.quantity) - parseInt(quantity)
            if(productUpdated[idProduct].quantity === 0){
                productUpdated.splice(idProduct, 1)
            }
            setAddProductList(productUpdated)
            setAddProduct({})
            setRemoveProduct(false)
        }else{
            const productUpdated = {...product}
            productUpdated.quantity = quantity
            setAddProductList([...ProductList, productUpdated])
            setAddProduct({})
        }
    }

    const checkboxOnChange = () =>{
        if(!isActive){
            setQuantity(product.quantity)
        }else{
            setQuantity(1)
        }
        setIsActive(!isActive)
    }

    return (
    <div className={styles.containerModal}>
        <div className={styles.container}>
            <h3>{!removeProduct ? 'Comprando' : 'Eliminando'} {product.product_name}</h3>
            <div className={styles.cont}>
                <label>Cantidad: </label>
                <input onChange={(e)=>setQuantity(e.target.value)} value={quantity} type="number" max={product.quantity} min={1}/>
            </div>
            {removeProduct &&
            <label><input onChange={()=>checkboxOnChange()} defaultValue={false} type="checkbox" />Eliminar todo ({product.quantity}) Productos</label>
            }
            <div className={styles.cont}>
            <button onClick={()=>btnAceptarClick()} className={styles.btnAceptar}>Aceptar</button>
            <button onClick={()=>btnCancelarClick()} className={styles.btnCancelar}>Cancelar</button>
            </div>
        </div>
    </div>
    )
}

export default ModalAddProduct