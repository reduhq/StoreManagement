
const Product = ({
    productName,
    productPrice,
    productQuantity
}) =>{
    return(
        <div>
            <p>{productName}</p>
            <p>{productPrice}</p>
            <p>{productQuantity}</p>
        </div>
    )
}

export default Product