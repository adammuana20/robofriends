import React, { useEffect, useState} from "react";
import CardList from '../Components/CardList'
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll'
import './App.css';


export default function App(){
  const [searchField, setSearchField] = useState('')
  const [robots, setRobots] = useState([])
  const [filteredRobots, setFilteredRobots] = useState(robots)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) => setRobots(users))
  }, [])

  useEffect(() => {
    const newFilterRobots = robots.filter((robot) => {
      return robot.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())
    })
    setFilteredRobots(newFilterRobots)
  }, [robots, searchField])

  const onSearchChange = (e) => {
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
