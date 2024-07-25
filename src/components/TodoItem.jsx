function TodoItem(props){

    const activityArr = props.activityArr
    const setactivityArr= props.setactivityArr

    function handelDelete(deletId){
        var temparray = activityArr.filter(function(item){
            if(item.id === deletId)
            {
                return false
            }
            else
            {
                return true
            }
        })
        setactivityArr (temparray)
    }
    


    return(
     <div>
         <div className="flex justify-between m-3 ">
          <p>{props.index+1}.{props.Activity}</p>
          <button onClick={()=>handelDelete(props.id)} className="text-red-600">Delete</button>
          
      </div>
      
     </div>
        
    )
}

export default TodoItem