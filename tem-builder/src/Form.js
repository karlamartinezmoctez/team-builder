//2. Creating a the Form component
//7. importing React and useState
import React,{useState} from "react";

const Form = (props) => {
    //9. creating a state
    const [person, setPerson] = useState([
        {
            title: ' '
        }
    ])

    //11. onChange handler to control inputs
    const handleChanges = e =>{
        setPerson({title: e.target.value})
        console.log(person);
    }
    
    return(
        //6. creating the form
        <form>
            {/* 7. Adding Labels */}
            <label htmlfor="title">Team Member Role</label>
            {/* 8.creating input */}
            {/* 10. Add the onChange to the input*/}
            <input id="title" onChange = {handleChanges}/>
            {/* 12. adding a button with the submit type */}
            <button type="submit">Add name</button>

        </form>
    )
};

export default Form;