import React from "react"
class Userclass extends React.Component {
    constructor(props){
        super(props);

        this.state =  {
            count: 1,
        };
        console.log("Child Constructor");
    }
    componentDidMount(){
        //****Used For Making API calls (Same as useEffect) This componet is called after mounting completion of component** */
        console.log("Child Did Mount")
    }

    render(){
        console.log("Child Render")
        const {name,location,github} = this.props;
        const {count} = this.state;
        return (
            <div className="user-card">
                
                <h1>Count : {count}</h1>
                <button 
                    onClick = { () => {
                        console.log("Child button-clicked");
                        this.setState ({
                            count: this.state.count + 1,
    
                    });
                }}
                > Click Me</button>
                <p>Name : {name}</p>
                <p>Location : {location}</p>
                <p>Github : {github}</p>
            </div>
        )
    }
}

export default Userclass;