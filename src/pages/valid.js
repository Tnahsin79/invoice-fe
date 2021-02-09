import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Valid = () => {
    const { id } = useParams();
    const [message, setMessage] = useState("");
    useEffect(() => {
        try {
            console.log(id);
            var data = {
                Id: id
            }
            //fetch("https://react-login-server.herokuapp.com/valid", {
            fetch("https://invoice-server-backend.herokuapp.com/valid", {
                method: "PUT",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then((res) => res.json())
                .then((data) => setMessage(data.message))
                .catch(console.error);
        }
        catch (error) {
            console.log(error);
            //alert(error);
        }
    });

    return (
        <div className="container">
            <h1>{message}</h1>
            <h3>proceed to login....</h3>
        </div>
    )
}
export default Valid;