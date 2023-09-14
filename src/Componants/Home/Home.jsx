import React, { useEffect, useState } from "react";
import "./Home.css";
import Cart from "../Cart/Cart";

const Home = () => {
  const [allActors,setAllActors] = useState([]);
  const [selectedActors, setSelectedActors] = useState([])
  const [totalCost,setTotalCost] = useState(0)

  useEffect(()=>{
        fetch('avengers.json')
        .then(res => res.json())
        .then(data => setAllActors(data))
  },[])
  

   const handleSelectActor = (actor) =>{

    const  isExists = selectedActors.find((item) => item.id === actor.id)
      if(isExists){
         return alert('Already Exists')
      }
      else{

        
        setSelectedActors([...selectedActors,actor])
      }
      
   }
  

  return (
    <div>
      
         <div className="flex justify-between py-14 w-[75%] mx-auto">
             <div className="w-[600px] grid gap-3 md:grid-cols-2">
            {
                 allActors.map((actor) =>(
                    <div className="border-solid border-2 border-gray-200 text-white 
                    w-[250px] h-[290px] text-center space-y-2" key={actor.id}>
                        <img className="w-[100px]  rounded-full ml-20" src={actor.image} alt="" />
                        <p>{actor.name}</p>
                        <p><small>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, eum!</small></p>
                        <div className="flex justify-evenly">
                              <p>Salary : ${actor.salary}</p>
                              <p>{actor.role}</p>
                        </div>
                        <button onClick={()=>handleSelectActor(actor)} className="bg-pink-500 px-4 py-1 rounded-md">Select</button>
                    </div>
                 ))
            }
             </div>
             <div className="">
                <Cart selectedActors ={selectedActors} totalCost ={totalCost} > </Cart>
             </div>
         </div>


    
        
      </div>

  );
};

export default Home;
