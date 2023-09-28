import { useEffect, useState, ChangeEvent} from "react";
import CardList from '../Components/CardList'
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll'

import { getData } from "../Utils/Fetch.utils";
import './App.css';

export type Robot = {
  id: string;
  name: string;
  email: string;
}


export default function App(){
  const [searchField, setSearchField] = useState('')
  const [robots, setRobots] = useState<Robot[]>([])
  const [filteredRobots, setFilteredRobots] = useState(robots)

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Robot[]>('https://jsonplaceholder.typicode.com/users')
      setRobots(users)
    }

    fetchUsers()
  }, [])

  useEffect(() => {
    const newFilterRobots = robots.filter((robot) => {
      return robot.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())
    })
    setFilteredRobots(newFilterRobots)
  }, [robots, searchField])

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = e.target.value.toLocaleLowerCase()
    setSearchField(searchFieldString)
  }

  return !robots.length ?
  <h1>Loading</h1> :
  (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  )
}
