import "./Product.css"

function Product ({title, price}) {
    return (
        <div className="Product">
            <h3>{title}</h3>
            <h2>Price:{price}</h2>
        </div>
    );
}

export default Product