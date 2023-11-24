import React from "react";
import PlanItem from "./PlanItem";

const ItemList = () => {
    const plans = [
        {
            planName: "Item 1",
            pic: 'https://fastly.picsum.photos/id/434/200/300.jpg?hmac=OXYWBdR0QE1mGM2dKi1dktPcY5GckI3ClAgMsyszU-I',
            price: 15.99,
            description: "Rating: 4.0",
        },

        {
            planName: "Item 2",
            pic: 'https://fastly.picsum.photos/id/535/200/300.jpg?hmac=iN2CqXJjjbBwtMlTUpWyZV6xFRfk_-XSDYRSk2eFbsQ',
            price: 20.99,
            description: "Rating: 4.2",
        },
        
        {
            planName: "Item 3",
            pic: 'https://fastly.picsum.photos/id/933/200/300.jpg?hmac=8zdipGWKGkHz8wyA9J63P3fzghuUL9wqV5Y34b8mLTI',
            price: 25.99,
            description: "Rating: 4.4",
        },

        {
            planName: "Item 4",
            pic: 'https://fastly.picsum.photos/id/542/200/300.jpg?hmac=qD8M4ejDPlEc69pGT21BzB7CDiWOcElb_Ke7V8POjm8',
            price: 30.99,
            description: "Rating: 4.6",
        },

        {
            planName: "Item 5",
            pic: 'https://fastly.picsum.photos/id/153/200/300.jpg?hmac=H_AmVmfo0YXYc3J4qq_lRGgrdh9kryFiXE-D7Ozekrg',
            price: 30.99,
            description: "Rating: 4.8",
        },

        {
            planName: "Item 6",
            pic: 'https://fastly.picsum.photos/id/137/200/300.jpg?hmac=5vAnK2h9wYgvt2769Z9D1XYb8ory9_zB0bqDgVjgAnk',
            price: 30.99,
            description: "Rating: 5.0",
        },
];

    return(
        <div className="container-fluid" style={{background:'#0096FF'}}>
            <div className="container p-5">
                <div className="row">
                    {plans.map((plan, index) => (
                        <div key={index} className="col-lg-4 col-md-12 mb-4">
                            <PlanItem {...plan} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ItemList;