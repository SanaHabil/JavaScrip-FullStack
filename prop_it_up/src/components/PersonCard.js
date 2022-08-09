import React,{ useState } from "react";

const PersonCard = (props) => {
    const [addOneYear, setAddOneYear] = useState(props.age);
    
    return (
            <>
                <h2>
                    {props.firstname}, {props.lastname}
                </h2>
                <p>Age: {addOneYear}</p>
                <p>Hair Color: {props.haircolor}</p>     
                <button onClick ={(event)=>setAddOneYear(addOneYear +1)}>BirthDay Button For {props.firstname} {props.lastname}</button>
            </>
    )
    };

export default PersonCard;