const request = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open(
        "GET",
        "http://localhost:3000/produtos",
        true
    );

    xhr.onreadystatechange = function() {
        if (this.readyState == 4) {
            const json = JSON.parse(this.responseText);
            if (this.status != 200) {
                reject(json);
            } else {
                resolve(json);
            }
        }
    }

    xhr.send();
})

request.then((produtos) => {
    console.log(produtos) 
    // aq chama a função que quiserem
    // produtos é um array de objetos de produtos
});