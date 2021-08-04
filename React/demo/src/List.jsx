let List = (props) => { // props : we can give data from parent to child using props ; App(parent component) -------> List(child component)
      return (
            <ul>
              {props.tasks.map((el) => {
                return (
                  <li>
                    {el}
                    <button
                      onClick={() => {
                        props.deleteTask(el)
                      }}
                    >
                      Delete
                    </button>
                  </li>
                );
              })}
            </ul>
          );
        };
        
        export default List;