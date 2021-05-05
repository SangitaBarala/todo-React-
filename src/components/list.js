import React from "react";

const List=(prop)=>{
    if(prop.taskList.length > 0){
        return (
            <ul>
                {prop.taskList.map(task=>{
                    return(
                        <li>{task}</li>
                    )
                })}
            </ul>
        )
    }else {
        return (
            <p class="noTask">No task to show</p>
        )
    }
}
export default List