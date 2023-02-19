import React, { useState }from "react";
import '../Styles/Bulma.css'
import '../Styles/CustomStyles.css'
import dataSource from "../datasource.js";
import { useEffect } from "react";

const ListUser = () => {

    const [userList, setUserList] = useState([]);
    let refresh = false;
        
        //Method to get the users from the API
        const loadUsers = async () => {
            const response = await dataSource.get('/users');
    
            setUserList(response.data);
        }
    
        useEffect(() => {
           loadUsers();
        }, [refresh])
    
        const deleteUser = async (id) => {
            await dataSource.delete(`/users/${id}`);
            refresh = true;
            window.location.reload();
        }


    return(
        <div>
            {/* List the users that were returned from /users */}
            <table border="1">
                <tbody>
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                    {userList.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                            <td>{user.name}</td>
                            <td>{user.role}</td>
                            <td><button onClick={()=>deleteUser(user.id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListUser;