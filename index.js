let Fourniture;

//APi Demande

const fetchFourniture = async() => {
    fourniture = await fetch("http://localhost:3000/api/furniture").then(res => res.json());

    console.log(fourniture);

};
fetchFourniture();