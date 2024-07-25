import Todolist from "./Todolist"
import TodolistForm from "./TodolistForm"
import { useState } from "react"

function TodolistContainer() {

    const [activityArr, setactivityArr] = useState([
        {
            id:1,
            Activity:"Get up at 5am."
        },
    {
        id:2,
        Activity:"Go for a walk."
    }
    ,
    {
        id:3,
        Activity:"Take your breakfast."
    }
    ])

    return (
        <div className="flex  gap-5 flex-wrap">
            <Todolist activityArr={activityArr} setactivityArr={setactivityArr}/>

            <TodolistForm activityArr={activityArr} setactivityArr={setactivityArr} />
        </div>
    )
}
export default TodolistContainer