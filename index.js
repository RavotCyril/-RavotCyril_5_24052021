(async function() {
        let articles = await getArticles();

        for (let i in articles) {
                displayArticle(articles[i]);
                //console.log(articles[i].name);
        }
})()

async function getArticles() {
        try {
        let res = await fetch('http://localhost:3000/api/furniture');
        return await res.json();
        }
        catch (e) {
                console.log(e);
        }
}

function displayArticle(article) {
        console.log(article._id);
}


