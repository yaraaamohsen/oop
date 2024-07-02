import { UiHome } from "./uiModules.js";

export class Details{
    constructor(gameId){
		this.display = new UiHome();
		this.detailsArray={};
		this.getDetailsApi(gameId);
	}
	async getDetailsApi(idGames){
		const options = {
		   method: "GET",
		   headers: {
			  "X-RapidAPI-Key": "761b8a3226msh868f0d927cb6ea4p117ef0jsn46d63d281712",
			  "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
		   },
		};
		let detailsApi = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${idGames}`, options);
		let detailsJson = await detailsApi.json();
		this.detailsArray = detailsJson;
			console.log(this.detailsArray);
		this.display.gameDetails(this.detailsArray);
		this.closeBtn();
	}

	closeBtn(){
		document.querySelector('.btn-close').addEventListener('click' ,()=>{
			document.querySelector(".detailsContext").classList.add("d-none");
			document.querySelector(".display").classList.remove("d-none");
		})
	}
}