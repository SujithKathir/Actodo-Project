
import TodoItem from "./TodoItem"

function TodolistForm(props) {
    
    const activityArr=props.activityArr;
    const setactivityArr=props.setactivityArr



    return (
        <div className="bg-violet-300  p-3 border rounded-md flex-grow ">
            <h1 className="font-semibold text-2xl">Todays Activity</h1>
           
            {activityArr.length===0? <p className="my-2">You haven't enterd anything...!</p>:""}

            {activityArr.map(function(item,index)
            {
                return <TodoItem Activity={item.Activity} index={index} activityArr={activityArr} setactivityArr={setactivityArr} id={item.id}/>
            })}
        </div>

    )
}
export default TodolistForm