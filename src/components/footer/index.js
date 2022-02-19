import Icon from "../../static/icons"

const Footer = () => {
    return (
        <section className="footer">
            <div className="footer__container container">
                <div className="footer__top row d-flex">
                    <div className="footer__col col footer__nav">
                        <ul className="footer__menu menu-footer">
                            <li className="menu-footer__item">
                                <a href="#" className="menu-footer__link">Кухни</a>
                            </li>
                            <li className="menu-footer__item">
                                <a href="#" className="menu-footer__link">Шкафы</a>
                            </li>
                            <li className="menu-footer__item">
                                <a href="#" className="menu-footer__link">Техника</a>
                            </li>
                            <li className="menu-footer__item">
                                <a href="#" className="menu-footer__link">Мойки</a>
                            </li>
                            <li className="menu-footer__item">
                                <a href="#" className="menu-footer__link">Материалы</a>
                            </li>
                            <li className="menu-footer__item">
                                <a href="#" className="menu-footer__link">Процесс работы</a>
                            </li>
                            <li className="menu-footer__item">
                                <a href="#" className="menu-footer__link">Отзывы</a>
                            </li>
                            <li className="menu-footer__item">
                                <a href="#" className="menu-footer__link">Контакты</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__col col footer__connect">
                        <p className="footer__text">Вызов дизайнера и дизайн-проект бесплатно!</p>
                        <button type="button" className="footer__button">Консультация дизайнера</button>
                        <button type="button" className="footer__button">Обратный звонок</button>
                    </div>
                    <div className="footer__col col footer__main">
                        <a href="#" className="footer__logo logo">
                            <img src="" alt="" className="logo__image" />
                        </a>
                    </div>
                </div>
                <div className="footer__bottom row d-flex">
                    <div className="footer__col col">
                        <ul className="footer__social d-flex social">
                            <li className="soctial__item">
                                <Icon icon='vk' name='social__icon'/>
                            </li>
                            <li className="soctial__item">
                                <Icon icon='insta' name='social__icon'/>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__col col">
                        <a href="#" className="footer__policy policy">Политика конфиденциальности</a>
                    </div>
                    <div className="footer__col col">
                        <ul className="footer__paylist paylist">
                            <li className="paylist__item">
                                <img src="" alt="" className="paylist__image" />
                            </li>
                            <li className="paylist__item">
                                <img src="" alt="" className="paylist__image" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;