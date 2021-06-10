let fourniture;

//APi Demande

Const fetchFourniture = async() => {
    fourniture = await fetch("http://localhost:3000/api/furniture").then(res => res.json());

    console.log(fourniture);

};

fetchFourniture();