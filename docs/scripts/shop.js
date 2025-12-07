let cart = []
let uniqueCart = []

const items = {
    "ceramicMug": {name:"Ceramic Mug", price:"14.99"},
    "cuttingBoard": {name:"Cutting Board", price:"39.99"},
    "kitchenKnifeSet": {name:"Kitchen Knife set", price:"59.99"},
    "reusableGroceryBag": {name:"Reusable Grocery Bag", price:"9.99"},
    "foodStorageContainers": {name:"Food Storage Containers", price:"24.99"},
    "premiumCoffeeBlend": {name:"Premium Coffee Blend", price:"16.99"},
}


function addToCart(itemToAdd) {
    cart.push(itemToAdd);
    refreshCart(cart.length);
    
}

function buyAlert() {
    document.getElementById("cartAdd").style.visibility = 'visible';
    document.getElementById("cartAdd").style.opacity = '1';

    setTimeout(() => {
        document.getElementById("cartAdd").style.opacity = '0'
    }, 1500)
}

function refreshCart(cartlength){
    document.getElementById("cart").innerHTML = "(" + cartlength + ")";
}

function makeCartUnique() {
    uniqueCart = []
    for (let i = 0; i < cart.length; i++) {
        const existingIndex = uniqueCart.findIndex(item => item.name === cart[i].name);
        if (existingIndex !== -1) {
            uniqueCart[existingIndex].quantity += 1;
        } else {
            uniqueCart.push({"name": cart[i].name, "price": cart[i].price, "quantity": 1
            });
        }
    }
}

function renderCart(){
    const receipt1 = document.getElementsByClassName("shoppingList1")[0];
    const receipt2 = document.getElementsByClassName("shoppingList2")[0];
    const finalreceipt = document.getElementsByClassName("finalAllitems")[0];
    const finaldiscount = document.getElementsByClassName("finalDiscount")[0];
    const finaltotal = document.getElementsByClassName("finalTotal")[0];
    receipt1.innerHTML = "";
    receipt2.innerHTML = "";
    finalreceipt.innerHTML = "";
    let totalprice = 0
    for (let i = 0; i < uniqueCart.length; i++) {
        if (i > 7){
            const itemName = document.createElement("h5");
            itemName.textContent = uniqueCart[i]["name"] + " x" + uniqueCart[i].quantity;
    
            const itemPrice = document.createElement("p");
            itemPrice.textContent = "$" + parseFloat(uniqueCart[i]["price"]) + " x " + uniqueCart[i].quantity + " = " + "$" +uniqueCart[i].quantity * parseFloat(uniqueCart[i]["price"]);
            // itemPrice.textContent = "$" + uniqueCart[i].quantity * parseFloat(uniqueCart[i]["price"]);
            totalprice += parseFloat(uniqueCart[i]["price"]) * uniqueCart[i].quantity
    
            receipt2.appendChild(itemName);
            receipt2.appendChild(itemPrice);
        } else{
            const itemName = document.createElement("h5");
            itemName.textContent = uniqueCart[i]["name"] + " x" + uniqueCart[i].quantity;
    
            const itemPrice = document.createElement("p");
            itemPrice.textContent = "$" + parseFloat(uniqueCart[i]["price"]) + " x " + uniqueCart[i].quantity + " = " + "$" +uniqueCart[i].quantity * parseFloat(uniqueCart[i]["price"]);
            // itemPrice.textContent = "$" + uniqueCart[i].quantity * parseFloat(uniqueCart[i]["price"]);
            totalprice += parseFloat(uniqueCart[i]["price"]) * uniqueCart[i].quantity

            receipt1.appendChild(itemName);
            receipt1.appendChild(itemPrice);
        }
}

    finalreceipt.innerHTML = totalprice
    if (cart.length > 2) {
        finaldiscount.innerHTML = "20% (more than 3 items)"
    } else {
        finaldiscount.innerHTML = "0% (not enough items)"
    }
    
    if (cart.length > 2) {
        finaltotal.innerHTML = (totalprice * 0.8).toFixed(2)
    } else {
        finaltotal.innerHTML = (totalprice).toFixed(2)
    }

};

function openCart() {
    document.getElementsByClassName("modal")[0].style.display = "block";
}
function openSummary(){
    document.getElementsByClassName("summary")[0].style.visibility = "visible";
    makeCartUnique();
    renderCart();
}

function closeWindows(event) {
    if (event.target.className == "modal"){
        document.getElementsByClassName("modal")[0].style.display = "none";
        document.getElementsByClassName("summary")[0].style.visibility = "hidden";
        document.getElementById("spinner1").style.display = "none ";
    }
}

function loading(){
    document.getElementById("continueToSummary").innerHTML = "";
    document.getElementById("spinner1").style.display = "block";
    setTimeout(() => {
        openSummary();
      }, "1500");
}

function formSubmitWithoutRefreshing(event) {
    event.preventDefault();
    loading();
}

function confirmOrder(){
    document.getElementsByClassName("modal")[0].style.display = "none";
    document.getElementsByClassName("summary")[0].style.visibility = "hidden";
    document.getElementById("spinner1").style.display = "none ";
    alert("Order successfully submitted!");
    cart = [];
    document.getElementById("cart").innerHTML = "(0)";
}
