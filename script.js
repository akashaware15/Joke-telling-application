const setupPara = document.getElementById("setup");
const punchlinePara = document.getElementById("punchline");
const errorPara = document.getElementById("error");

function getJoke () {
    const resPromise = fetch("https://official-joke-api.appspot.com/random_joke");

    resPromise
    .then((data) => data.json())
    .then((joke) => {
        setupPara.innerHTML = joke.setup
        punchlinePara.innerHTML = joke.punchline
        console.log(joke)
    })
    .catch((error) => {
        console.log("Something went wrong",error)
    })
}
