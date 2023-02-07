import React, { useEffect, useState } from "react";
import '../Styles/Bulma.css'
import '../Styles/CustomStyles.css'

const URL = 'https://api.thecatapi.com/v1/images/search';

const getRandomCat = async() => {
    const response = await fetch(URL);
    const body = await response.json();
    return body[0].url;
}

const CatGenerator = () => {
    const [url, setUrl] = useState();

    useEffect(() => {
        onClickHandler();
    }, []);

    const onClickHandler = async () => {
        console.log("Getting a cat...");
        const pic = await getRandomCat();
        setUrl(pic);
    };

    return (
      <div className="container is-max-desktop">
        <div className="profile-cards cardStyles">
          <div className="card">
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <div className="rows">
                    <div className="row">
                      <img src={url} className="catImage" alt="" />
                    </div>
                    <div className="row button-row">
                      <div className="catButton">
                        <button
                          onClick={onClickHandler}
                          className="button is-link"
                        >
                          Click me for a Cat
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CatGenerator;