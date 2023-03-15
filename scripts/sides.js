import { getSides, setSide } from "./database.js"
const sidesArr = getSides()

document.addEventListener(
    "change",
     (event) => {
        if (event.target.name === "side") {
            setSide(parseInt(event.target.value))
        }
    }
)

export const sides = () => {
    let html = "<ul>"

    const listItemsArray = sidesArr.map(side => {
        return `<li>
            <input type="radio" name="side" value="${side.id}" /> ${side.name}
        </li>`
    })

    html += listItemsArray.join("")
    html += "</ul>"

    return html

}