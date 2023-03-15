import { bases } from "./bases.js"
import { sides } from "./sides.js"
import { vegetables } from "./vegetabales.js"
import { orders } from "./orders.js"
import { addCustomOrder } from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id === "orderButton") {
            addCustomOrder()
        }
    }
)

export const hummusHTML = () => {
    return `
    
    <h1> Hummus House </h1>

    <article class="choices">
    <section class="choices__bases options">
    <h2> Bases</h2>
         ${bases()}
    </section>

    <section class="choices__vegetables options">
    <h2> Vegetables </h2> 
         ${vegetables()}
    </section>
    
    <section class="choices__sides options">
    <h2> Sides </h2>
        ${sides()}
        </section>

        <article>
        
        <button id="orderButton">Purchase Combo </button>
        
        </article>

    <article class="customOrders">
    <h2> Orders</h2>
    ${orders()}
    </article>
    
    `
}