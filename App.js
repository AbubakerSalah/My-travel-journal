import React from "react"
import Navbar from "./components/Nav.js"
import Card from "./components/Card.js"
import data from "./data"


export default function App() {
    const cards = data.map(item => {
        return(
            <div>
            <Card 
            key= {item.title}
            {...item}
            
            />
            </div>
        )
    })
    return(
        <div>
         <Navbar />
         
         {cards }
         
         
        </div>
    )
}