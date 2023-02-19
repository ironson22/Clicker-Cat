import React, { useState }from "react";
import '../Styles/Bulma.css'
import '../Styles/CustomStyles.css'
import { useNavigate } from "react-router-dom";
import dataSource from "../datasource.js";

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
    
    return(
        <div>
            {/* List the users that were returned from /users */}
            {userList.map((user) => (
                <div key={user.id}>
                    <p>{user.email}</p>
                    <p>{user.password}</p>
                    <p>{user.name}</p>
                    <p>{user.role}</p>
                </div>
            ))}
        </div>
    );
}

export default ListUser;