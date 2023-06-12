import React from 'react'
import { Link } from "react-router-dom"
import CroppedLogo from '../../assets/cropped-logo.png'
import "./footer.scss"

export const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer-wrapp">
                    <div className="footer-top">
                        <div className="footer-info">
                            <span className="footer-logo">
                                <a href="/"><img src={CroppedLogo} alt="footer-logo" /></a>
                            </span>
                            <span className="footer-number">
                                +38 (048) 728 95 83
                            </span>
                            <div className="footer-mail">
                                <a href="office@automagistral.com.ua">office@automagistral.com.ua</a>
                            </div>
                            <span className="footer-info-address">
                                <pre>
                                    65078, Україна, м. Одеса <br />
                                    вул. Романа Кармена 21
                                </pre>
                            </span>
                        </div>

                        <div className="footer-col">
                            <div className="footer-col-head">
                                <span><Link to="/About">Про компанію</Link></span>
                            </div>
                            <ul className="footer-links">
                                <li><Link to="/Career">Кар’єра</Link></li>
                                <li><Link to="/History">Істоія компанії</Link></li>
                                <li><Link to="/Projects">Проекти</Link></li>
                                <li><Link to="/Team">Команда</Link></li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <div className="footer-col-head">
                                <Link to="/Doing">Сфери діяльності</Link>
                            </div>
                            <ul className="footer-links">
                                <li><Link to="/Designing">Технології</Link></li>
                                <li><Link to="/Building">Будівництво та експлуатація</Link></li>
                                <li><Link to="/Production">Виробництво</Link></li>
                                <li><Link to="/Technique">Техніка</Link></li>
                                <li><Link to="/Quality-standarts">Стандарти якості</Link></li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <div className="footer-col-head">
                                <Link to="/Presscenter">Прес центр</Link>
                            </div>
                            <ul className="footer-links">
                                <li><Link to="/News">Новини</Link></li>
                                <li><Link to="/ForMedia">Для ЗМІ</Link></li>
                                <li><Link to="/Media">Медіа</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer-bottom">

                    </div>
                </div>
            </div >
        </>
    )
}
