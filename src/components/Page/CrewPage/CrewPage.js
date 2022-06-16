import { useState } from 'react';

import './CrewPage.css';
import crewPageData from '../../../assets/data/crew.json';
// import crewImg from '../../../assets/img/crew/image-douglas-hurley.webp';

function CrewPage(props) {
    // Temporarily only taking the state and not setState function here to remove the compile warning.
    // Will come back across it later.
    const crewIndex = useState(0)[0];

    return (
        <div className="page crew-page">
            <section className="crew-page__content">
                <div className="crew-page__pretitle">
                    <h6>
                        <span className="crew-page__page-number">
                            {crewPageData.pageNumber}
                        </span>{' '}
                        {crewPageData.preTitle}
                    </h6>
                </div>
                <div className="carousel">
                    <div className="carousel__content">
                        <img
                            className="crew-page__img"
                            src={crewPageData.crewMembers[crewIndex].imgUrl}
                            alt=""
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default CrewPage;
