/*
  This class is just added to show you how you can use ES6 exports
  Observe, in index.js, how you can import
*/

class Jokes {
    constructor(initialData){
        this._jokes = initialData;
    }

    addJoke(joke){
        this._jokes.push(joke);
    }

    getJokeById(i) {
        return this._jokes[i];
    }
    
    getJokes() {
        return this._jokes;
    }
}

//Setup some dummy test persons
const initialData = [
    "John",
    "Shpat",
    "Damm",
  ]

const jokes = new Jokes(initialData);
window.jokes = jokes; //Only for debugging

export default jokes;