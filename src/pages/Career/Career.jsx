import React from 'react'
import Construction from '../../assets/images/construction-site.jpg'
import Carrer from '../../assets/images/carrer-img.jpg'
import { Footer, Navbar } from '../../components'
import './career.scss'

export const Career = () => {
    return (
        <section className='career'>
            <div className="career-bg">
                <Navbar />
                <div className="top-block">
                    <div className='career-title'><h2>Кар’єра</h2></div>
                </div>
            </div>
            <div className="career-box">
                <div className="left">
                    <div className="career-title">
                        <h2>
                            Автомагістраль-Південь найбільший роботодавець у галузі дорожнього будівництва
                        </h2>
                    </div>
                    <div className="career-content">
                        <span>
                            Кількість співробітників компанії на початок 2022 року досягла 6,5 тис.
                            За час війни понад 700 автомагістралівців були мобілізовані до Сил оборони України. Водночас компанія зберігає достатній кадровий потенціал для реалізації масштабних проєктів як в Україні, так і в інших країнах.
                        </span>
                    </div>
                </div>
                <div className="right">
                    <img src={Construction} alt="construction-site" />
                </div>
            </div>

            <div className="career-students">
                <div className="students-left">
                    <div className="students-title">
                        <h2>
                            Велика Родина «Автомагістраль-Південь»
                        </h2>
                    </div>
                    <div className="students-subtitle">
                        <span>
                            Компанія підтримує талановиту молодь, починає підготовку фахівців ще на рівні навчальних закладів
                        </span>
                    </div>
                </div>
                <div className="students-right">
                    <div className="students-content">
                        <div className="text">
                            <span> Компанія підтримує талановиту молодь, починає підготовку фахівців ще на рівні навчальних закладів
                                «Автомагістраль-Південь» співпрацює з Національним транспортним університетом, Харківським національним автомобільно-дорожнім університетом та іншими провідними українським навчальними закладами, які готують фахівців у галузі інфраструктурного будівництва.</span>

                            <span>З 2016 партнером «Автомагістраль-Південь» є однин із кращих автодорожніх навчальних закладів у країні - Барський коледж транспорту і будівництва НТУ, який знаходиться у Вінницькій області.</span>

                            <span>«Автомагістраль-Південь» запрошує до себе на практику четвертокурсників і випускників профільних навчальних закладів для навчання за програмою «Отримання професії».</span>
                        </div>
                    </div>
                    <div className="students-btn">
                        <span>Хочеш на стажування?</span>

                        <div className="students-button">
                            <button className='details-btn btn-1'>
                                <svg>
                                    <rect x="0" y="0" fill="none" width="100%" height="100%" />
                                </svg>
                                Заповни форму
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </section >
    )
}
