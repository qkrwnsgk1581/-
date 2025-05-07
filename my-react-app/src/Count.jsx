import React, {useState} from "react";

const Count = ()=>{
    const [num, setNum] = useState(1);
    const addNum = () => {
        setNum(num+1)
    }
    const deleteNum = () => {
        setNum(num-1)
    }
    const doubleNum = () => {
        setNum(num*2)
    }
    return(
        <div>
            <p>count: {num}</p>
            <button onClick={addNum}>Add</button>
            <button onClick={deleteNum}>Delete</button>
            <button onClick={doubleNum}>Double</button>
        </div>

    )
}

export default Count;
