 function confirmationCommande() {
     // Déclaration de toutes les variables de la page HTML

     const myHeaders = new Headers();
     const donneesFormulaire = {
         method: "GET",
         headers: myHeaders,
         mode: "cors",
         cache: "default",
     };
     fetch("http://localhost:3000/api/furniture/order", donneesFormulaire).then((res) => res.djson());
 }
 confirmationCommande();