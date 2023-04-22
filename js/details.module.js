

import { Data } from "./data.module.js";

export class Details {
    constructor(id) {
        this.Data = new Data();
        function close() {

            document.querySelector("#gems").classList.remove("d-none");
            document.querySelector("#details").classList.add("d-none");

        }
        btnClose.addEventListener("click", () => {
            close()
        })
        this.getDetailss(id)
    }
      getDetailss(id) {
        document.querySelector('.loading').classList.remove("d-none");
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '77337370b6mshd6ce6a531f764cbp12a83bjsn303f8acd3949',
                    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
                }
            };
        
            fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options)
            .then((response) => response.json())
            .then((response) => this.Data.detailsss(response))
            .catch((err) => console.error(err))
            
            // console.log(data)
        
             document.querySelector('.loading').classList.add("d-none");
        
        }
        
}