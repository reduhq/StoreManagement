import { useEffect, useState } from 'react' 
import Product from './../components/Product'
import './../styles/Products.css'

const Products = () =>{
    const [request, setRequest] = useState([])
    const [searchProductText, setSearchProductText] = useState('')

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
                    />
                )}
            </div>
        </div>
    )
}

export default Products