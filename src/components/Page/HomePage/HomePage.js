import './HomePage.css';
import homePageData from '../../../assets/data/home.json';

function HomePage(props) {
    return (
        <div className="page home-page">
            <section className="home-page__content">
                <div className="home-page__pretitle">
                    <h6>{homePageData.preTitle}</h6>
                </div>
                <div className="home-page__title">
                    <h1>{homePageData.title}</h1>
                </div>
                <div className="body-text">
                    <p>{homePageData.bodyText}</p>
                </div>
            </section>
            <section className="home-page__explore">
                <button className="home-page__explore-btn">EXPLORE</button>
            </section>
        </div>
    );
}

export default HomePage;
