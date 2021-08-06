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
    let formulaireDetails = document.createElement("div")

    // Appel des classes- Boostrap- TextContent- Id des balises html qui construise le squelette de la page.

    newMain.className = "container-fluid";
    b.appendChild(newMain);
    sectionTag.className = "row";
    h1Tag.className = "col-12 my-4 text-center";
    pTag.className = "font-weight-bolder my-4 text-center";
    h1Tag.textContent = "Récapitulatif de votre commande";
    produitSelectionne.textContent = "Produit Selectionné";
    quantiteSelectionne.textContent = "Quantité Selectionné";
    prixDuProduitSelectionne.textContent = "Prix Du Produit Selectionné";
    prixTotalDuPanier.textContent = "Prix Total Du Panier";
    articleTag.className = "col-12 Article-Panier-Détails";
    formulaireDetails.className = "col-12 my-4 text-center";
    formulaireDetails.textContent = "Détails du formulaire complété";

    // Appel des balises en Html pour construire le squelette de la page.

    newMain.appendChild(sectionTag);
    sectionTag.appendChild(h1Tag);
    sectionTag.appendChild(formulaireDetails);
    sectionTag.appendChild(articleTag);
    articleTag.appendChild(produitSelectionne);
    articleTag.appendChild(quantiteSelectionne);
    articleTag.appendChild(prixDuProduitSelectionne);
    articleTag.appendChild(prixTotalDuPanier);
})();