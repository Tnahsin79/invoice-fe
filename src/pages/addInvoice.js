import React, { useEffect, useState } from 'react';
//import './App.css';
import { useHistory } from "react-router-dom";
import routes from "../routes";
import Invoice from "../components/invoice"

const AddInvoice = () => {
    const [bname, setBname] = useState("");
    const [yemail, setYEmail] = useState("");
    const [cemail, setCEmail] = useState("");
    const [total, setTotal] = useState(0);
    const [amount, setAmount] = useState();
    const [inv, setInv] = useState(false);
    const [profileData, setProfileDate] = useState({});
    const [items, setItems] = useState([
        {
            itemName: "itemName 1",
            itemPrice: 23
        },
        {
            itemName: "itemName 2",
            itemPrice: 30
        },
        {
            itemName: "itemName 3",
            itemPrice: 100
        }
    ]);
    const [itemName, setItemName] = useState("");
    const [itemPrice, setItemPrice] = useState();
    const history = useHistory();

    useEffect(() => {
        fetch("https://invoice-server-backend.herokuapp.com/getUser/" + cemail)
            .then((res) => res.json())
            .then((data) => setProfileDate(data.user))
            .catch(console.error);
        console.log(profileData);
    }, [cemail]);

    const changeBname = (e) => {
        setBname(e.target.value);
    }
    const changeYEmail = (e) => {
        setYEmail(e.target.value);
    }
    const changeCEmail = (e) => {
        setCEmail(e.target.value);
    }
    const changeAmount = (e) => {
        setAmount(e.target.value);
    }
    const changeItemName = (e) => {
        setItemName(e.target.value);
    }
    const changeItemPrice = (e) => {
        setItemPrice(e.target.value);
    }
    const addItem = () => {
        let dat = total + itemPrice;
        setTotal(dat);
        //items.push(dat);
        setItems(...items,
            {
                "itemName": itemName,
                "itemPrice": itemPrice
            }
        );
        console.log(itemName, itemPrice);
    }
    const listItem = items.map((item) => <li>item: {item.itemName} &nbsp;&nbsp;&nbsp;&nbsp; price: {item.itemPrice}</li>);
    const submit = async () => {
        try {
            var data = {
                Bname: bname,
                YEmail: yemail,
                CEmail: cemail,
                Items: items,
                Total: total,
                Amount: amount,
                Balance: amount - total
            }
            console.log(data);
            setBname("");
            setYEmail("");
            setCEmail("");
            setItemName("");
            //let temp = await fetch("https://react-login-server.herokuapp.com/signup", {
            let temp = await fetch("http://localhost:3001/addinvoice", {
                method: "PUT",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            //if (temp)
            //history.push(routes.invoice.replace(":id", profileData._id));
            setInv(true);
        }
        catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="container">
            <form className="text-center border border-light p-5">
                <p class="h4 mb-4">Add Invoice Details</p>
                <input type="text" id="defaultLoginFormName" className="form-control mb-4" placeholder="Bussiness name" onChange={changeBname} required />
                <input type="email" id="defaultLoginFormEmail" className="form-control mb-4" placeholder="Business E-mail" onChange={changeYEmail} required />
                <input type="email" id="defaultLoginFormEmail" className="form-control mb-4" placeholder="Client E-mail" onChange={changeCEmail} required />
                {
                    items.map((item) =>
                        <div>item name: {item.itemName} &nbsp;&nbsp;&nbsp;&nbsp; Price: {item.itemPrice}</div>
                    )
                }
                <input type="number" id="defaultLoginFormNumber" className="form-control mb-4" placeholder="Amount Paid" onChange={changeAmount} required />
                <button className="btn btn-info btn-block my-4" onClick={submit}>Create Invoice</button>
            </form>
            {
                inv ? <Invoice /> : null
            }
        </div>
    );
}

export default AddInvoice;
/*
<ul>{listItem}</ul>
                <input type="text" id="defaultLoginFormName" className="form-control mb-4" placeholder="Item Name" onChange={changeItemName} required />
                <input type="number" id="defaultLoginFormNumber" className="form-control mb-4" placeholder="Item Price" onChange={changeItemPrice} required />
                <button className="btn btn-info btn-block my-4" onClick={addItem}>Add Item</button>
*/