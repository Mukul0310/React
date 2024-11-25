import User from "./User";
import Userclass from "./Userclass";
import { Component } from "react";

class About extends Component {
    constructor(props){
        super(props);
        console.log("Parent Contructor");
    }
    componentDidMount(){
        console.log("Parent Did Mount")
    }

    render() {
        console.log("Parent Render");
        return (
            
            <div>
                <button onClick={() => {
                    console.log("Parent Button Clicked")
                }}>Click Me</button>
                <h1>About Us</h1>
                 <h2>Welcome to Foodify</h2>
                {/* <User name="Mukul Gupta(Function)" location = "Indore" github="mukul0310"/> */}
                        
                <Userclass name="Mukul Gupta(Class)" location = "Indore (class)" github="mukul0310 (class)"/>
            </div>
        )
    }
} 


// const About = () => {
//     return (
//         <div>
//             <h1>About Us</h1>
//             <h2>Welcome to Foodify</h2>
//             {/* <User name="Mukul Gupta(Function)" location = "Indore" github="mukul0310"/> */}
            
//             <Userclass name="Mukul Gupta(Class)" location = "Indore (class)" github="mukul0310 (class)"/>
//         </div>


//     )
// }

export default About;