import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const StyledDiv = styled.div`
    & * {
        // border: 1px red solid;
    }
`

function FriendList() {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token');
        axios.get('http://localhost:9000/api/friends', {
            headers: {
                authorization: token,
            }
        })
            .then(res => {
                setFriends(res.data)
            })
            .catch(err => {
                console.error(err);
            })
    }, []);

    return(
        <StyledDiv className="FriendList">
            <h1>Friend List</h1>
                {
                    friends.map(friend => {
                        return <p key={friend.id}>{friend.name} - {friend.age} - {friend.email}</p>
                    })
                }
        </StyledDiv>
    )
}

export default FriendList