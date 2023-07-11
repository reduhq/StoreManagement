import { useEffect } from 'react' 

const Products = () =>{
    useEffect(() =>{
        prod()
    }, [])

    const prod = async () =>{
        const url = 'http://127.0.0.1:8000/api/v1/product/' 
        try{
            const response = await fetch(url)
            const r = await response.json()
            console.log(r)
        }catch(e){
            console.log('error', e)
        }
    }

    return(
        <h1>Productos</h1>
    )
}

export default Products