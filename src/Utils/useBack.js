import { useNavigate } from "react-router-dom";

const useBack =()=>{
    let navigate = useNavigate();
    return (
        <button onClick={
            ()=>{
                navigate(-1);
            }
        }>
            Back
        </button>>
    )
}
export default useBack;