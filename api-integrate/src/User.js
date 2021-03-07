// import axios from 'axios';
import React, { useEffect } from 'react';
// import { useAsync } from 'react-async';
// import useAsync from './useAsync';
import { useUsersState, useUserDispatch, getUser } from './UsersContext';

function User({ id }){
    const state = useUsersState();
    const dispatch = useUserDispatch();
    useEffect(() => {
        getUser(dispatch, id);
    }, [dispatch, id]);

    const { data: user, loading, error } = state.user;

    if(loading) return <div>로딩중..</div>;
    if(error) return <div>에러가 발생했습니다.</div>;
    if(!user) return null;

    return(
        <div>
            <h2>{user.username}</h2>
            <p>
                <b>Email: </b> {user.email}
            </p>
        </div>    
    );
}

export default User;