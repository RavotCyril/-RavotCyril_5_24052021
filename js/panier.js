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
        let quantiteSelectionne = document.createElement("p");
        let prixDuProduitSelectionne = document.createElement("p");
        let prixTotalDuPanier = document.createElement("p");
        let pTag = document.createElement("p");

        let formContactTag = document.createElement("form");
        let inputFirstNameTag = document.createElement("input");
        let firstNameValid = document.createElement("span");
        let errorFirstNameMiss = document.createElement("span");
        let labelFirstName = document.createElement("label");

        let inputLastNameTag = document.createElement("input");
        let lastNameValid = document.createElement("span");
        let errorLastNameMiss = document.createElement("span");
        let labelLastName = document.createElement("label");

        let inputAdresseTag = document.createElement("input");
        let adresseValid = document.createElement("span");
        let errorAdresseMiss = document.createElement("span");
        let labelAdress = document.createElement("label");

        let inputCityTag = document.createElement("input");
        let cityValid = document.createElement("span");
        let errorCityMiss = document.createElement("span");
        let labelCity = document.createElement("label");

        let inputEmailTag = document.createElement("input");
        let emailValid = document.createElement("span");
        let errorEmailMiss = document.createElement("span");
        let labelEmail = document.createElement("label");

        let inputButtonValidationCommandeTag = document.createElement("input");


        // Appel des classes- Boostrap- TextContent- Id des balises html qui construise le squelette de la page.

        newMain.className = "container-fluid";
        b.appendChild(newMain);
        sectionTag.className = "row";
        h1Tag.className = "col-12 my-4 text-center";
        pTag.className = "font-weight-bolder my-4 text-center";
        h1Tag.textContent = "Panier : Détails";
        produitSelectionne.textContent = "Produit Selectionné";
        quantiteSelectionne.textContent = "Quantité Selectionné";
        prixDuProduitSelectionne.textContent = "Prix Du Produit Selectionné";
        prixTotalDuPanier.textContent = "Prix Total Du Panier";
        articleTag.className = "col-12 Article-Panier-Détails";
        pTag.textContent = "Veuillez remplir ce formulaire pour valider votre commande";
        formContactTag.id = "Contact";
        formContactTag.setAttribute("method", "post");
        formContactTag.setAttribute("action", "confirmation-de-commande.html");
        formContactTag.className = "col-sm-4 col-md-6 mx-auto text-center";

        // Appel des balises en Html pour construire le squelette de la page.

        newMain.appendChild(sectionTag);
        sectionTag.appendChild(h1Tag);
        sectionTag.appendChild(articleTag);
        articleTag.appendChild(produitSelectionne);
        articleTag.appendChild(quantiteSelectionne);
        articleTag.appendChild(prixDuProduitSelectionne);
        articleTag.appendChild(prixTotalDuPanier);
        sectionTag.appendChild(pTag);
        sectionTag.appendChild(formContactTag);

        // Formulaire Prénom

        inputFirstNameTag.className = "Input-Page-Panier Largeur-Input col-12 my-4 mx-auto";
        inputFirstNameTag.id = "First-Name";
        inputFirstNameTag.placeholder = "Entrer un Prénom";
        inputFirstNameTag.setAttribute("required", "");
        // inputFirstNameTag.setAttribute("onkeyup", "return limitlength(this, 20)");
        inputFirstNameTag.name = "First-Name";
        inputFirstNameTag.type = "text";
        labelFirstName.htmlFor = "First-Name";
        labelFirstName.name = "First-Name";
        formContactTag.appendChild(firstNameValid);
        formContactTag.appendChild(errorFirstNameMiss);
        formContactTag.appendChild(inputFirstNameTag);
        inputFirstNameTag.appendChild(labelFirstName);

        // Formulaire Nom

        inputLastNameTag.className = "Input-Page-Panier Largeur-Input col-12 my-4 mx-auto";
        inputLastNameTag.id = "LastName";
        inputLastNameTag.placeholder = "Entrer un Nom";
        inputLastNameTag.setAttribute("required", "");
        inputLastNameTag.name = "LastName";
        inputLastNameTag.type = "text";
        labelLastName.htmlFor = "LastName";
        formContactTag.appendChild(lastNameValid);
        formContactTag.appendChild(errorLastNameMiss);
        formContactTag.appendChild(inputLastNameTag);
        inputLastNameTag.appendChild(labelLastName);

        // Formulaire Adresse

        inputAdresseTag.className = "Input-Page-Panier Largeur-Input col-12 my-4 mx-auto";
        inputAdresseTag.id = "Adresse";
        inputAdresseTag.placeholder = "Entrer une Adresse";
        inputAdresseTag.setAttribute("required", "");
        inputAdresseTag.name = "Adresse";
        inputAdresseTag.type = "text";
        labelAdress.htmlFor = "Adresse";
        formContactTag.appendChild(adresseValid);
        formContactTag.appendChild(errorAdresseMiss);
        formContactTag.appendChild(inputAdresseTag);
        inputAdresseTag.appendChild(labelAdress);

        // Formulaire Ville

        inputCityTag.className = "Input-Page-Panier Largeur-Input col-12 my-4 mx-auto";
        inputCityTag.id = "Ville";
        inputCityTag.placeholder = "Entrer Une Ville";
        inputCityTag.setAttribute("required", "");
        inputCityTag.name = "Ville";
        inputCityTag.type = "text";
        labelCity.htmlFor = "Ville";
        formContactTag.appendChild(cityValid);
        formContactTag.appendChild(errorCityMiss);
        formContactTag.appendChild(inputCityTag);
        inputCityTag.appendChild(labelCity);

        // Formulaire  Email

        inputEmailTag.className = "Input-Page-Panier Largeur-Input col-12 my-4 mx-auto";
        inputEmailTag.id = "Email";
        inputEmailTag.placeholder = "Entrer un email";
        inputEmailTag.setAttribute("required", "");
        inputEmailTag.name = "Email";
        inputEmailTag.type = "Email";
        labelEmail.htmlFor = "Email";
        formContactTag.appendChild(emailValid);
        formContactTag.appendChild(errorEmailMiss);
        formContactTag.appendChild(inputEmailTag);
        inputEmailTag.appendChild(labelEmail);

        // Page Panier -> Boutton Validation Commande

        inputButtonValidationCommandeTag.id = "Validation Commande";
        inputButtonValidationCommandeTag.className = "Boutton-Largeur-Input my-5 mx-3";
        inputButtonValidationCommandeTag.setAttribute("required", "");
        inputButtonValidationCommandeTag.setAttribute("maxlength", "20");
        inputButtonValidationCommandeTag.type = "submit";
        inputButtonValidationCommandeTag.value = "Validation Commande";
        formContactTag.appendChild(inputButtonValidationCommandeTag);


        /* Création des Variable qui permettent de vérifier les inputs
    Fonction qui permet de valider les données saisies dans le formulaire selon le type de données demandés. 
   Prénom, Nom, Code postal, Mail ... 
   */

        // form.addEventListener("submit", (e) => {

        // function validation(event) {
        //     let myRegex = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;

        //     //Si le champ est remplis et validé avec les données requis.
        //     if (inputFirstNameTag.validity.valid) {
        //         firstNameValid.textContent = 'Prénom Ok';
        //         firstNameValid.style.color = 'green';

        //         //Sinon le champ est complété mais avec des mauvais caractères.

        //     } else if (myRegex.test(inputFirstNameTag.value) == false) {

        //         errorFirstNameMiss.textContent = 'Format Incorrect';
        //         errorFirstNameMiss.style.color = 'orange';
        //         event.preventDefault();

        //     }
        //     //Si le champ est remplis et validé avec les données requis.
        //     if (inputLastNameTag.validity.valid) {

        //         lastNameValid.textContent = 'Nom Ok';
        //         lastNameValid.style.color = 'green';

        //         //Sinon le champ est complété mais avec des mauvais caractères.

        //     } else if (myRegex.test(inputLastNameTag.value) == false) {

        //         errorLastNameMiss.textContent = 'Format Incorrect';
        //         errorLastNameMiss.style.color = 'orange';
        //         event.preventDefault();

        //     }
        //     //Si le champ est remplis et validé avec les données requis.
        //     if (inputAdresseTag.validity.valid) {

        //         adresseValid.textContent = 'Adresse Ok';
        //         adresseValid.style.color = 'green';

        //         //Sinon le champ est complété mais avec des mauvais caractères.
        //     } else if (myRegex.test(inputAdresseTag.value) == false) {

        //         errorAdresseMiss.textContent = 'Format Incorrect';
        //         errorAdresseMiss.style.color = 'orange';
        //         event.preventDefault();

        //     }
        //     //Si le champ est remplis et validé avec les données requis.
        //     if (inputCityTag.validity.valid) {

        //         cityValid.textContent = 'Ville Ok';
        //         cityValid.style.color = 'green';

        //         //Sinon le champ est complété mais avec des mauvais caractères.

        //     } else if (myRegex.test(inputAdresseTag.value) == false) {

        //         errorCityMiss.textContent = 'Format Incorrect';
        //         errorCityMiss.style.color = 'orange';
        //         event.preventDefault();

        //     }
        //     // Email Si le champ est remplis avec des lettres ou chiffres avant l'@ et après l'@ 
        //     // Et suivis d'un point et de 2 à 4 caractères comme .fr  ou .com
        //     // Si le mail n'est pas validé  Erreur d'affichage ( Format incorrecte )
        //     // Autre Error d'affichage si le champ email est vide (Vrai) 

        //     const emailChecker = (value) => {
        //         if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
        //             errorDisplay("email", "Le mail n'est pas valide");
        //             email = null;
        //         } else {
        //             errorDisplay("email", "", true);
        //             email = value;
        //         }

        //         //Si le champ est remplis et validé avec les données requis.
        //         if (emailChecker.test(inputAdresseTag.value) == true) {

        //             emailValid.textContent = 'Email ok';
        //             emailValid.style.color = 'green';
        //             emailValid.style.display = 'flex';
        //             emailValid.style.justifyContent = 'center';

        //             //Sinon le champ est complété mais avec des mauvais caractères.
        //         } else if (emailChecker.test(inputAdresseTag.value) == false) {

        //             errorEmailMiss.textContent = 'Format Incorrect';
        //             errorEmailMiss.style.color = 'orange';
        //             errorEmailMiss.style.display = 'flex';
        //             errorEmailMiss.style.justifyContent = 'center';
        //             event.preventDefault();
        //         }
        //     };
        const inputs = document.querySelectorAll(
            'input[type="text"], input[type="password"]'
        );
        formContactTag.addEventListener("submit", (e) => {
            e.preventDefault();

            if (inputFirstNameTag && inputLastNameTag && inputAdresseTag && inputCityTag && inputEmailTag && confirmPass) {
                const data = {
                    inputFirstNameTag,
                    inputLastNameTag,
                    inputAdresseTag,
                    inputCityTag,
                    inputEmailTag,
                };
                console.log(data);

                inputs.forEach((input) => (input.value = ""));

                inputFirstNameTag = null;
                inputLastNameTag = null;
                inputAdresseTag = null;
                inputCityTag = null;
                inputEmailTag = null;

                alert("Inscription validée !");
            } else {
                alert("veuillez remplir correctement les champs");
            }
            /* Avec l'input du bouton Validation Commande faire une fonction 
            Qui contrôle si tout les inputs (champs) du formulaire ont bien été validés partout 
            Pour ensuite pouvoir cliquer sur le bouton validation Commande et envoyer le formulaire.*/

            inputs.forEach((input) => {
                input.addEventListener("input", (e) => {
                    switch (e.target.id) {
                        case "prénom":
                            inputFirstNameTag(e.target.value);
                            break;
                        case "Nom":
                            inputLastNameTag(e.target.value);
                            break;
                        case "Adresse":
                            inputAdresseTag(e.target.value);
                            break;
                        case "Ville":
                            inputCityTag(e.target.value);
                            break;
                        case "email":
                            emailChecker(e.target.value);
                            break;
                        case "confirm":
                            inputButtonValidationCommandeTag(e.target.value);
                            break;
                        default:
                            nul;
                    }
                });
            });
        })();

        // let payload = {
        //     a: 1,
        //     b: 2
        // };

        // let data = new FormData();
        // data.append("json", JSON.stringify(payload));

        // fetch("/echo/json/", {
        //         method: "POST",
        //         body: data
        //     })
        //     .then(function validation(res) { return res.json(); })
        //     .then(function validation(data) { alert(JSON.stringify(data)) })