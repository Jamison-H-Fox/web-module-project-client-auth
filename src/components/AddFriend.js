import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
    & * {
        // border: 1px red solid;
    }
`

function AddFriend() {


    return(
        <StyledDiv>
            <h1>Add Friend</h1>
            <form>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input id='name' type='text'></input>
                </div>
                <div>
                    <label htmlFor="age">Age: </label>
                    <input id='age' type='text'></input>
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input id='email' type='text'></input>
                </div>
                <button>Submit</button>
            </form>
        </StyledDiv>
    )
}

export default AddFriend