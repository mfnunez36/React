import Router from "next/router";

const Users = ({users}) => {
    return (
        <>
            <h2>Users</h2>
            <ul className="list-group">
                {
                    users.map(user => (
                        <li 
                        className="list-group-item list-group-item-action" 
                        key={ user.id }
                        onClick={(e)=>{ Router.push('/users/[id]', `/users/${user.id}`) }}
                        >
                            <h5>{ user.name }</h5>
                            <label>Email :</label><p>{ user.email }</p>
                            <label>Web site :</label><p><a href={`www`+user.website}>{ user.website }</a></p>
                        </li>
                    )) 
                }
            </ul>
        </>
    )
}

export default Users;