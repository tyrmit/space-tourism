import './CrewPage.css';
import crewPageData from '../../../assets/data/crew.json';

function CrewPage(props) {
    return (
        <div className="crew-page">
            <section className="crew-page__content">
                <div className="crew-page__pretitle">
                    <h6>{crewPageData.preTitle}</h6>
                </div>
            </section>
        </div>
    );
}

export default CrewPage;
