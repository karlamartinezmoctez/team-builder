//2. Creating a the Form component
//7. importing React and useState
import React,{useState} from "react";

const Form = (props) => {
    //9. creating a state with the same info from App
    const [person, setPerson] = useState([
        {
            email: ' ',
            name: ' ',
            role: ' '
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
            <label htmlFor="role">Role</label>
            {/* 8.creating input */}
            {/* 10. Add the onChange to the input*/}
            <input 
            id="role"
            name="role"
            value={person.role} 
            type="text"
            onChange = {handleChanges}/>
            <label htmlFor="email">Email</label>
            <input
            id="email"
            name="email"
            value={person.email}
            type="text"
            onChange = {handleChanges}/>
            {/* 19. adding a new label and text area for the other input(person) */}
            <label htmlFor="name"> Name </label>
            <textarea 
            id="name" 
            name="name"  
            value={person.name} 
            type="text"
            onChange={handleChanges}/>
            {/* 12. adding a button with the submit type */}
            <button type="submit">Add Team Member</button>

        </form>
    )
};

export default Form;