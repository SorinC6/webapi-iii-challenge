import React from 'react'

const UserList = ({users}) => {

    return(
        <div>
            {
                users.map(user=>{
                    return(
                        <p>{user.name}</p>
                    )
                })
            }
        </div>
    )
}

export default UserList