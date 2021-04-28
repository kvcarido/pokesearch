const userInput = document.querySelector(`#user-input`);
const guessBtn = document.querySelector(`#guess-btn`);
const pokemonField = document.querySelector(`#pokemon-field`);

guessBtn.addEventListener(`click`, (e) => {
    e.preventDefault();

    let guess = userInput.value;

    axios.get(`https://pokeapi.co/api/v2/pokemon/eevee`)
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
        console.log(error);
    })
})