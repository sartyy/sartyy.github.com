function multiplication(){
    num1 = document.getElementById("fNum").value;
    num2 = document.getElementById("SNum").value;
    equal1 = (parseInt(num1) * parseInt(num2));

    document.getElementById("total").innerHTML = equal1;
}
function divition(){
    num1 = document.getElementById("fNum").value;
    num2 = document.getElementById("SNum").value;
    equal2 = (parseInt(num1) / parseInt(num2));

    document.getElementById("total").innerHTML = equal2;
}
function deliver(){
    numOfItems = document.getElementById("itemNum").value;
    totalItems = (15.97 * parseInt(numOfItems));

    shipping = 4.99;
    totalBefore = (parseFloat(shipping) + parseFloat(totalItems));
    estimated = (parseInt(totalBefore)*0.10);
    totalOrder = Math.round(parseFloat(estimated) + parseFloat(totalBefore));
    document.getElementById("summary").innerHTML = "Order Summary";
    document.getElementById("Item-summary").innerHTML = "Items "+"("+numOfItems+"): $" + totalItems;
    document.getElementById("ship-handling").innerHTML = "Shipping and handling: $" + shipping;
    document.getElementById("before-tax").innerHTML = "Total before tax: $" + totalBefore;
    document.getElementById("estimated-tax").innerHTML = "Estimated tax (10%): $" + estimated;
    document.getElementById("Total-order").innerHTML = "Order Total: " + totalOrder;

}