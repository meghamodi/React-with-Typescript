import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { List } from './components/List'
import AddToList from './components/AddToList'

export interface IState {
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}

function App() {
  // const [number, setNumber] = useState(5)
  // const changeNumber = () => {
  //   setNumber(10)
  // }
  const [people, setPeople] = useState<IState['people']>([
    {
      name: 'Lebron James',
      url: '',
      age: 34,
      note: 'Do whatever you want',
    },
  ])

  return (
    <div className='App'>
      <h1>People invited to the party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  )
}

export default App
