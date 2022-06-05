import './CrewPage.css';
import crewPageData from '../../../assets/data/crew.json';

function CrewPage(props) {
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
            </section>
        </div>
    );
}

export default CrewPage;
