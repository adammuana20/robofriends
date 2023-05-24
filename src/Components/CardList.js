import React from "react";
import Card from './Card'

export default function CardList({ robots }){
    const cardItems = robots.map((user, i) => {
        return (
            <Card 
                key={i}
                id={robots[i].id}
                name={robots[i].name}
                email={robots[i].email}
            />
        )
    })
    return (
        <div>
            {cardItems}
        </div>
    );
}