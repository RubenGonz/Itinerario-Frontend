/**
 * Clase que controla las busquedas
 */
class Searcher {
    /**
     * Metodo que cambia el pais de busqueda
     * @param newCountry nuevo pais de busqueda
     */
    static changeCountry(newCountry) {
        this.country = newCountry;
    }
    /**
     * Metodo que cambia el texto de busqueda
     * @param newText nuevo texto de busqueda
     */
    static changeText(newText) {
        this.text = newText;
    }
    /**
     * Funcion que busca las universidades que coincidan
     * con el pais y el texto de busqueda
     * @returns array de universidades coincidentes
     */
    static async search() {
        let url = "http://universities.hipolabs.com/search?country=" + this.country;
        let universitiesMatched = [];
        let response = await fetch(url);
        let universitiesApi = await response.json();
        universitiesApi.forEach(university => {
            if (university.name.toLowerCase().includes(this.text.toLowerCase())) {
                universitiesMatched.push({
                    name: university.name,
                    url: university.web_pages[0]
                });
            }
        });
        return universitiesMatched;
    }
}
//Variables
Searcher.country = "";
Searcher.text = "";
