import Image from "next/image";
import styles from "../styles/Hero.module.scss"
import { useState } from 'react';

const Hero = () => {

    const [value, setValue] = useState("6730 Luna Land North Rhiannonmouth");

    return (
        <div className={styles.wrapper}>

            <div className={styles.nav__wrapper}>
                <ul className={styles.menu__bar}>
                    <li className={styles.menu__item}><a href="#">About</a></li>
                    <li className={styles.menu__item}><a href="#">Contact</a></li>
                </ul>
                <div className={styles.logo}><a href="#">Camping.</a></div>
                <ul className={styles.menu__user}>
                    <li className={styles.menu__item}><a href="#">Sing In</a></li>
                    <li className={styles.menu__item}><a href="#">Sing Up</a></li>
                    <li className={styles.menu__item}><Image src="/img/search.png" alt="Search" height="20" width="20" /></li>
                </ul>
            </div>

            <div className={styles.hero__wrapper}>
                <div className={styles.hero__container}>
                    <h1 className={styles.hero__title}>Beautiful Places of England</h1>
                    <h2 className={styles.hero__subtitle}>Plan your vacation on the most beautiful places of England</h2>
                </div>
                <div className={styles.billboard__wrapper}>
                    <div className={styles.billboard__container}>
                        <p className={styles.billboard__next}>Up next</p>
                        <h2 className={styles.billboard__title}>Aerial View of Rock Cliffs</h2>
                        <div className={styles.next}><a href="#"><Image src="/img/next.png" alt="Min" height="14" width="43" /></a></div>
                    </div>
                    <div className={styles.billboard__background}><Image src="/img/andrew-ridley-min.png" alt="Min" height="400" width="270" /></div>
                </div>
            </div>

            <div className={styles.book__wrapper}>
                <div className={styles.book__title}>Book your vacation</div>
                <div className={styles.book__container}>
                    <form className={styles.book__form}>
                        <div className={styles.book__list__Accommodation}>
                            <div className={styles.book__list__wrapper}>
                                <Image className={styles.book__img} src="/img/home.png" alt="icon" height="21" width="21" />
                                <label className={styles.book__item__title}>Accommodation</label>
                                <select className={styles.book__list__item} value={value} onChange={(e) => setValue(e.target.value)}>
                                    <option value="6730 Luna Land North Rhiannonmouth">6730 Luna Land North Rhiannonmouth</option>
                                    <option value="6731 Luna Land North Rhiannonmouth">6731 Luna Land North Rhiannonmouth</option>
                                    <option value="6732 Luna Land North Rhiannonmouth">6732 Luna Land North Rhiannonmouth</option>
                                    <option value="6733 Luna Land North Rhiannonmouth">6733 Luna Land North Rhiannonmouth</option>
                                </select>
                            </div>
                        </div>
                        <div className={styles.book__list__Check}>
                            <div className={styles.book__list__wrapper}>
                                <div className={styles.check}>
                                    <Image src="/img/calendar.png" alt="icon" height="23" width="23" />
                                    <label className={styles.book__item__title}>Check-in</label>
                                    <ul className={styles.book__item}>19.06.2019</ul>
                                </div>
                                <div className={styles.check}>
                                    <Image src="" alt="" height="21" width="21" />
                                    <label className={styles.book__item__title__date}>Check-out</label>
                                    <ul className={styles.book__item}>19.06.2019</ul>
                                </div>
                            </div>
                        </div>
                        <div className={styles.book__list__Guests}>
                            <div className={styles.book__list__wrapper}>
                                <Image src="/img/guest.png" alt="icon" height="24" width="18" />
                                <label className={styles.book__item__title}>Guests</label>
                                <select className={styles.book__list__item}>
                                    <option value="1 Guest">1 Guest</option>
                                    <option value="2 Guest">2 Guest</option>
                                    <option value="3 Guest">3 Guest</option>
                                    <option value="4 Guest">4 Guest</option>
                                </select>
                            </div>
                        </div>
                    </form>
                    <div className={styles.book__submit}>
                        <button className={styles.btn}>Search</button>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default Hero;
