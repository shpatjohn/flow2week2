import 'bootstrap/dist/css/bootstrap.css'
/*import jokes from "./jokes";

const allJokes = jokes.getJokes().map(joke => "<li>"+joke+"</li>");
document.getElementById("jokes").innerHTML = allJokes.join("");

document.getElementById("klik").onclick = function() {
    const oneJoke = document.getElementById("find1").value-1;
    document.getElementById("joke1").innerHTML = jokes.getJokeById(oneJoke);
}

document.getElementById("btnadd").onclick = function() {
    const addJoke = document.getElementById("textadd").value;
    jokes.addJoke(addJoke);
    document.getElementById("j1").innerHTML = jokes.getJokes().map(joke => "<li>"+joke+"</li>").join("\n");
}*/

function getText(){
    fetch('https://studypoints.info/jokes/api/jokes/period/hour')
    .then((res) => res.json())
    .then((data) =>  {
     document.getElementById("output").innerHTML = data.user;
    })
}

document.getElementById("btn").addEventListener("click", getText)

 


