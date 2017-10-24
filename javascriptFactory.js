const colors = ["Blue", "Red", "Orange", "Purple", "Goldenrod", "Aquamarine", "Olive", "Black", "Fuchsia", "Chocolate", "Salmon", "Amaranth"]

const reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"]

let coloredReindeer = []

reindeer.forEach((name, index) => {

    coloredReindeer.push(Object.create(null, {
        "name" : {
        value: name,
        writable : true,
        enumerable : true},

        "color" : {
        value: colors[index],
        writable : true,
        enumerable : true}
        })
    )
})

