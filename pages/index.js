import Head from "next/head";
import styles from "../styles/Home.module.css";
import Button from "../components/button";
import React, { useState, useRef, useEffect, useCallback } from "react";
import { useEmblaCarousel } from "embla-carousel/react";

export default function Home() {
    const [open, setOpen] = useState(false);

    const email = useRef();
    const [message, setMessage] = useState();

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [scrollSnaps, setScrollSnaps] = useState([]);

    const [chosen, setChosen] = useState();

    useEffect(() => {
        if (!emblaApi) return;
        setScrollSnaps(emblaApi.scrollSnapList());
    }, [emblaApi, setScrollSnaps]);
    return (
        <div className={styles.wrap}>
            <Head>
                <title>Frontend Mentor | Manage landing page</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className={styles.header}>
                <div className={styles.navigation}>
                    <div className={styles.logo}>
                        <img src="/images/logo.svg" alt="logo" />
                    </div>

                    <button
                        type="button"
                        name="button"
                        onClick={() => setOpen(!open)}
                        className={styles.hamburger}
                    >
                        {!open ? (
                            <img
                                src="/images/icon-hamburger.svg"
                                alt="hamburger"
                            />
                        ) : (
                            <img src="/images/icon-close.svg" alt="close" />
                        )}
                    </button>

                    {open ? (
                        <div className={styles.mobile}>
                            <a href="#">Pricing</a>
                            <a href="#"> Product</a>
                            <a href="#"> About Us</a>
                            <a href="#">Careers</a>
                            <a href="#"> Community</a>
                        </div>
                    ) : null}

                    <div className={styles.menu}>
                        <a href="#">Pricing</a>
                        <a href="#"> Product</a>
                        <a href="#"> About Us</a>
                        <a href="#">Careers</a>
                        <a href="#"> Community</a>
                    </div>
                    <div className={styles.top_button}>
                        <Button colour="orange" />
                    </div>
                </div>
                <div className={styles.container}>
                    <div className={styles.image}>
                        <img
                            src="images/illustration-intro.svg"
                            alt="illustration"
                        />
                    </div>

                    <div className={styles.intro}>
                        <h1>
                            Bring everyone together to build better products.
                        </h1>
                        <p>
                            Manage makes it simple for software teams to plan
                            day-to-day tasks while keeping the larger team goals
                            in view.
                        </p>

                        <Button colour="orange" />
                    </div>
                </div>
            </header>

            <section className={styles.info}>
                <div className={styles.col1}>
                    <div className={styles.box}>
                        <h2>What’s different about Manage?</h2>
                        <p>
                            Manage provides all the functionality your team
                            needs, without the complexity. Our software is
                            tailor-made for modern digital product teams.
                        </p>
                    </div>
                </div>

                <div className={styles.col2}>
                    <div className={styles.details}>
                        <div className={styles.number}>01</div>
                        <h3>Track company-wide progress</h3>
                    </div>
                    <p className={styles.text}>
                        See how your day-to-day tasks fit into the wider vision.
                        Go from tracking progress at the milestone level all the
                        way done to the smallest of details. Never lose sight of
                        the bigger picture again.
                    </p>
                    <div className={styles.details}>
                        <div className={styles.number}>02</div>
                        <h3>Advanced built-in reports</h3>
                    </div>
                    <p className={styles.text}>
                        Set internal delivery estimates and track progress
                        toward company goals. Our customisable dashboard helps
                        you build out the reports you need to keep key
                        stakeholders informed.
                    </p>
                    <div className={styles.details}>
                        <div className={styles.number}>03</div>
                        <h3>Everything you need in one place</h3>
                    </div>
                    <p className={styles.text}>
                        Everything you need in one place Stop jumping from one
                        service to another to communicate, store files, track
                        tasks and share documents. Manage offers an all-in-one
                        team productivity solution.
                    </p>
                </div>
            </section>

            <section className={styles.box_slide}>
                <h2>What they’ve said</h2>

                <div className={styles.viewportCss} ref={emblaRef}>
                    <div className={styles.containerCss}>
                        <div className={styles.slideCss}>
                            <div className={styles.slide}>
                                <img
                                    src="/images/avatar-anisha.png"
                                    alt="shanai"
                                    className={styles.picture}
                                />

                                <h4> Anisha Li</h4>
                                <p>
                                    “Manage has supercharged our team’s
                                    workflow. The ability to maintain visibility
                                    on larger milestones at all times keeps
                                    everyone motivated.”
                                </p>
                            </div>
                        </div>
                        <div className={styles.slideCss}>
                            <div className={styles.slide}>
                                <img
                                    src="/images/avatar-ali.png"
                                    alt="ali"
                                    className={styles.picture}
                                />

                                <h4>Ali Bravo</h4>
                                <p>
                                    “We have been able to cancel so many other
                                    subscriptions since using Manage. There is
                                    no more cross-channel confusion and everyone
                                    is much more focused.”
                                </p>
                            </div>
                        </div>

                        <div className={styles.slideCss}>
                            <div className={styles.slide}>
                                <img
                                    src="/images/avatar-richard.png"
                                    alt="ali"
                                    className={styles.picture}
                                />

                                <h4>Richard Watts</h4>
                                <p>
                                    “Manage allows us to provide structure and
                                    process. It keeps us organized and focused.
                                    I can’t stop recommending them to everyone I
                                    talk to!””
                                </p>
                            </div>
                        </div>

                        <div className={styles.slideCss}>
                            <div className={styles.slide}>
                                <img
                                    src="/images/avatar-shanai.png"
                                    alt="shanai"
                                    className={styles.picture}
                                />

                                <h4>Shanai Gough</h4>
                                <p>
                                    “Their software allows us to track, manage
                                    and collaborate on our projects from
                                    anywhere. It keeps the whole team in-sync
                                    without being intrusive.” ”
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.circle_wrap}>
                    <div className={styles.circle_box}>
                        {scrollSnaps.map((_, index) => (
                            <button
                                type="button"
                                title="button"
                                className={`${styles.circle} ${
                                    chosen === index ? styles.chosen : null
                                }`}
                                onClick={() => {
                                    emblaApi.scrollTo(index);
                                    setChosen(index);
                                }}
                            ></button>
                        ))}
                    </div>
                </div>

                <Button colour="orange" />
            </section>

            <section className={styles.simplify}>
                <div className={styles.simplify_box}>
                    <p>Simplify how your team works today.</p>
                    <Button colour="white" />
                </div>
            </section>

            <footer className={styles.footer}>
                <div className={styles.footer_wrap}>
                    <div
                        className={`${styles.footer_box} ${styles.footer_order}`}
                    >
                        <div className={styles.logo}>
                            <img src="/images/logo.svg" alt="logo" />
                        </div>
                        <div className={styles.social}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                            >
                                <path
                                    fill="#FFF"
                                    d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0z"
                                />
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="21"
                                height="20"
                            >
                                <path
                                    fill="#FFF"
                                    d="M10.333 0c-5.522 0-10 4.478-10 10 0 5.523 4.478 10 10 10 5.523 0 10-4.477 10-10 0-5.522-4.477-10-10-10zm3.701 14.077c-1.752.12-5.653.12-7.402 0C4.735 13.947 4.514 13.018 4.5 10c.014-3.024.237-3.947 2.132-4.077 1.749-.12 5.651-.12 7.402 0 1.898.13 2.118 1.059 2.133 4.077-.015 3.024-.238 3.947-2.133 4.077zM8.667 8.048l4.097 1.949-4.097 1.955V8.048z"
                                />
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="21"
                                height="18"
                            >
                                <path
                                    fill="#FFF"
                                    d="M20.667 2.797a8.192 8.192 0 01-2.357.646 4.11 4.11 0 001.804-2.27 8.22 8.22 0 01-2.606.996A4.096 4.096 0 0014.513.873c-2.649 0-4.595 2.472-3.997 5.038a11.648 11.648 0 01-8.457-4.287 4.109 4.109 0 001.27 5.478A4.086 4.086 0 011.47 6.59c-.045 1.901 1.317 3.68 3.29 4.075a4.113 4.113 0 01-1.853.07 4.106 4.106 0 003.834 2.85 8.25 8.25 0 01-6.075 1.7 11.616 11.616 0 006.29 1.843c7.618 0 11.922-6.434 11.662-12.205a8.354 8.354 0 002.048-2.124z"
                                />
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                            >
                                <path
                                    fill="#FFF"
                                    d="M10 0C4.478 0 0 4.477 0 10c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.182-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.545 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.331 1.781.745 2.281a.3.3 0 01.069.288l-.278 1.133c-.044.183-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.525-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.522 0 10-4.477 10-10S15.522 0 10 0z"
                                />
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="21"
                                height="20"
                            >
                                <path
                                    fill="#FFF"
                                    d="M10.333 1.802c2.67 0 2.987.01 4.042.059 2.71.123 3.976 1.409 4.1 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.058 4.042-.124 2.687-1.386 3.975-4.099 4.099-1.055.048-1.37.058-4.042.058-2.67 0-2.986-.01-4.04-.058-2.717-.124-3.976-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058zm0-1.802C7.618 0 7.278.012 6.211.06 2.579.227.56 2.242.394 5.877.345 6.944.334 7.284.334 10s.011 3.057.06 4.123c.166 3.632 2.181 5.65 5.816 5.817 1.068.048 1.408.06 4.123.06 2.716 0 3.057-.012 4.124-.06 3.628-.167 5.651-2.182 5.816-5.817.049-1.066.06-1.407.06-4.123s-.011-3.056-.06-4.122C20.11 2.249 18.093.228 14.458.06 13.39.01 13.049 0 10.333 0zm0 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.339-9.87a1.2 1.2 0 10-.001 2.4 1.2 1.2 0 000-2.4z"
                                />
                            </svg>
                        </div>
                    </div>

                    <div className={styles.contact_wrap}>
                        <div
                            className={`${styles.footer_box} ${styles.contact}`}
                        >
                            <p> Home</p>
                            <p> Pricing</p>
                            <p>Products</p>
                            <p>About Us</p>
                        </div>

                        <div
                            className={`${styles.footer_box} ${styles.contact}`}
                        >
                            <p> Careers</p>
                            <p> Community</p>
                            <p>Privacy Policy</p>
                        </div>
                    </div>
                    <div className={styles.footer_box}>
                        <form
                            onSubmit={e => {
                                const value = email.current.value;
                                const re = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
                                e.preventDefault();
                                console.log(email.current.value);
                                if (value === "") {
                                    return setMessage(
                                        "Please provide a valid mail"
                                    );
                                }
                                if (!value.match(re)) {
                                    return setMessage(
                                        "Please provide a valid mail"
                                    );
                                }
                                setMessage(undefined);
                            }}
                            noValidate
                            className={styles.form}
                        >
                            <input
                                type="email"
                                name="email"
                                ref={email}
                                placeholder=" Updates in your inbox…"
                                className={styles.email}
                            />
                            <button type="submit" className={styles.go}>
                                Go
                            </button>
                        </form>

                        {typeof message !== "undefined" ? (
                            <p className={styles.text_color}>{message}</p>
                        ) : null}

                        <p className={styles.copyright_desktop}>
                            Copyright 2020. All Rights Reserved
                        </p>
                    </div>
                </div>

                <p className={styles.copyright_mobile}>
                    Copyright 2020. All Rights Reserved
                </p>
            </footer>
        </div>
    );
}
