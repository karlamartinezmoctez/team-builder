import React from "react"

const Team = (props) => {
    return(
        <div className = "team-list">
        {
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