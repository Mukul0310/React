import { useNavigate } from "react-router-dom";

const Back =()=>{
    let navigate = useNavigate();
    return (
        <button className="bg-blue-50 m-4 px-4 py-2 rounded-lg" onClick={
            ()=>{
                navigate(-1);
            }
        }>
            Back
        </button>
    )
}
export default Back;