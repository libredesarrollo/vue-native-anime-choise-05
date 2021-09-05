import { animeApi } from "./animeApi";

const SIZE = 4

module.exports.getAnimes = async function(){

    let animes = []
    // ordenacion random
    do {
        animes = await animeApi()
        let r = Math.random() - 0.5
        animes.sort(() => r)
    }while(animes.length == 0)

    return animes.splice(0, SIZE)
}

module.exports.randomCount = function(){
    return Math.floor(Math.random() * SIZE)
}