import React from "react";

class MyComp extends React.Component{
      state = {
            someNumber : 10,
      };

      render = () => {

            console.log("Render function is executed");

            return (
                  <div>
                        <button
                        onClick = { () => {
                              // this.setState({someNumber : this.state.someNumber + 1}); // for increment
                              this.setState({someNumber : this.state.someNumber - 1}); // for decrement
                        } }
                        >
                              {/* increment */}
                              decrement

                        </button>
                        <h1> {this.state.someNumber} </h1>
                  </div>
            );
      };
}

export default MyComp;