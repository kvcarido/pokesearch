const userInput = document.querySelector(`#user-input`);
const guessBtn = document.querySelector(`#guess-btn`);
const correctPokemon = document.querySelector(`#correct-pokemon`);
const fieldText = document.querySelector(`#field-text`);

const addPokemon = (img) => {
    fieldText.classList.add(`hidden`);
    
    const newImg = document.createElement(`img`);
    newImg.src = img;
    correctPokemon.append(newImg);
}

const getPokemon = async (request) => {
    try {
        const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${request}`)
        return result.data;
    } catch (e) {
        return `error! ${e}`
    }
}

guessBtn.addEventListener(`click`, async (e) => {
    e.preventDefault();

    let guess = userInput.value;
    const res = await getPokemon(guess);

    const pokeImg = res.sprites.front_default;
    addPokemon(pokeImg);
})