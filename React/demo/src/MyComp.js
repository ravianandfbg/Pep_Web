import React from "react";

class MyComp extends React.Component{
      state = {
            someNumber : 0,
      };

      render = () => {

            console.log("Render function is executed");

            return (
                  <div>
                        {/* INCREMENT */}
                        <button
                        onClick = { () => {
                              this.setState({someNumber : this.state.someNumber + 1}); // for increment
                        } }
                        >
                              increment

                        </button>

                        <h1> {this.state.someNumber} </h1>
                        
                        {/* DECREMENT */}
                        <button
                        onClick = { () => {
                              
                              this.setState({someNumber : this.state.someNumber - 1}); // for decrement
                        } }
                        >
                              
                              decrement

                        </button>
                        
                  </div>
            );
      };
}

export default MyComp;