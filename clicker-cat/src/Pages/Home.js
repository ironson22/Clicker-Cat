import React from "react";
import '../Styles/Bulma.css'
import CatGenerator from "../Components/CatGenerator";
import { useSearchParams } from "react-router-dom";
import "../Styles/CustomStyles.css"

const Home = () => {
    const [searchparams] = useSearchParams();

    if (searchparams.get("role") === "USER")
    {
        return(
            <div>
                <section className="section">
                    <CatGenerator />
                </section>
            </div>
        );
    } else {
        return(
            <div>
                <a href="/admin" className="button is-link admin-button">Admin Console</a>
                <section className="section">
                    <CatGenerator />
                </section>
            </div>
        )
    }
}

export default Home;