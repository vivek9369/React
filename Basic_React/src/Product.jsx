import "./Product.css"
import Price from "./Price"

function Product({ title, description, idx }) {
  let oldPrices = ["12,999", "10,555", "46,554", "14,557"]
  let newPrices = ["9,999", "8,900", "28,454", "4,145"]

  return (
    <div className="Product">
      <h4>{title}</h4>
      <h5>{description}</h5>
      <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
    </div>
  )
}

export default Product