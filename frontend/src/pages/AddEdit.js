import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import './AddEdit.css';
import { toast } from 'react-toastify';

const initialState = {
    name: "",
    email: "",
    contact: "",
};

const AddEdit = () => {
    const [data, setData] = useState(initialState);
    const { name, email, contact } = data;
    const history = useHistory();

    const { id } = useParams();
    useEffect(() => {
        if (id) {
            getSingleUser(id);
        }
    }, [id])

    const getSingleUser = async (id) => {
        const response = await axios.get(`/user/${id}`);
        if (response.status === 200) {
            setData({ ...response.data });
        }
    };

    const addUser = async (data) => {
        const response = await axios.post("/user", data);
        if (response.status === 200) {
            toast.success(response.data);
        }
    }
    const UpdateUser = async (data, id) => {
        const response = await axios.put(`/user/${id}`, data);
        if (response.status === 200) {
            toast.success(response.data);
        }
    }
    const handleSubmit = (e) => {

        e.preventDefault();
        if (!name || !email || !contact) {
            toast.error("please provide value into each input")
        } else {
            if (!id) {
                addUser(data);

            } else {
                UpdateUser(data, id);
            }
            history.push("/");
        }

    };

    return (
        <div style={{ marginTop: "100px" }}>
            <form style={{ margin: "auto", padding: "15px", maxWidth: "400px", alignContent: "center" }} onSubmit={handleSubmit}>

                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Enter Name ..." value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Enter Email ..." value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
                <label htmlFor="contact">Contact</label>
                <input type="text" id="contact" name="contact" placeholder="Enter Contact No ..." value={data.contact} onChange={(e) => setData({ ...data, contact: e.target.value })} />
                <input type="submit" value={id ? "Update" : "Add"} />
            </form>
        </div>
    )


}
export default AddEdit;