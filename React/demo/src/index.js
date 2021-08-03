
//Libraries

import React from "react"; // Creation Logic
import ReactDOM from "react-dom"; // render Logic

// App is a component we have import
// import App from "./App";

import MyComp from "./MyComp";

ReactDOM.render(
            //     <App />, // ek component
            //     <MyComp />,

            <div>
                  <MyComp />
                  <hr />
                  <MyComp />
                  <hr />
                  <MyComp />
                  <hr />
                  <MyComp />
                  <hr />
                  <MyComp />
            </div>,

                document.querySelector("#root") // aur ek jagah jeha us component ko dikhana hai
                ); 