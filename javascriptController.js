
const colors = ["Blue", "Red", "Orange", "Purple", "Goldenrod", "Aquamarine", "Olive", "Azure", "Fuchsia", "Chocolate", "Salmon", "Amaranth"]
    
coloredReindeerBuilder(colors)

let coloredReindeerDisplay = ""

for (let index = 0; index < coloredReindeer.length; index++) {
    
    let element = coloredReindeer[index]
    coloredReindeerDisplay +=`
        <section style="color: ${element.color}">${element.name}</section>
    `
}

document.getElementById("colored-reindeer").innerHTML = coloredReindeerDisplay