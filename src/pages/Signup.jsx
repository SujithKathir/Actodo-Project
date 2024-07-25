import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


function Signup(props)
 {

  const navigate= useNavigate()

  const user = props.user
  const setuser = props.setuser

  
const [euserName, seteuserName] = useState()

const [eupass,seteupass]=useState()


function handelUsername(evt){
  seteuserName(evt.target.value)
}

function handelUpass(evt){
  seteupass(evt.target.value)
}

function addDetails()
{
  setuser([...user,{username:euserName, password:eupass}])
  navigate("/")
}




  return (
   <div className="bg-black p-10 ">
      <div className="bg-white p-10 border rounded-md my-1">
        <h1 className="text-3xl font-bold">Hey Hii...</h1>
        <p>I help you manage your activites after login:)</p>


       <div className="flex flex-col my-2 gap-2">
       <input onChange={handelUsername} value={euserName} className="border border-black p-1 w-52 rounded-md" type="text" placeholder="username"/>

        <input onChange={handelUpass} value={eupass} className="border border-black p-1 w-52 rounded-md" type="text" placeholder="password"/>

        <input className="border border-black p-1 w-52 rounded-md" type="text" placeholder="confirm password"/>
 
        <button  onClick={addDetails} className="bg-[#FCA201] border rounded-md w-24 p-1">
          SignUp
        </button>
            
         <p>Already have an account? <Link to={"/"} className="underline">Login</Link> </p>   

       </div>
      </div>
    </div>
  )
}
export default Signup