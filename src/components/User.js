import { useState } from "react";

const User = ({name,location,github}) =>{
    const [count] = useState(0);

    return (
        <div className="user-card">
            <h1>count ={count}</h1>
            <p>Name :{name}</p>
            <p>Location : {location}</p>
            <p>Github : {github}</p>
        </div>
    )
}
export default User;