import React from 'react';


class Test extends React.Component{
  
    onTrigger = (event) => {
        this.props.parentCallback("Data from child");
        event.preventDefault();
    }

    render(){
        return(
        <div>
            <form onSubmit = {this.onTrigger}>
                <input type = "submit" value = "Submit"/>
            </form>
        </div>
        )
    }
}

export default Test;