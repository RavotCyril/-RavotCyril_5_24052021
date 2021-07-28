// Variable -> Déclaration  -> Balise body-Main-Logo-Nav-Liens-Titre-Article-... - Html de la page.
(async function() {
    // Déclaration de toutes les variables de la page HTML

    let b = document.body;
    document.querySelector("header");
    let newMain = document.createElement("Main");
    let sectionTag = document.createElement("section");
    let articleTag = document.createElement("article");
    let h1Tag = document.createElement("h1");
    let produitSelectionne = document.createElement("p");
    let vernisSelectionne = document.createElement("p");
    let prixDuProduitSelectionne = document.createElement("p");
    let prixTotalDuPanier = document.createElement("p");
    let pTag = document.createElement("p");

    let divContactTag = document.createElement("div");
    let formContactTag = document.createElement("form");
    let inputFirstNameTag = document.createElement("input");
    let labelFirstName = document.createElement("label");

    let inputLastNameTag = document.createElement("input");
    let labelLastName = document.createElement("label");

    let inputAdresseTag = document.createElement("input");
    let labelAdress = document.createElement("label");

    let inputCityTag = document.createElement("input");
    let labelCity = document.createElement("label");

    let inputEmailTag = document.createElement("input");
    let labelEmail = document.createElement("label");

    let divValidationCommandeTag = document.createElement("div");
    let formValidationCommandeTag = document.createElement("form");
    let inputButtonValidationCommandeTag = document.createElement("input");


    // Appel de toutes les variables pour créer les balises HTML

    newMain.className = "container-fluid";
    b.appendChild(newMain);


    sectionTag.className = "row";
    h1Tag.className = "col-12 my-4 text-center";
    pTag.className = "font-weight-bolder my-4 text-center";
    h1Tag.textContent = "Panier : Détails";
    produitSelectionne.textContent = "Produit Selectionné";
    vernisSelectionne.textContent = "Vernis Selectionné";
    prixDuProduitSelectionne.textContent = "Prix Du Produit Selectionné";
    prixTotalDuPanier.textContent = "Prix Total Du Panier";
    articleTag.className = "col-12 Article-Panier-Détails";
    pTag.textContent = "Veuillez remplir ce formulaire pour valider votre commande";
    formContactTag.id = "Contact";
    formContactTag.className = "col-4 mx-auto text-center";
    inputFirstNameTag.className = "Largeur-Input my-4 mx-2";
    inputFirstNameTag.id = "First-Name";
    inputFirstNameTag.placeholder = "Entrer un Prénom";
    inputFirstNameTag.setAttribute("required", "");
    inputFirstNameTag.name = "First-Name";
    inputFirstNameTag.type = "text";
    labelFirstName.htmlFor = "First-Name";
    labelFirstName.name = "First-Name";
    newMain.appendChild(sectionTag);
    sectionTag.appendChild(h1Tag);
    sectionTag.appendChild(articleTag);
    articleTag.appendChild(produitSelectionne);
    articleTag.appendChild(vernisSelectionne);
    articleTag.appendChild(prixDuProduitSelectionne);
    articleTag.appendChild(prixTotalDuPanier);
    sectionTag.appendChild(pTag);
    sectionTag.appendChild(formContactTag);
    formContactTag.appendChild(inputFirstNameTag);
    inputFirstNameTag.appendChild(labelFirstName);

    // Formulaire Nom

    inputLastNameTag.className = "Largeur-Input my-4 mx-2";
    inputLastNameTag.id = "LastName";
    inputLastNameTag.placeholder = "Entrer un Nom";
    inputLastNameTag.setAttribute("required", "");
    inputLastNameTag.name = "LastName";
    inputLastNameTag.type = "text";
    inputLastNameTag.attributes = "required";
    labelLastName.htmlFor = "LastName";
    formContactTag.appendChild(inputLastNameTag);
    inputLastNameTag.appendChild(labelLastName);

    // Formulaire Adresse

    inputAdresseTag.className = "Largeur-Input my-4 mx-2";
    inputAdresseTag.id = "Adresse";
    inputAdresseTag.placeholder = "Entrer une Adresse";
    inputAdresseTag.setAttribute("required", "");
    inputAdresseTag.name = "Adresse";
    inputAdresseTag.type = "text";
    labelAdress.htmlFor = "Adresse";
    formContactTag.appendChild(inputAdresseTag);
    inputAdresseTag.appendChild(labelAdress);

    // Formulaire Ville

    inputCityTag.className = "Largeur-Input my-4 mx-2";
    inputCityTag.id = "Ville";
    inputCityTag.placeholder = "Entrer Une Ville";
    inputCityTag.setAttribute("required", "");
    inputCityTag.name = "Ville";
    inputCityTag.type = "text";
    labelCity.htmlFor = "Ville";
    formContactTag.appendChild(inputCityTag);
    inputCityTag.appendChild(labelCity);

    // Formulaire  Email

    inputEmailTag.className = "Largeur-Input my-4 mx-2";
    inputEmailTag.id = "Email";
    inputEmailTag.placeholder = "Entrer un email";
    inputEmailTag.setAttribute("required", "");
    inputEmailTag.name = "Email";
    inputEmailTag.type = "Email";
    labelEmail.htmlFor = "Email";
    formContactTag.appendChild(inputEmailTag);
    inputEmailTag.appendChild(labelEmail);

    // Page Panier -> Boutton Validation Commande

    divValidationCommandeTag.className = "form-group mx-auto  text-center";
    formValidationCommandeTag.className = "col-2 mx-auto text-center";
    formValidationCommandeTag.id = "IdCommande";
    inputButtonValidationCommandeTag.className = "Boutton-Largeur-Input my-5 mx-3";
    inputButtonValidationCommandeTag.setAttribute("required", "");
    inputButtonValidationCommandeTag.type = "button";
    inputButtonValidationCommandeTag.value = "Validation Commande";
    sectionTag.appendChild(divValidationCommandeTag);
    divValidationCommandeTag.appendChild(formValidationCommandeTag);
    formValidationCommandeTag.appendChild(inputButtonValidationCommandeTag);


    /* Fonction qui permet de valider les données saisies dans le formulaire selon le type de données demandés. 
   Prénom, Nom, Code postal, Mail ... 
   */

    /* Fonction qui permet de valider les données saisies dans le formulaire selon le type de données demandés. 
   Prénom, Nom, Code postal, Mail ... 
   */
    document.getElementsByTagName("Contact").addEventListener("submit", function(e) {
        let erreur;
        let inputs = document.getElementsByTagName("input");

        for (let i = 0; i < inputs.length; i++) {
            if (!inputs[i].value) {
                erreur = "Veuillez remplir tous les champs demandés du formulaire Contact"
            }
        }
        if (erreur) {
            e.preventDefault();
            document.getElementByTaName("erreur").innerHTML = erreur;
            return false;
        } else {
            alter("Formulaire validé et envoyé !");
        }

    });
})();
// Methode Post Permet d'envoyer les données saisies dans le formulaire.