import React from "react";

const PlanItem = ({ planName, description, pic, price}) => {
    return (
        <section>
            <img className="item-picture" alt={planName} src={pic}  />
            <h3>{planName}</h3>
            Price: <span>${price}</span>
            <br/>
            Rating: <span>{description}</span>
        </section>
    )
}

export default PlanItem;