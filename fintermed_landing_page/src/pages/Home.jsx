import "./Home.css";
import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.svg";
export default function Home() {
    return (
        <div className="home-page">
            <div className="bg-orb one"></div>
            <div className="bg-orb two"></div>
            <div className="bg-orb three"></div>

            <header id="header" className="header sticky-top">
                <div className="branding d-flex align-items-center">
                    <div className="container position-relative d-flex align-items-center justify-content-between">
                        <a href="/" className="logo d-flex align-items-center">
                            <img src={Logo}  alt="FINTERMED Logo" />
                            <h1 className="sitename">FINTERMED</h1>
                        </a>
                    </div>
                </div>
            </header>

            <main>
                <section className="selector-hero">
                    <div className="container">
                        <div className="selector-heading">
                            <h1>
                                Protecție financiară pentru <span>proiecte rezidențiale</span>
                            </h1>

                            <p>
                                FINTERMED oferă o experiență diferită pentru dezvoltatori și cumpărători.
                                Selectează profilul tău și mergi direct către pagina creată special pentru
                                nevoile tale.
                            </p>
                            <div className="selector-badge mt-5">
                                <i className="bi bi-shield-check"></i>
                                Alege experiența potrivită pentru tine
                            </div>

                        </div>

                        <div className="selector-grid">
                            <div className="row gy-4 align-items-stretch">
                                <div className="col-lg-6">
                                    <div className="selector-card">
                                        <div className="selector-card-inner">
                                            <div className="selector-card-top">
                                                <div className="selector-icon">
                                                    <i className="bi bi-buildings"></i>
                                                </div>

                                                <div className="selector-chip">
                                                    <i className="bi bi-graph-up-arrow"></i>
                                                    B2B
                                                </div>
                                            </div>

                                            <h3>Sunt dezvoltator imobiliar</h3>

                                            <p>
                                                Vrei să accelerezi vânzările proiectelor rezidențiale, să securizezi
                                                tranșele de plată și să obții un cash-flow predictibil încă din faza
                                                de proiect.
                                            </p>

                                            <ul className="selector-list">
                                                <li>
                                                    <i className="bi bi-check-circle-fill"></i>
                                                    <span>Accelerarea vânzărilor “pe plan” prin utilizarea unui mecanism de escrow</span>
                                                </li>
                                                <li>
                                                    <i className="bi bi-check-circle-fill"></i>
                                                    <span>Eliberarea progresivă a fondurilor în funcție de milestone-urile confirmate</span>
                                                </li>
                                                <li>
                                                    <i className="bi bi-check-circle-fill"></i>
                                                    <span>Administrare centralizată și conformitate integrată</span>
                                                </li>
                                                <li>
                                                    <i className="bi bi-check-circle-fill"></i>
                                                    <span>Experiență creată pentru dezvoltatori și echipe de proiect</span>
                                                </li>
                                            </ul>

                                            <Link to="/dezvoltator" className="selector-btn selector-btn-primary">
                                                Accesează pagina
                                                <i className="bi bi-arrow-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="selector-card">
                                        <div className="selector-card-inner">
                                            <div className="selector-card-top">
                                                <div className="selector-icon">
                                                    <i className="bi bi-house-heart"></i>
                                                </div>

                                                <div className="selector-chip">
                                                    <i className="bi bi-person-check"></i>
                                                    B2C
                                                </div>
                                            </div>

                                            <h3>Doresc să achiziționez o locuință</h3>

                                            <p>
                                                Vrei să plătești în siguranță pentru noua ta rezidență și să știi că banii tăi sunt protejați până când dezvoltatorul finalizează etapele promise.
                                            </p>

                                            <ul className="selector-list">
                                                <li>
                                                    <i className="bi bi-check-circle-fill"></i>
                                                    <span>Avans protejat într-un cont escrow securizat</span>
                                                </li>
                                                <li>
                                                    <i className="bi bi-check-circle-fill"></i>
                                                    <span>Deblocarea fondurilor după validarea etapelor de construcție</span>
                                                </li>
                                                <li>
                                                    <i className="bi bi-check-circle-fill"></i>
                                                    <span>Vizibilitate clară asupra fondurilor și progresului</span>
                                                </li>
                                                <li>
                                                    <i className="bi bi-check-circle-fill"></i>
                                                    <span>Proces simplu, transparent și orientat spre protecția ta</span>
                                                </li>
                                            </ul>

                                            <Link to="/cumparator" className="selector-btn selector-btn-secondary">
                                                Accesează pagina
                                                <i className="bi bi-arrow-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="selector-divider d-none d-lg-flex">SAU</div>
                        </div>

                        <div className="selector-footer-note">
                            Poți reveni oricând aici pentru a accesa și cealaltă experiență.
                        </div>
                    </div>
                </section>
            </main>

            <footer className="footer-simple">
                <div className="container">© FINTERMED — Toate drepturile rezervate</div>
            </footer>
        </div>
    );
}