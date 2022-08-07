import React from "react";

const PersonCard = (props) => {
    const {firstname, lastname, age, haircolor} = props;
return (
        <>
            <h2>
                {firstname}, {lastname}
            </h2>
            <p>Age: {age}</p>
            <p>Hair Color: {haircolor}</p>
        </>
)
};

export default PersonCard