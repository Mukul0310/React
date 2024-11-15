import { useRouteError } from "react-router-dom";

const  Error = () => {
    const Err = useRouteError();
    return (

        <div>
            <h1>Opps!!!</h1>
            <h2>Something Went Wrong</h2>
            <h3>{Err.status} : {Err.statusText}</h3>
        </div>
    )
}

export default Error;