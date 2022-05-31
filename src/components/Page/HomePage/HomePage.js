import './HomePage.css';
import homePageData from '../../../assets/data/home.json';

function HomePage(props) {
    return (
        <div className="home-page">
            <section className="home-page__pretitle">
                <h6>{homePageData.preTitle}</h6>
            </section>
            <section className="home-page__title">
                <h1>{homePageData.title}</h1>
            </section>
            <section className="home-page__bodytext">
                <p>{homePageData.bodyText}</p>
            </section>
            <section className="home-page__explore">
                <button className="home-page__explore-btn">EXPLORE</button>
            </section>
        </div>
    );
}

export default HomePage;
