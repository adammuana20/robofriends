import React, { useEffect, useState} from "react";
import CardList from '../Components/CardList'
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll'
import './App.css';


export default function App(){
  const [searchRobot, setSearchRobot] = useState({
    robots: [],
    searchField: ""
  })

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setSearchRobot(prevSearchRobot => ({
        ...prevSearchRobot,
        robots: data
      })))
  })

  function onSearchChange(event) {
    const { value } = event.target
    setSearchRobot(prevSearchRobot => ({
      ...prevSearchRobot,
      searchField: value
    }))
  }

  const { robots, searchField } = searchRobot
  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase())
  })

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