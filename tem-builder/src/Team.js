import React from "react"

//4. passing in the props
const Team = (props) => {
    return(
        <div className = "team-list">
        {
            //5. mapping through the props data and creating a h2 and p
            props.member.map(person => (
                <div className = "member" key = {person.id}>
                    <h2>{person.name}</h2>
                    <p>{person.email}</p>
                </div>
            ))
        }        
        </div>
    )
}
    

export default Team;