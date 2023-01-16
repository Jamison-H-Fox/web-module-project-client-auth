import React , { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const StyledDiv = styled.div`
    & * {
        // border: 1px red solid;
    }
`

function Login() {
    const { push } = useHistory()
    const [cred, setCred] = useState({
        username: '',
        password: ''
    });

    const handleChange = (evt) => {
        setCred({ 
            ...cred,
            [evt.target.name]: evt.target.value
        })
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        axios.post("http://localhost:9000/api/login", cred)
            .then(res => {
                localStorage.setItem('token', res.payload);
                push('/friends');
                setCred({
                    username: '',
                    password: ''  
                })
            })
            .catch(err => {
                console.error(err)
                setCred({
                    username: '',
                    password: ''  
                })
            })
    }

    return(
        <StyledDiv className="login">
            <h1>Login</h1>
            <form onSubmit={(evt) => handleSubmit(evt)}>
                <div>
                    <label htmlFor="username">Username: </label>
                    <input
                        onChange={(evt) => handleChange(evt)}
                        type='text'
                        id='username'
                        name='username'
                        value={cred.username}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input
                        onChange={(evt) => handleChange(evt)}
                        type='password'
                        id='password'
                        name='password'
                        value={cred.password}
                    />
                </div>
                <button>Submit</button>
            </form>
        </StyledDiv>
    )
}

export default Login