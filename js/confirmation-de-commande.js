 function confirmationCommande() {
     // Déclaration de toutes les variables de la page HTML
     const myHeaders = new Headers();
     const init = {
         method: "GET",
         headers: myHeaders,
         mode: "cors",
         cache: "default",
     };
     fetch("cart.json", init).then((res) => res.json());
 }
 confirmationCommande();