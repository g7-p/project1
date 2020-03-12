import React from'react';

class Data extends React.Component{
    constructor(){
        super();
        this.state={
            count:20
        }
    }
    countdecrement=()=>{
        this.setState({count:this.state.count-1});
    }
    render(){
    return(
        <div>
            <h2>{this.state.count}</h2>
            <button onClick={this. countdecrement}>click Me</button>
        </div>

    )
}

}

export default Data;