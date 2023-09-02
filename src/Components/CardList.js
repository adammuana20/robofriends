import React from "react";
import Card from './Card'

export default function CardList({ robots }){
    const cardItems = robots.map((robot) => {
        return <Card key={robot.id} robot={robot}/>
        )
    })
    return (
        <div>
            {cardItems}
        </div>
    );
}
