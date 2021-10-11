  function afficherPanier() {
      let cart = JSON.parse(localStorage.getItem("cart"));
      let prixTotale1;
      let prixTotale2;
      let prixTotale3;
      let prixTotale4;
      let prixTotale5;
      let quantite1;
      let quantite2;
      let quantite3;
      let quantite4;
      let quantite5;
      let prix1;
      let prix2;
      let prix3;
      let prix4;
      let prix5;

      //  5 articles,  13 Options =  18 Possibilités d'achats d'articles;

      for (let index1 = 0; index1 < 4; index1++) {
          if (cart[index1].idproduit == "5be9cc611c9d440000c1421e") {
              //   let comptageDuNombreDoption = cart[index1].varnish.match(/(\w+)/g).length;
              //   console.log(comptageDuNombreDoption);
              document.getElementById("basket_tablebody").innerHTML += "<tr id='Article1' class='row-fluid' data-id=" + cart[index1].idproduit + "><td class='Name'>" + cart[index1].name + "</td>" + "<td class='Varnish'>" + cart[index1].varnish + "</td>" + "<td class='Quantite'>" + (quantite1 = cart[index1].quantite) + "</td>" + "<td class='Prix'>" + (prix1 = cart[index1].prix) + "</td></tr>"
              prixTotale1 = (parseInt(quantite1) * parseInt(prix1)); /* * comptageDuNombreDoption */
              console.log(prixTotale1);
          } else if (cart[index1].idproduit == undefined) {
              document.getElementById("basket_tablebody").innerHTML == null;
          }
      }
      for (let index2 = 4; index2 < 6; index2++) {
          if (cart[index2].idproduit == "5beaadda1c9d440000a57d98") {
              document.getElementById("basket_tablebody").innerHTML += "<tr id='article2' class='row-fluid' data-id=" + cart[index2].idproduit + "><td class='Name'>" + cart[index2].name + "</td>" + "<td class='Varnish'>" + cart[index2].varnish + "</td>" + "<td class='Quantite'>" + (quantite2 = cart[index2].quantite) + "</td>" + "<td class='Prix'>" + (prix2 = cart[index2].prix) + "</td></tr>"
              prixTotale2 = (parseInt(quantite2) * parseInt(prix2));
              console.log(prixTotale2);
          } else if (cart[index2].idproduit == undefined) {
              document.getElementById("basket_tablebody").innerHTML == null;
          }
      }

      for (let index3 = 6; index3 < 9; index3++) {
          if (cart[index3].idproduit == "5beaae361c9d440000a57d99") {
              document.getElementById("basket_tablebody").innerHTML += "<tr id='article3' class='row-fluid' data-id=" + cart[index3].idproduit + "><td class='Name'>" + cart[index3].name + "</td>" + "<td class='Varnish'>" + cart[index3].varnish + "</td>" + "<td class='Quantite'>" + (quantite3 = cart[index3].quantite) + "</td>" + "<td class='Prix'>" + (prix3 = cart[index3].prix) + "</td></tr>"
              prixTotale3 = (parseInt(quantite3) * (1099));
              console.log(prixTotale3);
          } else if (cart[index3].idproduit == undefined) {
              document.getElementById("basket_tablebody").innerHTML == null;
          }
      }

      for (let index4 = 9; index4 < 11; index4++) {
          if (cart[index4].idproduit == "5beaaf2e1c9d440000a57d9a") {
              document.getElementById("basket_tablebody").innerHTML += "<tr id='article4' class='row-fluid' data-id=" + cart[index4].idproduit + "><td class='Name'>" + cart[index4].name + "</td>" + "<td class='Varnish'>" + cart[index4].varnish + "</td>" + "<td class='Quantite'>" + (quantite4 = cart[index4].quantite) + "</td>" + "<td class='Prix'>" + (prix4 = cart[index4].prix) + "</td></tr>"
              prixTotale4 = (parseInt(quantite4) * parseInt(prix4));
              console.log(prixTotale4);
          } else if (cart[index4].idproduit == undefined) {
              document.getElementById("basket_tablebody").innerHTML == null;
          }
      }

      for (let index5 = 11; index5 < 13; index5++) {
          if (cart[index5].idproduit == "5beab2061c9d440000a57d9b") {
              document.getElementById("basket_tablebody").innerHTML += "<tr id='article5' class='row-fluid' data-id=" + cart[index5].idproduit + "><td class='Name'>" + cart[index5].name + "</td>" + "<td class='Varnish'>" + cart[index5].varnish + "</td>" + "<td class='Quantite'>" + (quantite5 = cart[index5].quantite) + "</td>" + "<td class='Prix'>" + (prix5 = cart[index5].prix) + "</td></tr>"
              prixTotale5 = (parseInt(quantite5) * parseInt(prix5));
              console.log(prixTotale5);
          } else if (cart[index5].idproduit == undefined) {
              document.getElementById("basket_tablebody").innerHTML == null;
          }
      }

      /* L'opérateur OU logique (||) (disjonction logique) renvoie vrai si et seulement si au moins un de ses opérandes est vrai.
      Toutefois, || peut aussi être utilisé avec des valeurs non-booléennes et, dans ce cas, renverra une valeur non-booléenne. */
      let prixPaniertotal = (parseInt(prixTotale1) + parseInt(prixTotale2) + parseInt(prixTotale3) + parseInt(prixTotale4) + parseInt(prixTotale5));
      let quantitePaniertotal = (parseInt(quantite1) + parseInt(quantite2) + parseInt(quantite3) + parseInt(quantite4) + parseInt(quantite5));

      document.getElementById("article6").innerHTML += "<tr>" + "<td>" + "</td>" + "<td>" + "</td>" + "<td>" + quantitePaniertotal + "</td>" + "<td >" + prixPaniertotal + "€" + "</td></tr>"
      console.log(cart);

  }
  afficherPanier();

  // Function Principal du formulaire du panier 

  function formulaire() {

      let sectionTag = document.getElementById("Formulaire");
      let formContactTag = document.createElement("form");
      let inputFirstNameTag = document.createElement("input");
      let firstNameValid = document.createElement("span");
      let labelFirstName = document.createElement("label");

      let inputLastNameTag = document.createElement("input");
      let lastNameValid = document.createElement("span");
      let labelLastName = document.createElement("label");

      let inputAdresseTag = document.createElement("input");
      let adresseValid = document.createElement("span");
      let labelAdress = document.createElement("label");

      let inputCityTag = document.createElement("input");
      let cityValid = document.createElement("span");
      let labelCity = document.createElement("label");

      let inputEmailTag = document.createElement("input");
      let emailValid = document.createElement("span");
      let labelEmail = document.createElement("label");

      let inputButtonValidationCommandeTag = document.createElement("input");


      // Appel des classes- Boostrap- TextContent- Id des balises html qui construise le squelette de la page du formulaire.

      firstNameValid.className = 'ClassErrorInputFirstNameTag';
      lastNameValid.className = 'ClassErrorInputLastNameTag';
      adresseValid.className = 'ClassErrorInputAdresseTag';
      cityValid.className = 'ClassErrorInputCityTag';
      emailValid.className = 'ClassErrorInputMailTag d-flex justify-content-center';
      formContactTag.id = "Contact";
      formContactTag.setAttribute("method", "post");
      formContactTag.setAttribute("action", "confirmation-de-commande.html");
      formContactTag.className = "col-8 col-sm-6 col-md-6 mx-auto text-center";


      // Formulaire Prénom

      inputFirstNameTag.className = "Input-Page-Panier Largeur-Input col-12 my-4 mx-auto";
      inputFirstNameTag.id = "firstName";
      inputFirstNameTag.placeholder = "Entrer un Prénom";
      inputFirstNameTag.setAttribute("required", "");
      inputFirstNameTag.name = "firstName";
      inputFirstNameTag.type = "text";
      labelFirstName.htmlFor = "firstName";
      labelFirstName.name = "firstName";

      sectionTag.appendChild(formContactTag);
      formContactTag.appendChild(labelFirstName);
      formContactTag.appendChild(inputFirstNameTag);
      formContactTag.appendChild(firstNameValid);

      // Formulaire Nom

      inputLastNameTag.className = "Input-Page-Panier Largeur-Input col-12 my-4 mx-auto";
      inputLastNameTag.id = "lastName";
      inputLastNameTag.placeholder = "Entrer un Nom";
      inputLastNameTag.setAttribute("required", "");
      inputLastNameTag.name = "lastName";
      inputLastNameTag.type = "text";
      labelLastName.htmlFor = "lastName";
      formContactTag.appendChild(labelLastName);
      formContactTag.appendChild(inputLastNameTag);
      formContactTag.appendChild(lastNameValid);

      // Formulaire Adresse

      inputAdresseTag.className = "Input-Page-Panier Largeur-Input col-12 my-4 mx-auto";
      inputAdresseTag.id = "adresse";
      inputAdresseTag.placeholder = "Entrer une Adresse";
      inputAdresseTag.setAttribute("required", "");
      inputAdresseTag.name = "adresse";
      inputAdresseTag.type = "text";
      labelAdress.htmlFor = "adresse";
      formContactTag.appendChild(labelAdress);
      formContactTag.appendChild(inputAdresseTag);
      formContactTag.appendChild(adresseValid);

      // Formulaire Ville

      inputCityTag.className = "Input-Page-Panier Largeur-Input col-12 my-4 mx-auto";
      inputCityTag.id = "ville";
      inputCityTag.placeholder = "Entrer Une Ville";
      inputCityTag.setAttribute("required", "");
      inputCityTag.name = "ville";
      inputCityTag.type = "text";
      labelCity.htmlFor = "ville";
      formContactTag.appendChild(labelCity);
      formContactTag.appendChild(inputCityTag);
      formContactTag.appendChild(cityValid);

      // Formulaire  Email

      inputEmailTag.className = "Input-Page-Panier Largeur-Input col-12 my-4 mx-auto";
      inputEmailTag.id = "email";
      inputEmailTag.placeholder = "Entrer un email";
      inputEmailTag.setAttribute("required", "");
      inputEmailTag.name = "email";
      inputEmailTag.type = "email";
      labelEmail.htmlFor = "email";
      formContactTag.appendChild(labelEmail);
      formContactTag.appendChild(inputEmailTag);
      formContactTag.appendChild(emailValid);

      // Page Panier -> Boutton Validation Commande

      inputButtonValidationCommandeTag.id = "Validation Commande";
      inputButtonValidationCommandeTag.className = "Boutton-Largeur-Input my-5 mx-3";
      inputButtonValidationCommandeTag.setAttribute("required", "");
      inputButtonValidationCommandeTag.type = "submit";
      inputButtonValidationCommandeTag.value = "Validation Commande";
      formContactTag.appendChild(inputButtonValidationCommandeTag);


      // Variable errorTag -> Fonction du code d'erreur avec message en cas de mauvais caractères dans les inputs.

      let errorTag = (tag, message, valid, invalid) => {
          const container = document.querySelector("." + tag);

          if (invalid) {
              container.classList.add("invalid");
              container.textContent = message;
          } else if (valid) {
              container.classList.remove("invalid");
              container.textContent = message;
          }
      };
      // Variable validTag -> Fonction du code de validation avec message en cas de données exactes.

      let validTag = (tag, message, valid, invalid) => {
          const container = document.querySelector("." + tag);

          if (valid) {
              container.classList.add("valid");
              container.textContent = message;

          } else if (invalid) {
              container.classList.remove("valid");
              container.textContent = message;
          }
      };

      // Variable inputFirstName (Prénom) : Fonction du code de validation ou d'erreur selon la valeur tapper dans l'input.

      let inputFirstNameTagChecker = (value) => {
          if (value.length > 0 && (value.length < 3 || value.length > 20)) {
              errorTag("ClassErrorInputFirstNameTag", "Prénom non validé le prénom doit faire entre 3 et 20 caractères", false, true);
              inputFirstNameTag.style.outline = "1px solid red";
              inputFirstNameTag.style.border = "1px solid red";
              firstNameValid.style.color = "red";
          } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
              errorTag("ClassErrorInputFirstNameTag", "Le prénom ne doit pas contenir de caractères spéciaux", false, true);
              inputFirstNameTag.style.outline = "1px solid red";
              inputFirstNameTag.style.border = "1px solid red";
              firstNameValid.style.color = "red";
          } else if ((value.length === 0)) {
              errorTag("ClassErrorInputFirstNameTag", "Prénom non validé le prénom doit faire entre 3 et 20 caractères", false, true);
              inputFirstNameTag.style.outline = "1px solid red";
              inputFirstNameTag.style.border = "1px solid red";
              firstNameValid.style.color = "red";
          } else {
              validTag("ClassErrorInputFirstNameTag", "Prénom validé", true, false);
              inputFirstNameTag.style.outline = "1px solid green";
              inputFirstNameTag.style.border = "1px solid green";
              firstNameValid.style.color = "green";
          }
      };
      // Variable inputLastName (Nom) : Fonction du code de validation ou d'erreur selon la valeur tapper dans l'input.

      let inputLastNameTagChecker = (value) => {
          if (value.length > 0 && (value.length < 3 || value.length > 20)) {
              errorTag("ClassErrorInputLastNameTag", "Nom non validé le nom doit faire entre 3 et 20 caractères", false, true);
              inputLastNameTag.style.outline = "1px solid red";
              inputLastNameTag.style.border = "1px solid red";
              lastNameValid.style.color = "red";
          } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
              errorTag("ClassErrorInputLastNameTag", "Le nom ne doit pas contenir de caractères spéciaux", false, true);
              inputLastNameTag.style.outline = "1px solid red";
              inputLastNameTag.style.border = "1px solid red";
              lastNameValid.style.color = "red";
          } else if (value.length === 0) {
              errorTag("ClassErrorInputLastNameTag", "Nom non validé le nom doit faire entre 3 et 20 caractères", false, true);
              inputLastNameTag.style.outline = "1px solid red";
              inputLastNameTag.style.border = "1px solid red";
              lastNameValid.style.color = "red";
          } else {
              validTag("ClassErrorInputLastNameTag", "Nom validé", true, false);
              inputLastNameTag.style.outline = "1px solid green";
              inputLastNameTag.style.border = "1px solid green";
              lastNameValid.style.color = "green";
          }
      }

      // Variable adresse: Fonction du code de validation ou d'erreur selon la valeur tapper dans l'input.

      let inputAdresseTagChecker = (value) => {
              if (value.length > 0 && (value.length < 5 || value.length > 30)) {
                  errorTag("ClassErrorInputAdresseTag", "Adresse non validé l'adresse doit faire entre 5 et 30 caractères", false, true);
                  inputAdresseTag.style.outline = "1px solid red";
                  inputAdresseTag.style.border = "1px solid red";
                  adresseValid.style.color = "red";
              } else if (value.length === 0) {
                  errorTag("ClassErrorInputAdresseTag", "Adresse non validé l'adresse doit faire entre 5 et 30 caractères", false, true);
                  inputAdresseTag.style.outline = "1px solid red";
                  inputAdresseTag.style.border = "1px solid red";
                  adresseValid.style.color = "red";
              } else {
                  validTag("ClassErrorInputAdresseTag", "Adresse validé", true, false);
                  inputAdresseTag.style.outline = "1px solid green";
                  inputAdresseTag.style.border = "1px solid green";
                  adresseValid.style.color = "green";

              }
          }
          // Variable inputCityTagChecker (ville) : Fonction du code de validation ou d'erreur selon la valeur tapper dans l'input.

      let inputCityTagChecker = (value) => {
              if (value.length > 0 && (value.length < 3 || value.length > 20)) {
                  errorTag("ClassErrorInputCityTag", "Ville non validé la ville doit faire entre 3 et 20 caractères", false, true);
                  inputCityTag.style.outline = "1px solid red";
                  inputCityTag.style.border = "1px solid red";
                  cityValid.style.color = "red";
              } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
                  errorTag("ClassErrorInputCityTag", "La ville ne doit pas contenir de caractères spéciaux", false, true);
                  inputCityTag.style.outline = "1px solid red";
                  inputCityTag.style.border = "1px solid red";
                  cityValid.style.color = "red";
              } else if (value.length === 0) {
                  errorTag("ClassErrorInputCityTag", "Ville non validé la ville doit faire entre 3 et 20 caractères", false, true);
                  inputCityTag.style.outline = "1px solid red";
                  inputCityTag.style.border = "1px solid red";
                  cityValid.style.color = "red";
              } else {
                  validTag("ClassErrorInputCityTag", "Ville validé", true, false);
                  inputCityTag.style.outline = "1px solid green";
                  inputCityTag.style.border = "1px solid green";
                  cityValid.style.color = "green";
              }
          }
          // Variable inputEmailTagChecker(Email) : Fonction du code de validation ou d'erreur selon la valeur tapper dans l'input.

      let inputEmailTagChecker = (value) => {
          if (!value.match(/[a-z]+@[\w-]+\.[a-z]{2,4}$/i)) {
              errorTag("ClassErrorInputMailTag", "Le mail n'est pas validé il manque l'un des caractères indispensable suivant: @ ou .fr ou le .com", false, true);
              inputEmailTag.style.outline = "1px solid red";
              inputEmailTag.style.border = "1px solid red";
              emailValid.style.color = "red";
          } else {
              validTag("ClassErrorInputMailTag", "Email validé", true, false);
              inputEmailTag.style.outline = "1px solid green";
              inputEmailTag.style.border = "1px solid green";
              emailValid.style.color = "green";
          }
      };

      /* Avec la method ForEach sur linput du bouton validation Commande.
      Fonction qui contrôle si tout les inputs (champs) du formulaire ont bien été validés partout  avec la selection des ID des Inputs.
      Pour ensuite pouvoir cliquer sur le bouton validation Commande et envoyer le formulaire.*/
      // Constante inputs : Récupération - Sélection de tous les inputs de la page.

      const inputs = document.querySelectorAll('input[type="text"], input[type="email"]');
      console.log(inputs);

      inputs.forEach((input) => {
          input.addEventListener("input", (e) => {
              console.log(e.target.id);
              switch (e.target.id) {

                  case "firstName":
                      inputFirstNameTagChecker(e.target.value);
                      break;
                  case "lastName":
                      inputLastNameTagChecker(e.target.value);
                      console.log(e.target.value);
                      break;
                  case "adresse":
                      inputAdresseTagChecker(e.target.value);
                      console.log(e.target.value);
                      break;
                  case "ville":
                      inputCityTagChecker(e.target.value);
                      console.log(e.target.value);
                      break;
                  case "email":
                      inputEmailTagChecker(e.target.value);
                      console.log(e.target.value);
                      break;
                  default:
                      nul;

              }
          });
      });

      // Avec AddEventListener. On regarde une fois que l'on envoie la demande du formulaire.
      //  Si toutes les données sont validés dans les ID de chaque inputs
      // On a ensuite un message de validation si les données sont bonnes.
      //  Ou un message d'erreur si ce n'est pas le cas.

      formContactTag.addEventListener("submit", (e) => {
          e.preventDefault();
          let carts = document.querySelectorAll('input[type="text"], input[type="email"]');
          let firstName, lastName, adresse, ville, email;
          carts.forEach((input) => {
              switch (input.name) {

                  case "firstName":
                      firstName = input.value;
                      break;
                  case "lastName":
                      lastName = input.value;
                      break;
                  case "adresse":
                      adresse = input.value
                      break;
                  case "ville":
                      ville = input.value;
                      break;
                  case "email":
                      email = input.value;
                      break;
                  default:
                      nul;
              }

          })
          console.log("firstName :" + firstName, "lastName : " + lastName, "adresse : " + adresse, "ville :" + ville, "email : " + email);
          if (firstName && lastName && adresse && ville && email) {
              const cart = {
                  firstName,
                  lastName,
                  adresse,
                  ville,
                  email,
              };
              console.log(cart);

              inputs.forEach((input) => (input.value = ""));
              firstName = null;
              lastName = null;
              adresse = null;
              ville = null;
              email = null;
              alert("Inscription validée !");
          } else {
              alert("veuillez remplir correctement les champs");
          }

      });
  }
  formulaire();
  // Permet de créer la méthode Post. Pour envoyer les données du formulaire à la page Confirmation de commande.

  //   formContactTag.addEventListener("submit", () => {
  //       const donnees = {
  //           method: "POST",
  //           headers: {
  //               Allow: "POST",
  //               'Content-Type': 'application/json'
  //           },
  //           body: JSON.stringify({

  //           }),
  //           mode: "cors",
  //           credentials: "same-origin",
  //       };

  //       fetch("http://localhost:3000/api/furniture/order", donnees).then((res) => res.json());
  //       console.log("cart envoyée")
  //   })
  /* "Get" - Obtenir  "myHeaders" pleins de méthodes.
   "cors" = Permission ( requête )
   cache : "default" */
  //   CRUD > Create(POST)(Ajouter), read(GET)(optenir), update(PUT)(ajouter), Delete(DELETE)(supprimer);