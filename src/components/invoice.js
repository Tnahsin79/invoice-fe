import React, { useEffect, useState, useParams } from 'react';
import './invoice.css';

const Invoice = () => {
    //const { id } = useParams();
    /*const [profileData, setProfileDate] = useState({});
    useEffect(() => {
        fetch("http://localhost:3001/user/" + id)
            .then((res) => res.json())
            .then((data) => setProfileDate(data.user))
            .catch(console.error);
        console.log(profileData);
    }, []);*/
    return (
        <div className="container invoice">
            <h3>INVOICE</h3>
            <div className="row">
                <div className="col-12 col-md-6">
                    <h6>From</h6>
                    <h4>Business Name</h4>
                    <h6>email</h6>
                    <h6>fname lname</h6>
                </div>
                <div className="col-12 col-md-6">
                    <h6>To</h6>
                    <h4>Client Name</h4>
                    <h6>email</h6>
                    <h6>fname lname</h6>
                </div>
            </div>
            <hr></hr>
        </div>
    );
}

export default Invoice;