import Product from "./Product"

function ProductTab() {
  let titles = ["iPhone 16", "ASUS TUF F15", "NVIDIA RTX 5090", "Lockheed Martin F-35"]
  let descriptions = [
    "Powerful smartphone with A18 chip",
    "Gaming laptop with Intel Core i7 and RTX 2050",
    "High-performance graphics card for AI and gaming",
    "Advanced fifth-generation stealth fighter aircraft"
  ]

  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      <Product title={titles[0]} description={descriptions[0]} idx={0} />
      <Product title={titles[1]} description={descriptions[1]} idx={1} />
      <Product title={titles[2]} description={descriptions[2]} idx={2} />
      <Product title={titles[3]} description={descriptions[3]} idx={3} />
    </div>
  )
}

export default ProductTab