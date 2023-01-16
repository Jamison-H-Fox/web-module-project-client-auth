import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    & .button-container{
        border: 1px black solid;
        border-radius: 10px;
        width: 25%;
        padding: 1.25%;

        & button{
            margin: 2.5%;
            width: 15%;
        }
    }
`

function Logout() {
    const { push } = useHistory();
    const handleLogout = () => {
        push('/login');
        localStorage.removeItem('token');
        window.location.reload(false)
    }

    const handleCancel = () => {
        push('/friends')
    }

    return (
        <StyledDiv className="logout">
            <h1>Log Out</h1>
            <div className="button-container">
                <h4>Are you sure you want to log out?</h4>
                <button onClick={handleLogout}>Yes</button>
                <button onClick={handleCancel}>No</button>
            </div>
        </StyledDiv>
    )
}

export default Logout