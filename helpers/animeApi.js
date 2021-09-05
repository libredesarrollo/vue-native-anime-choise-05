
let animes = undefined;
// interfaz
let animesObject = [];

module.exports.animeApi = async function (limit = 100) {

    if (animes == undefined) {
        animes = await fetch("https://kitsu.io/api/edge/trending/anime?limit=" + limit)
            .then(res => res.json())

        animes["data"].forEach(a => {

            animesObject.push({
                id: a["id"],
                title: a["attributes"]["canonicalTitle"],
                description: a["attributes"]["description"],
                image: a["attributes"]["posterImage"]["medium"]
            })
        });

    }

    return animesObject

}