import Card from './Card'
import { Robot } from '../Containers/App';

type CardListProps = {
    robots: Robot[]
}

export default function CardList({ robots }: CardListProps){
    const cardItems = robots.map((robot) => {
        return <Card key={robot.id} robot={robot}/>
    })
    return (
        <div>
            {cardItems}
        </div>
    );
}
