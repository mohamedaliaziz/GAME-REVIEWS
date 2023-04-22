

import { Details } from "./details.module.js";
import { Data } from "./data.module.js";




export class Games  {
    constructor() {
        
        this.getgames("mmorpg");

        document.querySelectorAll(".menu a").forEach((link) => {
            link.addEventListener("click", (event) => {
                document.querySelector(".menu .active").classList.remove("active");
                event.target.classList.add("active");
                this.getgames(event.target.dataset.category);

            });
        });
        this.Data = new Data()
       
    }
    async getgames(nn) {
        document.querySelector('.loading').classList.remove("d-none");
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '77337370b6mshd6ce6a531f764cbp12a83bjsn303f8acd3949',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        // console.log(nn)
        let games = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${nn}`, options)
        let response = await games.json()

        this.Data.displayGames(response)
        
        this.Event()
        
        document.querySelector('.loading').classList.add("d-none");
    }
    Event() {
         // console.log( document.querySelectorAll(".card"))
         let card =  document.querySelectorAll(".card")
         card.forEach((item) => {
           
            item.addEventListener("click", () => {
                const id = item.id;
                console.log(id)
                const details = new Details(id);
                document.querySelector("#gems").classList.add("d-none");
                document.querySelector("#details").classList.remove("d-none");

            });
        });

    }
   

    
}


