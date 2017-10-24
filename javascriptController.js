let coloredReindeerDisplay = ""

coloredReindeer.forEach(reindeerObject => {
        coloredReindeerDisplay +=`
            <section style="color: ${reindeerObject.color}">${reindeerObject.name}</section>
        `
})

document.getElementById("colored-reindeer").innerHTML = coloredReindeerDisplay