const coloredReindeerBuilder = function (color) {
    const reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"]

    for (let index = 0; index < reindeer.length; index++) {
        coloredReindeer.push(Object.create(null, {
            "name" : {
            value: reindeer[index],
            writable : true,
            enumerable : true},

            "color" : {
            value: color[index],
            writable : true,
            enumerable : true}
            })
        )
    }
}

let coloredReindeer = []
