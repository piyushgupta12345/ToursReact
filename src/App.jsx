import { useState } from "react"
import Tours from "./components/Tours"
import data from './data'

function App() {

  const[tours,setTours] = useState(data);

  const removeTour = (id) =>{
    const newTours = tours.filter(tour => tour.id !== id)
    setTours(newTours)
  }

  if(tours.length === 0){
    return(
      <div className="flex justify-center w-full h-[100vh] m-auto gap-4 flex-col items-center shadow-2xl">
        <h2 className=" font-bold text-2xl">No Tours Left</h2>
        <button className="px-10 py-2 text-black bg-sky-400 border-2 border-solid rounded-lg" onClick={()=> setTours(data)}>
          Refresh
        </button>
      </div>
    )
  }

  return (
    <div className=''>
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  )
}

export default App
