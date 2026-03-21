import React, { useRef, useState } from "react";

import emailjs from "@emailjs/browser";

export default function ContactFormSection({
                                               title = "Contact",
                                               titlePrefix = "Vrei să vezi",
                                               titleHighlight = "cum se aplică pe proiectul tău?",
                                               infoItems = [],
                                               buttonText = "Solicită demonstrație",
                                               successText = "Mesajul tău a fost trimis. Îți mulțumim!",
                                               errorText = "A apărut o eroare. Te rugăm să încerci din nou.",
                                               serviceId,
                                               templateId,
                                               publicKey,
                                               subjectDefaultValue = "Solicitare demonstrație FINTERMED",
                                               messagePlaceholder = "Spune-ne câteva detalii despre proiectul tău și obiectivele de finanțare / vânzare.",
                                           }) {
    const form = useRef(null);


    const [isSending, setIsSending] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const sendEmail = async (e) => {
        e.preventDefault();

        if (!form.current || isSending) return;

        setIsSending(true);
        setSuccessMessage("");
        setErrorMessage("");

        try {
            await emailjs.sendForm(serviceId, templateId, form.current, {
                publicKey,
            });

            setSuccessMessage(successText);
            form.current.reset();

        } catch (error) {
            console.error("EmailJS error:", error);
            setErrorMessage(errorText);
        } finally {
            setIsSending(false);
        }
    };

    return (
        <section id="contact" className="contact section">
            <div className="container section-title" data-aos="fade-up">
                <h2>{title}</h2>
                <p>
                    <span>{titlePrefix}</span>{" "}
                    <span className="description-title">{titleHighlight}</span>
                </p>
            </div>

            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div className="row gy-4">
                    <div className="col-lg-5">
                        <div className="info-wrap">
                            {infoItems.map((item, index) => (
                                <div
                                    key={`${item.title}-${index}`}
                                    className="info-item d-flex"
                                    data-aos="fade-up"
                                    data-aos-delay={item.delay || 200}
                                >
                                    <i className={`bi ${item.icon} flex-shrink-0`}></i>
                                    <div>
                                        <h3>{item.title}</h3>
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="col-lg-7">
                        <form
                            ref={form}
                            onSubmit={sendEmail}
                            className="php-email-form"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <div className="row gy-4">
                                <div className="col-md-6">
                                    <label htmlFor="name-field" className="pb-2">
                                        Nume
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name-field"
                                        className="form-control"
                                        required
                                    />
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
                                        defaultValue={subjectDefaultValue}
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
                                        placeholder={messagePlaceholder}
                                    ></textarea>
                                </div>

                                <div className="col-md-12 text-center">
                                    {isSending && <div className="loading d-block">Se trimite...</div>}
                                    {errorMessage && <div className="error-message d-block">{errorMessage}</div>}
                                    {successMessage && <div className="sent-message d-block">{successMessage}</div>}

                                    <button type="submit" disabled={isSending}>
                                        {isSending ? "Se trimite..." : buttonText}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}