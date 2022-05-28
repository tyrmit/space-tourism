import logo from '../../assets/ico/logo.svg';
import ham from '../../assets/ico/icon-hamburger.svg';
import './Page.css';

function Page({ children }) {
    return (
        <main>
            <img className="page__logo" src={logo} alt="" />
            <img className="page__hamburger" src={ham} alt="" />
            {children}
        </main>
    );
}

export default Page;
