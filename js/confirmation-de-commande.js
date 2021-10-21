function RecapitulatifCommande() {
    let orderId = localStorage.getItem("orderConfirmation");
    console.log(orderId);
    if (orderId != null) {
        //let cart = JSON.parse(localStorage.getItem("cart"));
        document.getElementById("OrderId").innerHTML += "<p id='OrderId' class='text-center' >" + orderId + "</p>"
            //document.getElementById("PrixTotalCommande").innerHTML += "<p id='PrixTotalCommande' class='text-center'> Prix Total de votre commande:" + cart.prixPaniertotal + "</p>"
    } else {
        alert("L'identifiant de commande ou le prix sont vides");
    }
}
RecapitulatifCommande();