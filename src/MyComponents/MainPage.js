import React from 'react'
import "./Mainpage.css"
import Weather from "../Weather.json"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

export const MainPage = () => {
    return (
        <div className='full'>
            <div className='m-full'>
                <div className='f-half'>
                    <div className='uf-half'>
                        <div className='title'>
                            <p> {Weather.query.results.channel.location.city}</p>
                            <p>, {Weather.query.results.channel.location.region}</p>
                            <p>, {Weather.query.results.channel.location.country}</p>
                        </div>
                        <div className='titlebelow'>

                            <div className='text'>
                                <p className='degree'>{Weather.query.results.channel.item.condition.temp}</p>
                                <p>{Weather.query.results.channel.item.condition.text}</p>
                                {Weather.query.results.channel.item.forecast.filter(data => data.code == 23).map(datas=>
                                    <>
                                    <div className='flexday'>

                                    <p>Day {datas.high}</p>
                                    <p>.Night{datas.low}</p>
                                    </div>
                                    </>
                                )}

                            </div>
                            <div className='icon'>

                                <FontAwesomeIcon className='moon' icon={faMoon} />
                            </div>
                        </div>
                        {/* <FontAwesomeIcon icon={faCoffee} /> */}

                        {/* <FontAwesomeIcon icon="fa-solid fa-moon-stars" /> */}
                    </div>

                </div>
                <div className='s-half'>
                    <div className='upper'>
                        <p>Today's Forecast</p>

                    </div>
                    <div className='middle'>
                        <div className='mn morning'>
                            <p>Morning</p>
                            <p>25</p>
                            <FontAwesomeIcon icon={faSun} />
                            <p>0 %</p>

                        </div>
                        <div className='mn afternoon'>
                            <p>Afternoon</p>
                            <p>25</p>
                            <FontAwesomeIcon icon={faSun} />
                            <p>0 %</p>

                        </div>
                        <div className=' mn evening'>
                            <p>Evening</p>
                            <p>25</p>
                            <FontAwesomeIcon icon={faSun} />
                            <p>0 %</p>

                        </div>
                        <div className='mn overnight'>
                            <p>Overnight</p>
                            <p>25</p>
                            <FontAwesomeIcon icon={faSun} />
                            <p>0 %</p>

                        </div>

                    </div>
                    <div className='lower'>
                        <button className='button'><p>Next Hours</p></button>

                    </div>

                </div>

            </div>
            {/* <h1>hello world</h1> */}

        </div>
    )
}
