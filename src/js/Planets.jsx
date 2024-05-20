import React, { useContext,useState } from "react";
import { Context } from "./store/appContext";
import { Link } from "react-router-dom";

export const Planets = () => {


    const { store, actions } = useContext(Context);
    const [favorites, setFavorites] = useState(store.favorites.map(item => item.name));

    const toggleFavorite = (name) => {
        if (favorites.includes(name)) {
            const updatedFavorites = favorites.filter(item => item !== name);
            setFavorites(updatedFavorites);
            actions.removeFavorite(name);
        } else {
            setFavorites([...favorites, name]);
            actions.addFavorites({ name, type: "Planet" });
        }
    };
    
    const isFavorite = (name) => favorites.includes(name);

    const handlePlanet = (url) => {
        actions.settingPlanetUrl(url);
    };

    return (
        <div className="container text-center text-white">
            <div className="row">
                {store.planets.map((item, index) => (
                    <div key={index} className="col-lg-4 col-md-6 col-sm-10 mb-3">
                        <div className="card my-4" style={{ width: "19rem" }}>
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                            </div>
                            <img
                                height="280"
                                src={`https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`}
                                className="card-img-top"
                                alt={`Image of planet ${item.name}`}
                                /* Aquí hacemos un onError y le pasamos una imagen buscada en google del planeta Tatooine, 
                                que es el que corresponde el Nº1 y no tiene imagen disponible */
                                onError={(e) => e.target.src = 'data:image/jpeg;base64,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'}
                            />
                            <div className="card-body d-flex justify-content-between align-items-end">
                                <Link to={`/detail-planets/${item.uid}`}
                                    onClick={() => handlePlanet(item.url)}
                                    className="btn btn-warning">+Info
                                </Link>
                                <span onClick={() => toggleFavorite(item.name)}>
                                    <i title="Add Favorite" style={{ cursor: "pointer" }} className={isFavorite(item.name) ? "fas fa-heart text-danger fs-3" : "far fa-heart text-danger fs-3"}></i>
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};