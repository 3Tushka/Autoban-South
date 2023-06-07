import React from 'react'
import './header.scss'
import { Navbar, News } from '../../components'

export const Header = () => {
    return (
        <>
            <section className='header'>
                <Navbar />
                <div className="header-box">
                    <div className="header-title">
                        <h3 className='header-h3'>
                            АВТОМАГІСТРАЛЬ-ПІВДЕНЬ:
                            БУДУЄМО УКРАЇНУ РАЗОМ!
                        </h3>
                    </div>
                    <div className="header-content">
                        <span>Компанія «Автомагістраль-Південь» є безумовним лідером українського ринку дорожнього будівництва, займаючи перше місце серед провідних компаній галузі. Ми беремо участь у найбільш масштабних інфраструктурних проєктах, ведемо діяльність у більшості регіонів країни, реалізуємо роботи будь-якого рівня складності.</span>
                    </div>
                    <div className="header-button">
                        <button className='details-btn btn-1'>
                            <svg>
                                <rect x="0" y="0" fill="none" width="100%" height="100%" />
                            </svg>
                            Детальніше
                        </button>
                    </div>
                </div>

                <News />
            </section>
        </>
    )
}
