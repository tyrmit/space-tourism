import { useState } from 'react';

import './DestinationPage.css';
import destPageData from '../../../assets/data/destination.json';

function DestinationPage(props) {
    const [destIndex, setDestIndex] = useState(0);
    const destData = destPageData.destinations[destIndex];

    const handleNavClick = (e, id) => {
        e.stopPropagation();
        setDestIndex(id);
    };

    const navElements = destPageData.destinations.map((d) => (
        <li
            className="destination-page__nav-item"
            key={d.id}
            onClick={(e) => handleNavClick(e, d.id)}
        >
            {d.name}
        </li>
    ));

    return (
        <div className="page destination-page">
            <div className="destination-page__content">
                <section className="destination-page__pretitle">
                    <h6>
                        <span className="destination-page__page-number">
                            {destPageData.pageNumber}
                        </span>{' '}
                        {destPageData.preTitle}
                    </h6>
                </section>
                <section className="destination-page__img-container">
                    <img
                        className="destination-page__img"
                        src={destData.imgUrl}
                        alt=""
                    />
                </section>
                <section className="destination-page__content">
                    <nav className="destination-page__nav">
                        <ul>{navElements}</ul>
                    </nav>
                    <div className="destination-page__detail">
                        <h2>{destData.name}</h2>
                        <div className="body-text">
                            <p>{destData.bodyText}</p>
                        </div>
                    </div>
                    <div className="destination-page__stats"></div>
                </section>
            </div>
        </div>
    );
}

export default DestinationPage;
