import { useEffect, useState } from 'react' 
import Product from './../components/Product'
import './../styles/Products.css'
import AddProductList from '../components/AddProductList'
import ModalAddProduct from '../components/ModalAddProduct'

const Products = () =>{
    const [request, setRequest] = useState([])
    const [searchProductText, setSearchProductText] = useState('')
    const [addProduct, setAddProduct] = useState({})
    const [addProductList, setAddProductList] = useState([])
    const [removeProduct, setRemoveProduct] = useState(false)

    useEffect(() =>{
        prod()
    }, [])

    const prod = async () =>{
        const url = 'http://127.0.0.1:8000/api/v1/product/' 
        try{
            const response = await fetch(url)
            const r = await response.json()
            setRequest(r)
        }catch(e){
            console.log('error', e)
        }
    }
    
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
                name="searchProduct" 
                placeholder='Buscar por Nombre del Producto'
                value={searchProductText}
                onChange={e => setSearchProductText(e.target.value)}
            />
            <div>
                {request.length === 0 ?(
                    <p>No Hay Productos</p> 
                ):(
                    <Product 
                        productList={request}
                        searchProduct={searchProductText}
                        setAddProduct={setAddProduct}
                    />
                )}
            </div>
            <div>
                {Object.keys(addProductList).length === 0 ?(
                    <p>No hay Productos Agregados</p>
                ):(
                    <AddProductList 
                        products={addProductList}
                        setAddProduct={setAddProduct}
                        setRemoveProduct={setRemoveProduct}
                    />
                )}
            </div>
        </div>
    )
}

export default Products