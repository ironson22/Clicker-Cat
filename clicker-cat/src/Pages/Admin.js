import React from "react";
import '../Styles/Bulma.css'
import ListUser from "../Components/ListUser";
import "../Styles/CustomStyles.css"



const Admin = () => {
    return(
        <div>
            <a href="/home" className="button is-link admin-button">Home</a>
            <section className="section">
            <ListUser />
            </section>
        </div>
    );
}

export default Admin;
