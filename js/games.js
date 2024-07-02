import { Details } from "./details.js";
import { UiHome } from "./uiModules.js";
export class Games{
    constructor(){
        this.getApi("MMORPG");
        this.rowData = document.querySelector('.rowData');
        this.gamesArray = [];
        document.querySelectorAll('.nav-link').forEach(anchor=>{
            anchor.addEventListener('click', e=>{
                this.getApi(e.target.innerHTML);
                document.querySelector('nav ul li a.active').classList.remove('active');
                anchor.classList.add('active')
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
        document.querySelectorAll(".item").forEach((card) => {
            card.addEventListener("click", () => {
               const id = card.dataset.id;
               console.log(id);
               this.showDetails(id);
               console.log("hello");
            });
         });
    }

    showDetails(id){
        const details = new Details(id);
        document.querySelector(".display").classList.add("d-none");
        document.querySelector(".detailsContext").classList.remove("d-none");
    }
}