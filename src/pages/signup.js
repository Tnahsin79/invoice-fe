import React, { useState } from "react";
//https://react-login-server.herokuapp.com/
const Signup = () => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [type, setType] = useState("");
    const changeFname = (e) => {
        setFname(e.target.value);
    }
    const changeLname = (e) => {
        setLname(e.target.value);
    }
    const changeEmail = (e) => {
        setEmail(e.target.value);
    }
    const changePwd = (e) => {
        setPwd(e.target.value);
    }
    const changeType = (e) => {
        setType(e.target.value);
    }
    const submit = async () => {

        try {
            var data = {
                Fname: fname,
                Lname: lname,
                Email: email,
                Password: pwd,
                isActivated: true,
                Type: type
            }
            console.log(data);
            setFname("");
            setLname("");
            setEmail("");
            setPwd("");
            //let temp = await fetch("https://react-login-server.herokuapp.com/signup", {
            let temp = await fetch("https://invoice-server-backend.herokuapp.com/signup", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if(temp)
                alert("User added");
        }
        catch (error) {
            console.log(error);
            //alert(error);
        }
    }
    return (
        <div className="container">
            <form className="text-center border border-light p-5">
                <p class="h4 mb-4">Sign in</p>
                <input type="text" id="defaultLoginFormName" className="form-control mb-4" placeholder="Fname" onChange={changeFname} required />
                <input type="text" id="defaultLoginFormName" className="form-control mb-4" placeholder="Lname" onChange={changeLname} required />
                <input type="email" id="defaultLoginFormEmail" className="form-control mb-4" placeholder="E-mail" onChange={changeEmail} required />
                <input type="password" id="defaultLoginFormPassword" className="form-control mb-4" placeholder="Password" onChange={changePwd} required />
                <h6>TYPE OF ACCOUNT</h6><br />
                <input type="radio" id="admin" name="Type" value="A" onChange={changeType}/>
                <label for="admin">ADMIN</label><br />
                <input type="radio" id="manager" name="Type" value="M" onChange={changeType}/>
                <label for="manager">MANAGER</label><br />
                <input type="radio" id="employee" name="Type" value="E" onChange={changeType}/>
                <label for="employee">EMPLOYEE</label><br />
                <button className="btn btn-info btn-block my-4" type="submit" onClick={submit}>SIGN UP</button>
            </form>
        </div>
    );
}
export default Signup;