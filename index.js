// Add your code here

function submitData(userName, userEmail) {

    const submitData = {
        name: userName,
        email: userEmail
    };

    const configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(submitData)
    };

    return fetch("http://localhost:3000/users", configObj)
    .then(function(response) {
        return response.json();
    })
    .then(function(object) {
        debugger;
        const node = document.createElement("h1");
        const nodeText = document.createTextNode(`${object.id}`);
        node.appendChild(nodeText);
        document.querySelector("body").appendChild(node);
    })
    .catch(function(error) {
        const node = document.createElement("h1");
        const nodeText = document.createTextNode(`${error.message}`);
        node.appendChild(nodeText);
        document.querySelector("body").appendChild(node);
    });
};