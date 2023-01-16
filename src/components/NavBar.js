import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledNav = styled.nav`
    // border: red 1px solid;
    width: 50%;
    display: flex;
    justify-content: space-between;
    padding-left: 50%;

    & * {
        // border: red 1px solid;
    }

    & .link {
        text-decoration: none;
        margin: 2.5% 10% 2.5% 2.5%;
    }
`

function NavBar() {

    return(
        <StyledNav className="navbar">
            <Link className="link" to='/login'>Login</Link>
            <Link className="link" to='/friends'>Friend List</Link>
            <Link className="link" to='/friends/add'>Add Friend</Link>
            <Link className="link" to='/friends'>Login</Link>
        </StyledNav>
    )
}

export default NavBar