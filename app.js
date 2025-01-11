// Lista de palabras para sugerencias
const words = [
    "facebook", "facetime", "factory", "google", "github",
    "gmail", "giphy", "amazon", "apple", "airbnb", "adobe"
];

// Obtiene el campo de entrada del DOM por su ID
const searchInput = document.getElementById("search");

// Obtiene el contenedor de las sugerencias del DOM por su ID
const suggestionsBox = document.getElementById("suggestions");

// Agrega un evento al campo de entrada que se dispara cada vez que se detecta un cambio
searchInput.addEventListener("input", () => {
    // Obtiene el valor actual del input y lo convierte a minúsculas para evitar problemas con mayúsculas/minúsculas
    const inputValue = searchInput.value.toLowerCase();

    // Limpia las sugerencias previas para evitar duplicados
    suggestionsBox.innerHTML = "";

    // Verifica si hay algún texto ingresado en el input
    if (inputValue) {
        // Filtra las palabras que comiencen con el texto ingresado
        const filteredWords = words.filter(word =>
            word.toLowerCase().startsWith(inputValue) // Compara el inicio de cada palabra con el texto ingresado
        );

        // Crea un elemento de lista para cada palabra sugerida
        filteredWords.forEach(word => {
            const suggestionItem = document.createElement("li"); // Crea un elemento <li>
            suggestionItem.textContent = word; // Establece el texto de la sugerencia con la palabra actual

            // Agrega un evento al elemento de sugerencia para llenar el input al hacer clic
            suggestionItem.addEventListener("click", () => {
                searchInput.value = word; // Establece el valor del input con la palabra seleccionada
                suggestionsBox.innerHTML = ""; // Limpia las sugerencias una vez seleccionada una
            });

            // Agrega el elemento de sugerencia a la lista en el DOM
            suggestionsBox.appendChild(suggestionItem);
        });
    }
});
