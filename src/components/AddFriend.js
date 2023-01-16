import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";

const StyledDiv = styled.div`
    & * {
        // border: 1px red solid;
    }
`

function AddFriend() {
    const { push } = useHistory();
    const[form, setForm] = useState({
        name: '',
        age: '',
        email: ''
    })

    const handleChange = (evt) => {
        setForm({
            ...form,
            [evt.target.name]: evt.target.value
        })
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        axiosWithAuth().post('/friends', form)
            .then(res => {
                push('/friends');
                setForm({
                    name: '',
                    age: '',
                    email: ''
                })
            })
            .catch(err => {
                console.error(err)
            })
    }

    return(
        <StyledDiv>
            <h1>Add Friend</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input
                        onChange={handleChange}
                        id='name' 
                        type='text'
                        name='name'
                        value={form.name}
                    ></input>
                </div>
                <div>
                    <label htmlFor="age">Age: </label>
                    <input
                        onChange={handleChange}
                        id='age' 
                        type='text'
                        name='age'
                        value={form.age}
                    ></input>
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input
                        onChange={handleChange}
                        id='email' 
                        type='text'
                        name='email'
                        value={form.email}
                    ></input>
                </div>
                <button>Submit</button>
            </form>
        </StyledDiv>
    )
}

export default AddFriend