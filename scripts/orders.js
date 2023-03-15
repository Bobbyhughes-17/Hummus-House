import { getOrders, getBases, getSides, getVegetables } from "./database.js"
const vegetabaleArr = getVegetables()
const sidesArr = getSides()
const basesArr = getBases()

const buildOrderListItem = (order) => {

    const foundVeg = vegetabaleArr.find((veg) => {
        return veg.id === order.vegetableId
    })

    const foundBase = basesArr.find((base) => {
        return base.id === order.baseId
    })

    const foundSide = sidesArr.find((side) => {
        return side.id === order.sideId
    })

    const totalCost = foundVeg.price + foundBase.price + foundSide.price

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    
    return `<li>
            Order ${order.id} cost ${costString}
    </li>
    `

}

export const orders = () => {
 
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}