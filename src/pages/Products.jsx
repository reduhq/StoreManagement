import { useState } from 'react' 
import Product from './../components/Product'
import './../styles/Products.css'
import AddProductList from '../components/AddProductList'
import ModalAddProduct from '../components/ModalAddProduct'

const Products = () =>{
    const [searchProductText, setSearchProductText] = useState('')
    const [addProduct, setAddProduct] = useState({})
    const [addProductList, setAddProductList] = useState([])
    const [removeProduct, setRemoveProduct] = useState(false)

    return(
        <div className='container'>
            {Object.keys(addProduct).length !== 0 && 
                <ModalAddProduct 
                product={addProduct}
                setAddProduct={setAddProduct}
                ProductList={addProductList}
                setAddProductList={setAddProductList}
                removeProduct={removeProduct}
                setRemoveProduct={setRemoveProduct}
            />}

            <h1>Productos</h1>
            <input 
                className='txtSearchProductos'
                type="text" 
                placeholder='Buscar por Nombre del Producto'
                value={searchProductText}
                onChange={e => setSearchProductText(e.target.value)}
            />
            <div>
                <Product 
                    searchProduct={searchProductText}
                    setAddProduct={setAddProduct}
                />
            </div>
            <div>
                <AddProductList 
                    productList={addProductList}
                    setAddProduct={setAddProduct}
                    setRemoveProduct={setRemoveProduct}
                />
            </div>
        </div>
    )
}

export default Products