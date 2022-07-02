document.getElementById("redirect-to-homepage").addEventListener("click", ()=>{
    window.location.href = "/html/homepage.html"
})

const shoppingCartContainer = document.getElementById("shopping-cart-container")

document.getElementById("shopping-cart-icon").addEventListener("click", ()=> {
    shoppingCartContainer.classList.add("shopping-cart-visible")
})

function turnOffCart(){
    shoppingCartContainer.classList.remove("shopping-cart-visible")
}