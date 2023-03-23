import React from "react";

type props = {
    schoolName: string;
    mascotName: string;
    location: string;
}

export default function Card(props: props) {
    return (
        <div>
            <h1>School Name: {props.schoolName}</h1>
            <ul>
                <li>Mascot: {props.mascotName}</li>
                <li>Location: {props.location}</li>
            </ul>
        </div>
    )
}