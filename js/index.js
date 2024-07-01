import { games } from "./games.js";
new games();











































// let rowData = document.querySelector('.rowData');


// class games{
//     constructor(){
//         console.log(this);
//         this.getApi("MMORPG");
//         this.rowData = document.querySelector('.rowData');
//         this.gamesArray = [];
//     }
//     async getApi(category){
//         const options = {
//             method: 'GET',
//             headers: {
//                 'x-rapidapi-key': 'aabe56b9e7msh1f9bc6e35f09c7fp1dfe4ejsna638f0ad0153',
//                 'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
//             }
//         };
//         let api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options);
//         let gamesArray = await api.json();
//         console.log(gamesArray);
//     }
// }

// let myGame = new games
// console.log(myGame);