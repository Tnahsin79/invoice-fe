import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import routes from "../routes";
//import routes from "../routes";
//import { useParams } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState(null);
    const [pwd, setPwd] = useState(null);
    const [type, setType] = useState("");
    const [dat, setDat] = useState({});
    const [access, setAccess] = useState(null);
    const history = useHistory();
    //console.log(history);
    //const { id } = useParams();

    useEffect(() => {
        if (localStorage.getItem('capstone'))
            history.push(routes.dashboard.replace(":id", localStorage.getItem('capstone')));
        fetch("http://localhost:3001/login/" + email + "/" + pwd + "/" + type)
            .then((res) => res.json())
            .then((data) => setDat(data))
            .catch(console.error);
        if (dat.status) {
            localStorage.setItem('capstone', dat.id);
            history.push(routes.dashboard.replace(":id", dat.id));
        }
        else
            setAccess(dat.status);
        console.log(dat);
    }, [email, pwd, type])

    const changeEmail = (e) => {
        setEmail(e.target.value);
    }
    const changePwd = (e) => {
        setPwd(e.target.value);
    }
    const changeType = (e) => {
        setType(e.target.value);
    }

    const submit = () => {
        setAccess(dat.status);
        console.log(dat);
        setEmail(null);
        setPwd(null);
        if (access)
            history.push(routes.dashboard.replace(":id", dat.id));
    }

    return (
        <div className="container">
            <form className="text-center border border-light p-5">
                <p class="h4 mb-4">Log in</p>
                <input type="email" id="defaultLoginFormEmail" class="form-control mb-4" placeholder="E-mail" onChange={changeEmail} required />
                <input type="password" id="defaultLoginFormPassword" class="form-control mb-4" placeholder="Password" onChange={changePwd} required />
                <h6>TYPE OF ACCOUNT</h6><br />
                <input type="radio" id="admin" name="Type" value="A" onChange={changeType} />
                <label for="admin">ADMIN</label><br />
                <input type="radio" id="manager" name="Type" value="M" onChange={changeType} />
                <label for="manager">MANAGER</label><br />
                <input type="radio" id="employee" name="Type" value="E" onChange={changeType} />
                <label for="employee">EMPLOYEE</label><br />
                <button className="btn btn-info btn-block my-4" onClick={submit}>LOGIN</button>
                {
                    access === false ? <h3>{dat.message}</h3> : null
                }
            </form>
        </div>
    );
}
export default Login;
//dat.status ? history.push(routes.dashboard.replace(":id", dat.id)) : <h3>{dat.message}</h3>