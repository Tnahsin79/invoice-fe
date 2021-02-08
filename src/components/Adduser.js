import React, { useEffect, useState } from 'react';
//import './App.css';
import { Switch, Route, useParams } from 'react-router-dom';

const AddUser = () => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const changeName = (e) => {
        setName(e.target.value);
    }
    const changeAddress = (e) => {
        setAddress(e.target.value);
    }
    const changeEmail = (e) => {
        setEmail(e.target.value);
    }
    const submit = async () => {
        try {
            var data = {
                Name: name,
                Address: address,
                Email: email,
                Invoices: []
            }
            console.log(data);
            setName("");
            setAddress("");
            setEmail("");
            //let temp = await fetch("https://react-login-server.herokuapp.com/signup", {
            let temp = await fetch("http://localhost:3001/adduser", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            //if(temp)
            //alert("User added");
        }
        catch (error) {
            console.log(error);
            //alert(error);
        }
    }
    return (
        <div className="container">
            <form className="text-center border border-light p-5">
                <p class="h4 mb-4">Add user</p>
                <input type="text" id="defaultLoginFormName" className="form-control mb-4" placeholder="User name" onChange={changeName} required />
                <input type="text" id="defaultLoginFormName" className="form-control mb-4" placeholder="User Address" onChange={changeAddress} required />
                <input type="email" id="defaultLoginFormEmail" className="form-control mb-4" placeholder="E-mail" onChange={changeEmail} required />
                <button className="btn btn-info btn-block my-4" type="submit" onClick={submit}>Add new user</button>
            </form>
        </div>
    );
}

export default AddUser;