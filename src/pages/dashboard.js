import React, { useEffect, useState } from 'react';
//import './App.css';
import { useParams } from 'react-router-dom';
import AddUser from "../components/Adduser"
import Invoice from '../components/invoice';
import AddInvoice from "../pages/addInvoice";
import routes from '../routes';

const Dashboard = () => {
    const { id } = useParams();
    const [profileData, setProfileDate] = useState({});

    useEffect(() => {
        fetch("http://localhost:3001/profile/" + id)
            .then((res) => res.json())
            .then((data) => setProfileDate(data))
            .catch(console.error);
        console.log(profileData);
    }, []);

    return (
        <div className="container">
            <AddUser />
            <AddInvoice />
        </div>
    );
}

export default Dashboard;