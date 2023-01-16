import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
    & * {
        // border: 1px red solid;
    }
`

function FriendList() {


    return(
        <StyledDiv className="FriendList">
            <h1>Friend List</h1>
            <ul>
                <li>Name - age - email</li>
                <li>Name - age - email</li>
                <li>Name - age - email</li>
                <li>Name - age - email</li>
                <li>Name - age - email</li>
                <li>Name - age - email</li>
            </ul>
        </StyledDiv>
    )
}

export default FriendList