function printHello() {
    console.log("Hello")
}

function Button() {
    return (
        <div>
            <button onClick={printHello}>click me!</button>
        </div>
    )
}

export default Button;