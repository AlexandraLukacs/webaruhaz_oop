import DataService from "./MODEL/DataService.js";
import Tablazat from "./VIEW/Tablazat.js";
//import { emberekLISTA } from "./adat.js";

const DS=new DataService();
DS.getAdat("http://localhost:3000/emberekLISTA", megjelenit); //végpont a hhtp cucc, megjelenit a callback függvény

function megjelenit(LISTA){
    console.log(LISTA);
    new Tablazat(LISTA, $(".tablazat"))
}

/* Itt tudunk törölni */
    /* Fel kell iratkozni a torol eseményre */
    $(window).on("torol", (event)=>{
        console.log(event.detail);
        DS.edeleteAdat("http://localhost:3000/emberekLISTA", event.detail)
    })