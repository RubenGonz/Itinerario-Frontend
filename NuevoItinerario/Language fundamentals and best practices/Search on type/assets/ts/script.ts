/**
 * Objeto que guarda variables del documento html
 */
const DOM = {
    countries: document.getElementById("countries") as HTMLElement,
    searchText: document.getElementById("search-text") as HTMLInputElement,
    results: document.getElementById("results") as HTMLInputElement,
    countryTemplate: document.getElementById("countryTemplate") as HTMLElement
};

/**
 * Constante con los paises
 */
const COUNTRIES = [
    { id: "Spain", text: "España" },
    { id: "United Kingdom", text: "Reino Unido" },
    { id: "Germany", text: "Alemania" },
    { id: "Portugal", text: "Portugal" },
    { id: "Turkey", text: "Turkia" }
];

/**
 * Constante que genera los botones de los paises
 */
const generateCountries = () => {
    let firstButtonActive = false;
    COUNTRIES.forEach(country => {
        let newButton = document.createElement("button");
        if (!firstButtonActive) {
            newButton.classList.add("active");
            firstButtonActive = true;
        }
        newButton.id = country.id;
        newButton.innerHTML = country.text;
        DOM.countries.appendChild(newButton);
    });
}

/**
 * Constante que obtiene las universidades 
 * de la busqueda y las muestra
 */
const getUniversities = () => {
    Searcher.search().then(universities => {
        generateUniversities(universities);
    });
}

/**
 * Constante que genera un listado de universidades
 * @param universities universidades de la busqueda
 */
const generateUniversities = (universities) => {
    DOM.results.innerHTML = "";
    universities.forEach(university => {
        console.log(university)
        let a = document.createElement("a");
        a.innerHTML = university.name;
        a.href = university.url;
        DOM.results.appendChild(a);
    })
}

/**
 * Listeners
*/

/**
 * Evento que se activa al clickar en los botones de 
 * los paises y activa la busqueda en el pais seleccionado
 */
DOM.countries.addEventListener("click", (e) => {
    DOM.countries.getElementsByClassName("active")[0].classList.remove("active");
    const country = e.target as HTMLButtonElement;
    country.classList.add("active");
    Searcher.changeCountry(country.id);
    getUniversities();
});

/**
 * Evento que se activa al escribir en el input de 
 * busqueda y activa la busqueda en el pais seleccionado
 */
DOM.searchText.addEventListener("keyup", () => {
    Searcher.changeText(DOM.searchText.value);
    getUniversities();
});

/**
 * Al cargar la ventana se generan los bottones de los 
 * paises, se activa el primero y se realiza una busqueda
 */
window.onload = () => {
    generateCountries();
    Searcher.changeCountry(COUNTRIES[0].id);
    getUniversities();
};