const shoppingCart = []


const totalQty = (idx, productId) => {
    let qty = 1;
    debugger
    for (let i = 0; i < idx; i++) {
        if (shoppingCart[i].id === productId)
            qty += 1
    }
    return qty
}


const displayShoppingCart = () => {
    const cartEl = document.querySelector("#cartItems")
    cartEl.innerHTML = ""

    let grandTotal = 0

    shoppingCart.forEach((product, idx) => {

        /*for(let i = 0; i < idx; i++){
            if(shoppingCart[i].id === productId)
                qty += 1
        }*/
        let subTotal = product.qty * product.price
        cartEl.innerHTML +=
        //console.log(product)
            `
        <section class="shoppingCart__item">
        <div>${product.name}</div>
        <div>${product.qty}</div>
        
        <div>${subTotal.toLocaleString("en-US", {
                style: "currency",
                currency: "USD"
            })}</div>

            <button id="${product.id}" class="cart_removeButton">Remove</button>

        </section>
        `
// <button id="${idx}" class="cart_removeButton">Remove</button>
           
        grandTotal += subTotal
    })

    cartEl.innerHTML += `
      <h3>You owe us: ${grandTotal.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })}</h3>
    `

    // Get a reference to all purchase buttons
    const allRemoveButtons = document.querySelectorAll(".cart_removeButton")

    // Add a click event listener to each button
    for (const button of allRemoveButtons) {
        button.addEventListener(
            "click",
            (event) => {
                console.log(event.target)
                //const indexToRemove = parseInt(event.target.id)
                const foundProduct = products.find((product) => {
                    return parseInt(event.target.id) === product.id
                })

                //debugger
                shoppingCart.forEach((prod, indexToRemove) => {
                    if (prod.id === foundProduct.id) {
                        prod.qty -= 1
                        if (prod.qty === 0){
                            shoppingCart.splice(indexToRemove, 1)
                        }
                    }
                    displayShoppingCart()
                }
                )

            }
            )
    }
}













