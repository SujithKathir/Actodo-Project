import Header from "../components/Header";
import Card from "../components/Card";
import TodolistContainer from "../components/TodolistContainer";


import { useLocation } from "react-router-dom"

function Landing(){

    const Data = useLocation()

    console.log(Data)

    return(
        <div>
           

            <div className="bg-black p-20">
      <div className="bg-white p-10 border rounded-md">
        { /*Header component */}
        <Header name={Data.state.user}></Header>
        

        { /*Card component */}

        <div className="flex justify-between flex-wrap my-7 gap-10">

          <Card bgcolor={"#685BAE"} title={"23"} subtitle={"Coimbatore"} />
          <Card bgcolor={"#CA524E"} title={"Julu 18"} subtitle={"14:30"} />
          <Card bgcolor={"#CA8201"} title={"Build Using"} subtitle={"React"} />
        </div>

        { /*Tolist component */}

        <TodolistContainer/>

      </div>

    </div>
        </div>
    )
}
export  default Landing