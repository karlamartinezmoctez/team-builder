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
    const handleChanges = e => {
        // setPerson({ title: e.target.value});
        // console.log(person);

        //20. Using computed Property Names to add multiple inputs/text
        setPerson({...person, [e.target.name]: e.target.value})
        console.log(person)
    };

    //15. Hangle the onSubmit
    const submitForm = e => {
        //16. prevent the loading on the page
        e.preventDefault();
        //18. passing the addNewPerson function
        props.addNewPerson(person);

    }
 
    return(
        //6. creating the form
        //17. add the onSubmit on the form  
        <form onSubmit = {submitForm}>
            {/* 7. Adding Labels */}
            <label htmlFor="title">Role</label>
            {/* 8.creating input */}
            {/* 10. Add the onChange to the input*/}
            <input id="title" onChange = {handleChanges}/>
            {/* 19. adding a new label and text area for the other input(person) */}
            <label htmlFor="person"> Name </label>
            <textarea id = "person" name="body" onChange={handleChanges}/>
            {/* 12. adding a button with the submit type */}
            <button type="submit">Add Team Member</button>

        </form>
    )
};

export default Form;