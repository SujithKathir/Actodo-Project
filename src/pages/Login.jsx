import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Login(props)
{

const navigate= useNavigate()

const [ruser, setRuser]= useState(true)

const [euserName, seteuserName] = useState()

const [eupass,seteupass]=useState()

const user = props.user
const setuser = props.setuser


function handelUsername(evt){
  seteuserName(evt.target.value)
}

function handelUpass(evt){
  seteupass(evt.target.value)
}


function checkDetails()
{
  var userFound=false

  console.log(user)
   user.forEach(function(item){
    if(item.username === euserName && item.password === eupass)
    {
      console.log("login succesful")
      userFound=true
      navigate("/landing",{state:{user:euserName}})
    }
   
   })

   if(userFound===false){
    console.log("login Failed")
    setRuser(false)
   }
}



    return(
        <div className="bg-black p-10 ">
      <div className="bg-white p-10 border rounded-md my-1">
        <h1 className="text-3xl font-bold">Hey Hii...</h1>
        {ruser?<p>I help you manage your activites after you login:)</p> : <p className="text-red-500">Please signup :(</p>}


       <div className="flex flex-col my-2 gap-2">
       <input onChange={handelUsername} className="border border-black p-1 w-52 rounded-md" type="text" placeholder="username"/>

        <input onChange={handelUpass} className="border border-black p-1 w-52 rounded-md" type="text" placeholder="password"/>

      
 
        <button onClick={checkDetails}  className="bg-[#8272DA] border rounded-md w-24 p-1">
         Login
        </button>
            
        <p>Don't have an account.? <Link className="underline " to={"/signup"} style={{Color:ruser?"black":"red"}} >SignUp</Link> </p>   

       </div>
      </div>
    </div>
    )
} 
export default Login