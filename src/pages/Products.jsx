import { useEffect, useState } from 'react' 
import Product from './../components/Product'

const Products = () =>{
    const [request, setRequest] = useState([])
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
        <>
            <h1>Productos</h1>
            <div>
                {request.length === 0 ?(
                    <p>No Hay Productos</p> 
                ):(
                    <Product productList={request}/>
                )}
            </div>
        </>
    )
}

export default Products