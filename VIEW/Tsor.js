export default class Tsor{
    #termekObj={};
    #szuloELem;
    #sorELem;
    #torlesElem;

    constructor(termekObj,szuloELem){
        this.#termekObj=termekObj;
        this.#szuloELem=szuloELem; /* tbody */
        this.#sorokletrehozasa();
        /* Eseményt írunk a töröl gombra */
        this.#torlesElem=this.#szuloELem.children("tr:last-child").children("td").children(".torol");
        console.log(this.#torlesElem)
        this.#torlesElem.on("click", ()=>{
            /* Nyíl függvény kell, mert ekkor jelenti az osztálypéldányt */
            this.#trigger("torol")
        })
    }

    #trigger(esemenyNev){
        const e = new CustomEvent(esemenyNev, {detail:this.#termekObj.id});
        window.dispatchEvent(e);
    }

    #sorokletrehozasa(){
        let txt=`<tr>`;
            for (const key in this.#termekObj) {
                txt+=`<td>${this.#termekObj[key]}</td>`;
            }
        txt+=`<td><button class="torol">🗑️</button></td>`;
        txt+=`</tr>`;
        this.#szuloELem.append(txt);
    }


}