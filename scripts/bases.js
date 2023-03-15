import { getBases, setBase } from "./database.js"
const basesArr = getBases()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "base") {
            setBase(parseInt(event.target.value))
        }
    }
)

export const bases = () => {
    let html = "<ul>"

    const listItemsArray = basesArr.map(base => {
        return `<li>
        <input type="radio" name="base" value="${base.id}" />
        ${base.name}
        
        </li>`
    })

    html += listItemsArray.join("")
    html += "</ul>"

    return html
}