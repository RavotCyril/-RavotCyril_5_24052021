let cart = JSON.parse(localStorage.getItem("cart"));

function RecapitulatifCommande() {
    let orderId = localStorage.getItem("orderConfirmation");
    let prixPaniertotal = localStorage.getItem("prixPaniertotal");
    if (orderId != null) {;
        //let cart = JSON.parse(localStorage.getItem("cart"));
        document.getElementById("OrderId").innerHTML += "<p id='OrderId' class='text-center m-4' > Voici - l'identifiant de votre commande : " + "<span class='OrderId'>" + orderId + "</p>"
        document.getElementById("PrixTotalCommande").innerHTML += "<p id='PrixTotalCommande'class='text-center m-4' > Prix Total de votre commande : " + "<span class='PrixTotalCommande'>" + prixPaniertotal + " €" + "</span>" + "</p>"
    } else {
        alert("L'identifiant de commande ou le prix sont vides");
    }
}
RecapitulatifCommande();