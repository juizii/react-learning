//components == function
function Name({ newName, age }) {
    return (
      <div>
        <span>
          My name is {newName}, I am {age} years old.
        </span>
      </div>
    );
  }
  
  export default Name;
  
  // props = {
  //   name : "Joyce",
  //   age : "25"
  // }
  // {name, age} = props
  