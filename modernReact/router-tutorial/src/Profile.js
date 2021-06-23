import React from 'react';

const profileData = {
    jang: {
        name:'장성호',
        description:
            '공부 중인 대학생.'
    },
    tester: {
        name:'테스터',
        description:
            '테스터의 설명란.'
    }
};

const Profile =({ match }) => {
    const { username } = match.params;
    const profile = profileData[username];
    if(!profile){
        return <div>존재하지 않는 프로필입니다.</div>
    }
    return(
        <div>
            <h3>
                {username}({profile.name})
            </h3>
            <p>{profile.description}</p>
        </div>
    );
};

export default Profile;