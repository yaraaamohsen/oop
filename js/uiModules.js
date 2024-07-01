export class UiHome{
    displayData(gamesArray){
        let cartona = '';
        for(let i=0 ; i<gamesArray.length ; i++){
            let x = gamesArray[i].short_description;
            cartona+=`
            <div data-id="${gamesArray[i].id}" class="col-lg-3 item">
                <div class="p-2 border border-1 border-dark  rounded-2">
                    <img src="${gamesArray[i].thumbnail}" class=" w-100 p-3 rounded-2" alt="#">
                    <div class="card bg-transparent border-0 text-light">
                        <div class="row w-100 align-items-center pb-3">
                            <h3 class="h6 col-6">${gamesArray[i].title}</h3>
                            <button class="ms-auto col-4 btn btn-primary">Free</button>
                        </div>
                      <p class="text-center px-4">${x.slice(0,30)}</p>
                    </div>
                    <div class="card-footer d-flex justify-content-between">
                    <span class="badge badge-color bg-body-secondary p-2">${gamesArray[i].genre}</span>
                    <span class="badge badge-color bg-body-secondary p-2">${gamesArray[i].platform}</span>
                </div>
                </div>
            </div>
            `
        }
        document.querySelector('.rowData').innerHTML = cartona;
    }

    gameDetails(detailsArray){
        let gameData = ""
        
        gameData += `
        <header class="d-flex justify-content-between">
            <h1>Details Game</h1>
            <button class="btn-close btn-close-white"></button>
        </header>
        <section>
            <div class="container">
            <div class="row rowDetails px-2">
            <img src="${detailsArray.thumbnail}" class="col-lg-4" alt="#">
            <div class="col-lg-8">
                <h2>title: ${detailsArray.title}</h2>
                <p class="fs-5">category: <span class="btn px-2 btn-primary">${detailsArray.genre}</span></p>
                <p class="fs-5">platform: <span class="btn px-2 btn-primary">${detailsArray.platform}</span></p>
                <p class="fs-5">status: <span class="btn px-2 btn-primary">${detailsArray.status}</span></p>
                <p class="fs-6">${detailsArray.description}</p>
                <a class="btn btn-outline-warning p-2" href="${detailsArray.game_url}">show game</a>
            </div>
            </div>
            </div>
        </section>
       
        `
        document.querySelector('.detailsContext').innerHTML = gameData;
    }
}