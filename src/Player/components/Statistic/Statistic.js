import React from 'react'
import './Statistic.css'

const Statistic = () => {
    return (
        <div className='Statistic'>
            <strong className='Statistic__title'>Statistic</strong>
            <ul className="Statistic__list">
                <li className="Statistic__item">
                    <span className="Statistic_item-title">tracks:</span>
                    <span className="Statistic__item-count">653.200</span>
                </li>
                <li className="Statistic__item">
                    <span className="Statistic_item-title">videos:</span>
                    <span className="Statistic__item-count">9.600</span>
                </li>
                <li className="Statistic__item">
                    <span className="Statistic_item-title">users:</span>
                    <span className="Statistic__item-count">56.356</span>
                </li>
                <li className="Statistic__item">
                    <span className="Statistic_item-title">tracks listen:</span>
                    <span className="Statistic__item-count">2.867</span>
                </li>
            </ul>
        </div>
    )
}

export default Statistic