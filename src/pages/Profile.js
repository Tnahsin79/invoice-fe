import React from "react";
//import { useParams } from "react-router-dom";

const Profile = (props) => {
    const id = props.id;
    const name = props.name;
    const email = props.email;

    return (
        <div>
            <h1>User ID: {id}</h1>
            <h1>User Name: {name}</h1>
            <h1>User Email: {email}</h1>
        </div>
    )
}
export default Profile;