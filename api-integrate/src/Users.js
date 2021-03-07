// import axios from 'axios';
import React, { useState } from 'react';
// import { useAsync } from 'react-async';
// import useAsync from './useAsync';
import User from './User';
import { useUsersState, useUserDispatch, getUsers } from './UsersContext';

// async function getUsers(){
//     const response = await axios.get(
//         'https://jsonplaceholder.typicode.com/users'
//     );
//     return response.data;
// }

function Users(){
    const [userId, setUserId] = useState(null);
    const state = useUsersState();
    const dispatch = useUserDispatch();

    const { data: users, loading, error } = state.users;
    const fetchData = () => {
        getUsers(dispatch);
    }

    if(loading) return <div>로딩중..</div>;
    if(error) return <div>에러가 발생했습니다.</div>;
    if(!users) return <button onClick={fetchData}>불러오기</button>;

    return(
        <>
            <ul>
                {users.map(user =>(
                    <li 
                        key={user.id}
                        onClick={()=> setUserId(user.id)}
                        style={{cursor: 'pointer'}}
                    >
                        {user.username} ({user.name})
                    </li>
                ))}
            </ul>
            <button onClick={fetchData}>다시 불러오기</button>
            {userId && <User id = {userId} />}
        </>
    );
}

export default Users;