import { useEffect, useState } from "react";
import "./Main.css";
import "./Dezvoltator.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Logo from "../assets/img/logo.svg";
import heroBg from "../assets/img/test.png";

export default function Dezvoltator() {
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            easing: "ease-in-out",
        });
    }, []);

    const closeMobileMenu = () => setMobileOpen(false);

    const navLinks = [
        { href: "#hero", label: "Acasă" },
        { href: "#about", label: "Soluția" },
        { href: "#services", label: "Servicii" },
        { href: "#beneficii", label: "Beneficii" },
        { href: "#process", label: "Cum funcționează" },
        { href: "#contact", label: "Contact" },
    ];

    const heroBadges = [
        { icon: "bi-shield-check", text: "Escrow digital" },
        { icon: "bi-bank", text: "Standarde bancare europene" },
        { icon: "bi-cash-stack", text: "Cash-flow predictibil" },
        { icon: "bi-file-earmark-check", text: "KYC & compliance" },
    ];

    const featuredPoints = [
        {
            icon: "bi-bank",
            title: "Siguranță bancară",
            text: "Fondurile clienților sunt protejate într-o instituție de plată reglementată, nu sunt deținute de platformă.",
            delay: 100,
        },
        {
            icon: "bi-cash-coin",
            title: "Cash-flow predictibil",
            text: "Accesezi fondurile etapizat, pe măsura progresului validat al lucrărilor.",
            delay: 200,
        },
        {
            icon: "bi-file-earmark-check",
            title: "Conformitate integrată",
            text: "Automatizezi cerințele de transparență, limitare a avansurilor și protecție a fondurilor.",
            delay: 300,
        },
        {
            icon: "bi-diagram-3",
            title: "Administrare centralizată",
            text: "Toate conturile, documentele și tranzacțiile sunt organizate într-o singură interfață digitală.",
            delay: 400,
        },
    ];

    const problems = [
        {
            strong: "Vânzări blocate până la recepție:",
            text: " reticența cumpărătorilor de a investi în stadii incipiente transformă proiectele imobiliare în active ilichide până la finalizare.",
        },
        {
            strong: "Ciclul de numerar ineficient:",
            text: " dezvoltatorii sunt forțați să caute clienți abia după terminarea construcției, ratând oportunitatea de finanțare directă din avansuri în timpul șantierului.",
        },
        {
            strong: "Capital imobilizat:",
            text: " incapacitatea de a accesa fondurile clienților afectează ritmul de execuție și presiunea pe finanțare.",
        },
        {
            strong: "Complexitate legislativă:",
            text: " noile reglementări privind limitarea avansurilor și protecția fondurilor impun o gestiune financiară transparentă.",
        },
        {
            strong: "Birocrație administrativă:",
            text: " gestionarea fragmentată a conturilor și documentelor justificative pentru fiecare proiect consumă timp și resurse.",
        },
    ];

    const solutions = [
        {
            strong: "Deblocarea vânzărilor „pe plan”:",
            text: " cumpărătorii investesc în siguranță încă din faza de proiect, știind că fondurile sunt protejate și eliberate doar pe măsura execuției reale.",
        },
        {
            strong: "Eficientizarea ciclului de numerar:",
            text: " avansurile pot fi accesate etapizat imediat ce pragurile tehnice sunt validate.",
        },
        {
            strong: "Flux de numerar predictibil:",
            text: " fiecare etapă confirmată declanșează plata, oferind vizibilitate și disciplină financiară.",
        },
        {
            strong: "Conformitate nativă:",
            text: " platforma este gândită pentru transparență, segregarea fondurilor și operare într-un cadru conform.",
        },
        {
            strong: "Administrare digitalizată:",
            text: " fiecare proiect beneficiază de propriul ecosistem financiar într-o singură interfață.",
        },
    ];

    const metrics = [
        {
            icon: "bi-house-check",
            title: "Proiecte mai lichide",
            text: "Transformi interesul cumpărătorilor în capital securizat încă din faza de proiect.",
            delay: 100,
        },
        {
            icon: "bi-arrow-repeat",
            title: "Finanțare etapizată",
            text: "Înlocuiești presiunea finanțării clasice cu acces controlat la fondurile clienților.",
            delay: 200,
        },
        {
            icon: "bi-clipboard-data",
            title: "Control și trasabilitate",
            text: "Ai o evidență clară a plăților, documentelor și validărilor pentru fiecare proiect.",
            delay: 300,
        },
    ];

    const services = [
        {
            icon: "bi-safe2",
            title: "Managementul tranșelor prin escrow",
            text: "Securizarea plăților clienților într-un mediu reglementat, eliminând riscul de neplată și reducând fricțiunea din procesul de vânzare.",
            delay: 100,
        },
        {
            icon: "bi-cash-stack",
            title: "Automatizarea fluxului de numerar",
            text: "Eliberarea fondurilor către contul dezvoltatorului imediat după validarea tehnică a stadiului lucrărilor, conform graficului stabilit.",
            delay: 200,
        },
        {
            icon: "bi-person-check",
            title: "Digital KYC & Compliance",
            text: "Externalizezi birocrația: verificarea identității și a sursei fondurilor cumpărătorilor, în acord cu normele europene de conformitate.",
            delay: 300,
        },
    ];

    const benefits = [
        {
            icon: "bi-graph-up-arrow",
            title: "Accelerarea ciclului de vânzare",
            text: "Un model bazat pe încredere îți permite să atragi capital de la clienți încă din primele faze ale șantierului și să reduci dependența de vânzarea exclusivă la finalizare.",
            delay: 100,
        },
        {
            icon: "bi-bank2",
            title: "Siguranță de nivel bancar",
            text: "Fondurile sunt protejate într-o instituție de plată reglementată, nu sunt păstrate de platformă, oferind un cadru de lucru credibil pentru dezvoltator și cumpărător.",
            delay: 200,
        },
        {
            icon: "bi-calendar-check",
            title: "Predictibilitatea fluxului de numerar",
            text: "Fondurile sunt blocate în escrow și eliberate imediat după confirmarea etapei, reducând întârzierile și oferind o viziune clară asupra încasărilor.",
            delay: 300,
        },
        {
            icon: "bi-patch-check",
            title: "Expertiză certificată",
            text: "Modelul de business este conceput cu rigoare de profesioniști cu experiență în Investment Banking și managementul riscului.",
            delay: 400,
        },
    ];

    const processSteps = [
        {
            icon: "bi-sliders",
            title: "1. Activarea proiectului",
            text: "Configurarea structurii de plăți și a indicatorilor de performanță (milestones) în platformă, pentru fiecare proiect rezidențial.",
            delay: 100,
        },
        {
            icon: "bi-shield-lock",
            title: "2. Securizarea fondurilor",
            text: "Colectarea avansurilor în conturi escrow individuale, protejate până la îndeplinirea condițiilor contractuale și a etapelor definite.",
            delay: 200,
        },
        {
            icon: "bi-arrow-left-right",
            title: "3. Eliberarea pe etape",
            text: "Validarea progresului în șantier și transferul automat al fondurilor către dezvoltator, conform graficului de execuție.",
            delay: 300,
        },
    ];

    return (
        <div className="index-page dezvoltator-page">
            <header id="header" className="header sticky-top">
                <div className="branding d-flex align-items-center">
                    <div className="container position-relative d-flex align-items-center justify-content-between">
                        <a href="/dezvoltator" className="logo d-flex align-items-center text-decoration-none">
                            <img src={Logo}  alt="FINTERMED Logo" />
                            <h1 className="sitename">FINTERMED</h1>
                        </a>

                        <nav id="navmenu" className={`navmenu ${mobileOpen ? "mobile-open" : ""}`}>
                            <ul>
                                {navLinks.map((link) => (
                                    <li key={link.href}>
                                        <a
                                            href={link.href}
                                            className={link.href === "#hero" ? "active" : ""}
                                            onClick={closeMobileMenu}
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>

                            <button
                                type="button"
                                className="mobile-nav-toggle d-xl-none"
                                aria-label="Toggle navigation"
                                onClick={() => setMobileOpen((prev) => !prev)}
                            >
                                <i className={`bi ${mobileOpen ? "bi-x" : "bi-list"}`}></i>
                            </button>
                        </nav>
                    </div>
                </div>
            </header>

            <main className="main">
                <section id="hero" className="hero section light-background" style={{ backgroundImage: `url(${heroBg})`}}>
                    <div className="container">
                        <div className="row gy-4 align-items-center">
                            <div className="col-lg-8 d-flex flex-column justify-content-center" data-aos="zoom-out">
                                <h1>
                                    Accelerează vânzările proiectelor rezidențiale{" "}
                                    <span>încă din stadiul de proiect</span>
                                </h1>
                                <p>
                                    Accelerează vânzările prin eliminarea barierelor de încredere și
                                    asigură un cash-flow predictibil prin securizarea tranșelor de plată,
                                    la standarde bancare europene.
                                </p>

                                <div className="d-flex flex-wrap">
                                    <a href="#contact" className="btn-get-started">
                                        Solicită o demonstrație
                                    </a>
                                </div>

                                <div className="hero-badges">
                                    {heroBadges.map((badge) => (
                                        <div key={badge.text} className="hero-badge">
                                            <i className={`bi ${badge.icon} me-2`}></i>
                                            {badge.text}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="featured-services" className="featured-services section">
                    <div className="container">
                        <div className="row gy-4">
                            {featuredPoints.map((item) => (
                                <div
                                    key={item.title}
                                    className="col-xl-3 col-md-6 d-flex"
                                    data-aos="fade-up"
                                    data-aos-delay={item.delay}
                                >
                                    <div className="service-item position-relative">
                                        <div className="icon">
                                            <i className={`bi ${item.icon} icon`}></i>
                                        </div>
                                        <h4>{item.title}</h4>
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="about" className="about section light-background">
                    <div className="container section-title" data-aos="fade-up">
                        <h2>Soluția</h2>
                        <p>
                            <span>De la capital imobilizat</span>{" "}
                            <span className="description-title">la lichiditate garantată</span>
                        </p>
                        <p className="section-subcopy mt-3">
                            FINTERMED transformă conformitatea legală dintr-o barieră administrativă
                            într-un motor de vânzări și lichiditate.
                        </p>
                    </div>

                    <div className="container">
                        <div className="row gy-4 mb-5">
                            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                                <div className="problem-card">
                                    <div className="icon">
                                        <i className="bi bi-exclamation-triangle"></i>
                                    </div>
                                    <h3>Blocajele financiare ale unui șantier</h3>
                                    <ul className="mt-4">
                                        {problems.map((item, index) => (
                                            <li key={item.strong} className={index < problems.length - 1 ? "mb-3" : "mb-0"}>
                                                <strong>{item.strong}</strong>
                                                {item.text}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                                <div className="solution-card">
                                    <div className="icon">
                                        <i className="bi bi-shield-lock"></i>
                                    </div>
                                    <h3>FINTERMED: deblocarea vânzărilor prin escrow digital</h3>
                                    <p className="mt-3">
                                        FINTERMED elimină barierele de încredere și transformă proiectele
                                        rezidențiale în active lichide încă din faza de proiect, printr-un
                                        mecanism digital de escrow, plăți etapizate și conformitate integrată.
                                    </p>
                                    <ul className="mt-4">
                                        {solutions.map((item, index) => (
                                            <li key={item.strong} className={index < solutions.length - 1 ? "mb-3" : "mb-0"}>
                                                <strong>{item.strong}</strong>
                                                {item.text}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="row gy-4">
                            {metrics.map((item) => (
                                <div
                                    key={item.title}
                                    className="col-lg-4 col-md-6"
                                    data-aos="fade-up"
                                    data-aos-delay={item.delay}
                                >
                                    <div className="metric-box">
                                        <i className={`bi ${item.icon}`}></i>
                                        <h4>{item.title}</h4>
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="services" className="services section">
                    <div className="container section-title" data-aos="fade-up">
                        <h2>Servicii</h2>
                        <p>
                            <span>Ce oferă</span>{" "}
                            <span className="description-title">FINTERMED</span>
                        </p>
                    </div>

                    <div className="container">
                        <div className="row gy-4">
                            {services.map((item) => (
                                <div
                                    key={item.title}
                                    className="col-lg-4 col-md-6"
                                    data-aos="fade-up"
                                    data-aos-delay={item.delay}
                                >
                                    <div className="service-item position-relative h-100">
                                        <div className="icon">
                                            <i className={`bi ${item.icon}`}></i>
                                        </div>
                                        <h3>{item.title}</h3>
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="beneficii" className="section light-background">
                    <div className="container section-title" data-aos="fade-up">
                        <h2>Beneficii</h2>
                        <p>
                            <span>Impact direct</span>{" "}
                            <span className="description-title">asupra business-ului tău</span>
                        </p>
                    </div>

                    <div className="container">
                        <div className="row gy-4">
                            {benefits.map((item) => (
                                <div
                                    key={item.title}
                                    className="col-lg-6"
                                    data-aos="fade-up"
                                    data-aos-delay={item.delay}
                                >
                                    <div className="benefit-card">
                                        <div className="icon">
                                            <i className={`bi ${item.icon}`}></i>
                                        </div>
                                        <h3>{item.title}</h3>
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="process" className="section">
                    <div className="container section-title" data-aos="fade-up">
                        <h2>Cum funcționează</h2>
                        <p>
                            <span>Procesul tehnologic</span>{" "}
                            <span className="description-title">în 3 pași</span>
                        </p>
                    </div>

                    <div className="container">
                        <div className="row gy-4">
                            {processSteps.map((item) => (
                                <div
                                    key={item.title}
                                    className="col-lg-4 col-md-6"
                                    data-aos="fade-up"
                                    data-aos-delay={item.delay}
                                >
                                    <div className="process-card">
                                        <div className="icon">
                                            <i className={`bi ${item.icon}`}></i>
                                        </div>
                                        <h3>{item.title}</h3>
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="cta" className="section light-background">
                    <div className="container" data-aos="fade-up">
                        <div className="cta-panel text-center">
                            <h3>Transformă conformitatea legală într-un motor de vânzări și lichiditate</h3>
                            <p className="mb-0">
                                Programează o discuție și vezi cum poate FINTERMED să deblocheze
                                vânzările proiectelor tale încă din faza de proiect.
                            </p>
                        </div>
                    </div>
                </section>

                <section id="contact" className="contact section">
                    <div className="container section-title" data-aos="fade-up">
                        <h2>Contact</h2>
                        <p>
                            <span>Vrei să vezi</span>{" "}
                            <span className="description-title">cum se aplică pe proiectul tău?</span>
                        </p>
                    </div>

                    <div className="container" data-aos="fade-up" data-aos-delay="100">
                        <div className="row gy-4">
                            <div className="col-lg-5">
                                <div className="info-wrap">
                                    <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
                                        <i className="bi bi-building flex-shrink-0"></i>
                                        <div>
                                            <h3>Clienții noștri</h3>
                                            <p>Dezvoltatori imobiliari și echipe de management de proiect rezidențial</p>
                                        </div>
                                    </div>

                                    <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                                        <i className="bi bi-envelope flex-shrink-0"></i>
                                        <div>
                                            <h3>Email</h3>
                                            <p>contact@fintermed.com</p>
                                        </div>
                                    </div>

                                    <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="500">
                                        <i className="bi bi-shield-check flex-shrink-0"></i>
                                        <div>
                                            <h3>Obiectiv</h3>
                                            <p>
                                                Deblocarea vânzărilor, securizarea fondurilor și predictibilitate
                                                financiară pe durata șantierului.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-7">
                                <form className="php-email-form" data-aos="fade-up" data-aos-delay="200">
                                    <div className="row gy-4">
                                        <div className="col-md-6">
                                            <label htmlFor="name-field" className="pb-2">
                                                Nume
                                            </label>
                                            <input type="text" name="name" id="name-field" className="form-control" required />
                                        </div>

                                        <div className="col-md-6">
                                            <label htmlFor="email-field" className="pb-2">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                name="email"
                                                id="email-field"
                                                required
                                            />
                                        </div>

                                        <div className="col-md-12">
                                            <label htmlFor="company-field" className="pb-2">
                                                Companie / Proiect
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="company"
                                                id="company-field"
                                                required
                                            />
                                        </div>

                                        <div className="col-md-12">
                                            <label htmlFor="subject-field" className="pb-2">
                                                Subiect
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="subject"
                                                id="subject-field"
                                                defaultValue="Solicitare demonstrație FINTERMED"
                                                required
                                            />
                                        </div>

                                        <div className="col-md-12">
                                            <label htmlFor="message-field" className="pb-2">
                                                Mesaj
                                            </label>
                                            <textarea
                                                className="form-control"
                                                name="message"
                                                rows="8"
                                                id="message-field"
                                                required
                                                placeholder="Spune-ne câteva detalii despre proiectul tău și obiectivele de finanțare / vânzare."
                                            ></textarea>
                                        </div>

                                        <div className="col-md-12 text-center">
                                            <div className="loading">Se trimite...</div>
                                            <div className="error-message"></div>
                                            <div className="sent-message">
                                                Mesajul tău a fost trimis. Îți mulțumim!
                                            </div>

                                            <button type="submit">Solicită demonstrație</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer id="footer" className="footer">
                <div className="container footer-top">
                    <div className="row gy-4">
                        <div className="col-lg-5 col-md-6 footer-about">
                            <a href="/dezvoltator" className="d-flex align-items-center text-decoration-none">
                                <span className="sitename">FINTERMED</span>
                            </a>
                            <div className="footer-contact pt-3">
                                <p>Soluții digitale pentru deblocarea vânzărilor în proiecte rezidențiale</p>
                                <p>
                                    <strong>Email:</strong> <span>contact@fintermed.com</span>
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-3 footer-links">
                            <h4>Navigare</h4>
                            <ul>
                                <li>
                                    <i className="bi bi-chevron-right"></i> <a href="#hero">Acasă</a>
                                </li>
                                <li>
                                    <i className="bi bi-chevron-right"></i> <a href="#about">Soluția</a>
                                </li>
                                <li>
                                    <i className="bi bi-chevron-right"></i> <a href="#services">Servicii</a>
                                </li>
                                <li>
                                    <i className="bi bi-chevron-right"></i> <a href="#contact">Contact</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <h4>Mesaj cheie</h4>
                            <p>
                                FINTERMED transformă conformitatea legală dintr-o obligație operațională
                                într-un instrument de încredere, vânzare și lichiditate pentru
                                dezvoltatorii imobiliari.
                            </p>
                            <div className="social-links d-flex">
                                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                                    <i className="bi bi-linkedin"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container copyright text-center mt-4">
                    <p>
                        © <span>Copyright</span> <strong className="px-1 sitename">FINTERMED</strong>{" "}
                        <span>All Rights Reserved</span>
                    </p>
                </div>
            </footer>

            <a href="#hero" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center">
                <i className="bi bi-arrow-up-short"></i>
            </a>
        </div>
    );
}