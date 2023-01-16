import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
    & * {
        // border: 1px red solid;
    }
`

function Login() {


    return(
        <StyledDiv className="login">
            <h1>Login</h1>
            <form>
                <div>
                    <label htmlFor="username">Username: </label>
                    <input type='text' id='username' />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input type='password' id='password' />
                </div>
                <button>Submit</button>
            </form>
        </StyledDiv>
    )
}

export default Login