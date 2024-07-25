import { useState } from "react"
function Todolist(props) {


        const activityArr=props.activityArr;
        const setactivityArr=props.setactivityArr
    
        const [newActivity, setnewActivity]= useState("")
    
        function HandelChange(evt)
        {
           setnewActivity(evt.target.value)
        }

        function Handeladd(){

           setactivityArr([...activityArr,{id:activityArr.length+1,Activity:newActivity}])
           

           setnewActivity("")
        }
   
    return (

        <div>
            <h1 className="font-semibold text-2xl">Manage Activites</h1>
            <div className="my-2">
                <input value={newActivity} onChange={HandelChange} className="border border-black p-1" placeholder="What next Activity? "></input>
                <button onClick={Handeladd} className="bg-black text-white p-1 border border-black ">Add</button>

            </div>
        </div>
    )
}
export default Todolist