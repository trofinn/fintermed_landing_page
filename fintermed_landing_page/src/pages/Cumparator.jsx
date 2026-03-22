import { useEffect, useState } from "react";
import "./Main.css";
import "./Cumparator.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Logo from "../assets/img/logo.svg";
import heroBg from "../assets/img/test.png";
import ContactFormSection from "./ContactFormSection.jsx";


export default function Cumparator() {
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
        { href: "#about", label: "Protecția ta" },
        { href: "#services", label: "Servicii" },
        { href: "#beneficii", label: "Beneficii" },
        { href: "#process", label: "Cum funcționează" },
        { href: "#contact", label: "Contact" },
    ];

    const heroBadges = [
        { icon: "bi-shield-check", text: "Fonduri protejate" },
        { icon: "bi-bank", text: "Escrow de tip bancar" },
        { icon: "bi-house-check", text: "Plată după verificare" },
        { icon: "bi-phone", text: "Transparență digitală" },
    ];

    const featuredPoints = [
        {
            icon: "bi-wallet2",
            title: "Avans protejat",
            text: "Banii tăi nu ajung direct la dezvoltator, ci rămân într-un cont escrow securizat.",
            delay: 100,
        },
        {
            icon: "bi-clipboard-check",
            title: "Etape verificate",
            text: "Fondurile sunt eliberate doar după confirmarea oficială a progresului lucrărilor.",
            delay: 200,
        },
        {
            icon: "bi-eye",
            title: "Control total",
            text: "Poți vedea în timp real statusul plăților și al etapelor de construcție.",
            delay: 300,
        },
        {
            icon: "bi-file-earmark-check",
            title: "Protecție legală",
            text: "Procesul respectă standarde de conformitate și protecție a cumpărătorului.",
            delay: 400,
        },
    ];

    const buyerProblems = [
        {
            strong: "Promisiuni fără acoperire în șantier:",
            text: " există riscul ca dezvoltatorul să încaseze banii, dar construcția să rămână blocată într-un stadiu incipient.",
        },
        {
            strong: "Lipsa de control:",
            text: " după plata avansului, este dificil să știi dacă lucrările avansează real și conform promisiunilor.",
        },
        {
            strong: "Birocrația și clauzele complexe:",
            text: " nu este ușor să verifici dacă dezvoltatorul respectă noile reguli de protecție a cumpărătorilor.",
        },
    ];

    const buyerSolutions = [
        {
            strong: "Protecția integrală a avansului:",
            text: " fondurile tale sunt păstrate într-un cont de tip escrow, sub supravegherea unei instituții financiare reglementate.",
        },
        {
            strong: "Plată doar pentru performanță:",
            text: " dezvoltatorul încasează banii numai atunci când finalizează etapa promisă.",
        },
        {
            strong: "Transparență 100%:",
            text: " ai acces la o platformă digitală unde vezi statusul fondurilor și confirmarea fiecărei etape finalizate.",
        },
    ];

    const metrics = [
        {
            icon: "bi-lock",
            title: "Banii rămân protejați",
            text: "Avansul tău nu poate fi folosit liber înainte ca dezvoltatorul să livreze progres real.",
            delay: 100,
        },
        {
            icon: "bi-bell",
            title: "Ești informat constant",
            text: "Primești confirmări și actualizări pe parcursul procesului, fără să urmărești singur șantierul.",
            delay: 200,
        },
        {
            icon: "bi-check2-square",
            title: "Cumperi cu mai multă încredere",
            text: "Achiziția pe plan devine mai clară, mai controlabilă și mult mai sigură pentru tine.",
            delay: 300,
        },
    ];

    const services = [
        {
            icon: "bi-wallet2",
            title: "Portofel digital escrow",
            text: "Un spațiu sigur unde fondurile tale sunt protejate legal până la livrarea locuinței și validarea etapelor de construcție.",
            delay: 100,
        },
        {
            icon: "bi-buildings",
            title: "Monitorizarea digitală a șantierului",
            text: "Primești notificări oficiale de fiecare dată când o etapă este finalizată și plătită, având control total asupra procesului.",
            delay: 200,
        },
        {
            icon: "bi-person-vcard",
            title: "Verificare identitate (KYC)",
            text: "Un proces rapid și sigur de validare a documentelor, conform standardelor bancare europene, fără drumuri la bancă.",
            delay: 300,
        },
    ];

    const benefits = [
        {
            icon: "bi-shield-fill-check",
            title: "Risc zero de deturnare a fondurilor",
            text: "Banii tăi nu pot fi folosiți de dezvoltator pentru a acoperi probleme financiare din alte proiecte sau pentru alte scopuri decât construcția locuinței tale.",
            delay: 100,
        },
        {
            icon: "bi-file-earmark-lock2",
            title: "Conformitate legală garantată",
            text: "FINTERMED aplică automat regulile de protecție a cumpărătorilor și creează un cadru mai sigur în fața riscurilor juridice și financiare.",
            delay: 200,
        },
        {
            icon: "bi-eye-fill",
            title: "Vizibilitate completă",
            text: "Vezi clar unde sunt fondurile tale, în ce stadiu este construcția și când se face fiecare plată către dezvoltator.",
            delay: 300,
        },
        {
            icon: "bi-house-heart",
            title: "Mai multă încredere în decizia de cumpărare",
            text: "Poți cumpăra o locuință în stadiu de proiect cu mai multă liniște, știind că banii tăi sunt protejați la fiecare pas.",
            delay: 400,
        },
    ];

    const processSteps = [
        {
            icon: "bi-pencil-square",
            title: "1. Semnezi și depui",
            text: "Semnezi contractul de rezervare și depui avansul în contul tău securizat FINTERMED.",
            delay: 100,
        },
        {
            icon: "bi-search",
            title: "2. Noi verificăm",
            text: "Dezvoltatorul raportează finalizarea etapelor, platforma validează progresul",
            delay: 200,
        },
        {
            icon: "bi-arrow-left-right",
            title: "3. Banii se eliberează",
            text: "Doar după confirmarea etapei, suma corespunzătoare este transferată dezvoltatorului, iar tu ești informat la fiecare pas.",
            delay: 300,
        },
    ];

    return (
        <div className="index-page cumparator-page">
            <header id="header" className="header sticky-top">
                <div className="branding d-flex align-items-center">
                    <div className="container position-relative d-flex align-items-center justify-content-between">
                        <a href="/cumparator" className="logo d-flex align-items-center text-decoration-none">
                            <img src={Logo} alt="FINTERMED Logo" />
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
                <section id="hero" className="hero section light-background" style={{ backgroundImage: `url(${heroBg})` }}>
                    <div className="container">
                        <div className="row gy-4 align-items-center">
                            <div className="col-lg-8 d-flex flex-column justify-content-center" data-aos="zoom-out">
                                <h1>
                                    Plătește în siguranță pentru noua ta casă.{" "}
                                    <span>Banii tăi sunt protejați până la finalizarea construcției.</span>
                                </h1>

                                <p>
                                    FINTERMED securizează plățile tale prin conturi escrow de tip bancar.
                                    Fondurile sunt eliberate către dezvoltator doar după ce fiecare etapă de
                                    construcție este verificată și confirmată de către noi.
                                </p>

                                <div className="d-flex flex-wrap">
                                    <a href="#contact" className="btn-get-started">
                                        Solicită informații
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
                        <h2>Protecția ta</h2>
                        <p>
                            <span>De la nesiguranța achiziției pe plan</span>{" "}
                            <span className="description-title">la control și protecție reală</span>
                        </p>
                        <p
                            className="section-subcopy mt-3"
                            style={{ fontSize: "25px" }}
                        >
                            FINTERMED transformă incertitudinea achiziției pe plan în siguranța
                            unei investiții protejate. Tu alegi locuința, noi avem grijă de banii tăi.
                        </p>
                    </div>

                    <div className="container">
                        <div className="row gy-4 mb-5">
                            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                                <div className="problem-card saas-card">
                                    <div className="card-head">
                                        <div className="icon card-icon">
                                            <i className="bi bi-exclamation-triangle"></i>
                                        </div>

                                        <div className="card-head-content">
                                            <h3>Temerile reale ale cumpărătorului</h3>

                                        </div>
                                    </div>

                                    <ul className="card-list">
                                        {buyerProblems.map((item, index) => (
                                            <li
                                                key={item.strong}
                                                className={index < buyerProblems.length - 1 ? "mb-3" : "mb-0"}
                                            >
                                                <strong>{item.strong}</strong>
                                                {item.text}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                                <div className="solution-card saas-card">
                                    <div className="card-head">
                                        <div className="icon card-icon">
                                            <i className="bi bi-shield-lock"></i>
                                        </div>

                                        <div className="card-head-content">
                                            <h3>Banii tăi, sub protecția ta</h3>
                                        </div>
                                    </div>

                                    <ul className="card-list">
                                        {buyerSolutions.map((item, index) => (
                                            <li
                                                key={item.strong}
                                                className={index < buyerSolutions.length - 1 ? "mb-3" : "mb-0"}
                                            >
                                                <strong>{item.strong}</strong>
                                                {item.text}
                                            </li>
                                        ))}
                                    </ul>

                                    <p className="card-summary">
                                        FINTERMED protejează avansul tău printr-un mecanism de escrow digital
                                        și eliberează fondurile doar când dezvoltatorul demonstrează că etapa
                                        promisă este finalizată.
                                    </p>
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
                            <span>Ce îți oferă</span>{" "}
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
                            <span className="description-title">pentru cumpărător</span>
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
                                    <div className="benefit-card saas-card">

                                        {/* Header: icon + title */}
                                        <div className="card-head-inline">
                                            <div className="icon card-icon">
                                                <i className={`bi ${item.icon}`}></i>
                                            </div>

                                            <h3 className="mb-0">{item.title}</h3>
                                        </div>

                                        {/* Content */}
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
                            <span>Procesul simplu</span>{" "}
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
                                    <div className="process-card saas-card">

                                        {/* Header: icon + title */}
                                        <div className="card-head-inline">
                                            <div className="icon card-icon">
                                                <i className={`bi ${item.icon}`}></i>
                                            </div>

                                            <h3 className="mb-0">{item.title}</h3>
                                        </div>

                                        {/* Content */}
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
                            <h3>Tu alegi locuința, noi avem grijă de banii tăi.</h3>
                            <p className="mb-0">
                                Află cum te poate ajuta FINTERMED să cumperi mai sigur o locuință
                                în stadiu de proiect.
                            </p>
                        </div>
                    </div>
                </section>

                <ContactFormSection
                    title="Contact"
                    titlePrefix="Vrei să înțelegi"
                    titleHighlight="cum îți sunt protejați banii?"
                    infoItems={[
                        {
                            icon: "bi-person-heart",
                            title: "Pentru cine este",
                            text: "Cumpărători care rezervă sau achiziționează locuințe în faza de proiect sau în timpul construcției.",
                            delay: 200,
                        },
                        {
                            icon: "bi-envelope",
                            title: "Email",
                            text: "contact@fintermed.com",
                            delay: 400,
                        },
                        {
                            icon: "bi-shield-check",
                            title: "Obiectiv",
                            text: "Să cumperi o locuință cu mai multă încredere, control și protecție asupra banilor tăi.",
                            delay: 500,
                        },
                    ]}
                    buttonText="Trimite solicitarea"
                    successText="Mesajul tău a fost trimis. Îți mulțumim!"
                    errorText="A apărut o eroare. Te rugăm să încerci din nou."
                    serviceId= "service_iqa1tay"
                    templateId="template_7tzk2yg"
                    publicKey="9rKI7F8Sb1XG3u16T"
                    subjectDefaultValue="Solicitare informații protecție cumpărător FINTERMED"
                    messagePlaceholder="Spune-ne la ce proiect ești interesat și ce vrei să afli despre protecția avansului tău."
                />
            </main>

            <footer id="footer" className="footer">

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