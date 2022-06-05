import { useState } from 'react';

import './CrewPage.css';
import crewPageData from '../../../assets/data/crew.json';
// import crewImg from '../../../assets/img/crew/image-douglas-hurley.webp';

function CrewPage(props) {
    const [crewIndex, setCrewIndex] = useState(0);

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
