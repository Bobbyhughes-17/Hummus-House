import { getVegetables, setVegetable } from "./database.js"
const vegetableArr = getVegetables()

document.addEventListener(
    "change",
     (event) => {
        if (event.target.name === "vegetable") {
            setVegetable(parseInt(event.target.value))
        }
    }
)

export const vegetables = () => {
    let html = "<ul>"

    const listItemsArray = vegetableArr.map(veg => {
        return `<li>
            <input type="radio" name="vegetable" value="${veg.id}" /> ${veg.name}
        </li>`
    })

    html += listItemsArray.join("")
    html += "</ul>"

    return html
}