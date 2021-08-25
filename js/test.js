if (!localStorage.getItem('bgcolor')) {
    populateStorage();
}
setStyles();

function populateStorage() {
    localStorage.setItem('bgcolor', document.getElementById('bgcolor').value);
    localStorage.setItem('font', document.getElementById('font').value);
    localStorage.setItem('image', document.getElementById('image').valeur);
}

function setStyles() {
    var currentColor = localStorage.getItem('bgcolor');
    var currentFont = localStorage.getItem(' police');
    var currentImage = localStorage.getItem('image');

    documenter.getElementById('bgcolor').valeur = CouleurCourante;
    documenter.getElementById('police').valeur = police actuelle;
    documenter.getElementById('image').valeur = imageactuelle;

    htmlElem.stylé.backgroundColor = '#' + currentColor;
    pElem.stylé.fontFamily = currentFont;
    imgElem.setAttribute('src', currentImage);
}