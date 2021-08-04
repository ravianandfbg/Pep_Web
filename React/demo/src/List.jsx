let List = (props) => { // props : we can give data from parent to child using props ; App(parent component) -------> List(child component)
      return (
        <ul>
          {props.tasks.map((el) => {
            return (
              <li>
                {el}{" "}
                {/* <button
                  onClick={() => {
                    let currTaskArr = this.state.tasks;
                    let filteredArr = currTaskArr.filter((element) => {
                      return element != el;
                    });
                    this.setState({ tasks: filteredArr });
                  }}
                >
                  Delete
                </button> */}
              </li>
            );
          })}
        </ul>
      );
    };
    
    export default List;