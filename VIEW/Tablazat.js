import Tsor from "./Tsor.js";

export default class Tablazat{
    #LISTA=[];
    #szuloElem;
    #tbodyElem;

    constructor(LISTA, szuloElem){
        this.#LISTA=LISTA;
        this.#szuloElem=szuloElem;
        this.#tablazatMegjelenit();
        this.#tbodyElem=this.#szuloElem.children("table").children("tbody");
        console.log(this.#tbodyElem)
        this.#sorokHozzadasa();
    }

    #tablazatMegjelenit(){
        let txt = "";
        txt += "<table class='table table-striped'>";
        txt += "<tr><th>ID</th><th>Név</th><th>Kor</th><th>Nem</th><th></th></tr>";
        /* Szorgalmi: a fejléc kulcsait is ciklussal ird ki! */
        /* tbody-ba kerülnek a sorok JQ magától létrehozza a tbody elemet */
        txt += "</table>";
        this.#szuloElem.append(txt);
    }

    #sorokHozzadasa(){
        this.#LISTA.forEach((element) => {
            new Tsor(element, this.#tbodyElem);
        });
    }
}