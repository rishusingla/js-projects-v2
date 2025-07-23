let searchbtn = document.querySelector("#searchbtn");
let searchinput = document.querySelector("#searchinput");
let word = document.querySelector("#word"); // Element to show the word
let definition = document.querySelector("#definition");
const dictionary = async (searchTerm) => {
  const url =
    "https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=" +
    searchTerm;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "20806b1067msh554446bf611d182p137d5ejsn363f44728ef4",
      "x-rapidapi-host": "dictionary-by-api-ninjas.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    // console.log("response", response);
    console.log("result:", result);
    console.log("result:", result.definition);
    // console.log("searchinput", searchinput.value);
    word.innerHTML = "Meaning of: " + searchinput.value;
    definition.innerHTML = result.definition
      .replace("2.", "<br>2.")
      .replace("3.", "<br>3.")
      .replace("4.", ",br>4.");
  } catch (error) {
    console.error(error);
  }
};
searchbtn.addEventListener("click", (e) => {
  e.preventDefault();
  dictionary(searchinput.value);
});
