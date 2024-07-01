import { Details } from "./details.js";
import { UiHome } from "./uiModules.js";
export class games{
    constructor(){
        this.getApi("MMORPG");
        this.rowData = document.querySelector('.rowData');
        this.gamesArray = [];
        document.querySelectorAll('.nav-link').forEach(anchor=>{
            anchor.addEventListener('click', e=>{
                this.getApi(e.target.innerHTML)
            })
        })
    }
    async getApi(category){
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'aabe56b9e7msh1f9bc6e35f09c7fp1dfe4ejsna638f0ad0153',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        let api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options);
        let gamesJson = await api.json();
        
        console.log(gamesJson);
        this.gamesArray = gamesJson;
        let display = new UiHome();
        display.displayData(this.gamesArray);
        this.clickOnItem();
        console.log(this);

    }

    clickOnItem(){
        // let Details = new details(id);
        document.querySelectorAll(".item").forEach((card) => {
            card.addEventListener("click", () => {
               const id = card.dataset.id;
               console.log(id);
               this.showDetails(id);
               console.log("hello");
            //    console.log(e.target);
            //    console.log(this);
            });
         });
    }

    showDetails(id){
        const details = new Details(id);
        document.querySelector(".display").classList.add("d-none");
        document.querySelector(".detailsContext").classList.remove("d-none");
    }
}