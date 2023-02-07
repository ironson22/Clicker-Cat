import React from "react";
import '../Styles/Bulma.css'
import CatGenerator from "../Components/CatGenerator";

const Home = () => {

    return(
        <div>
            <section className="section">
                <CatGenerator />
            </section>
        </div>
    );
}

export default Home;