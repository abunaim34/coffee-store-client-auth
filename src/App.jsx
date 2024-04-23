
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './Components/CoffeeCard'
import { useState } from 'react'

function App() {
  const loadedCoffees = useLoaderData()
  const [coffees, setCoffees] = useState(loadedCoffees)

  return (
    <div className="m-20">
      <h1 className='text-6xl font-extrabold'>Coffee Store</h1>
      <div className="grid grid-cols-2 gap-5">
        {
          coffees.map(coffee => <CoffeeCard key={coffee._id} coffees={coffees} setCoffees={setCoffees} coffee={coffee} ></CoffeeCard>)
        }
      </div>
    </div>
  )
}

export default App
