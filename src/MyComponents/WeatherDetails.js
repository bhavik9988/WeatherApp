import React from 'react'
import Weather from "../Weather.json"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowsToDot, faArrowUp, faCircleArrowDown, faCircleHalfStroke, faCoffee, faDroplet, faEye, faMoon, faRadiation, faRadiationAlt, faStarHalf, faStarHalfAlt, faSun, faTemperatureArrowDown, faWind } from '@fortawesome/free-solid-svg-icons'
import './WeatherDetails.css'

export const WeatherDetails = () => {
    return (
        <div className='wfull'>
            <div className='wfhalf'>
                <div className='wtitle'>
                    <p> {Weather.query.results.channel.location.city}</p>
                    <p>, {Weather.query.results.channel.location.region}</p>
                    <p>, {Weather.query.results.channel.location.country}</p>
                </div>
                <div className='wtemp'>
                    <p>{Weather.query.results.channel.item.condition.temp}</p>
                    <div className='wtempf'>

                    {/* <FontAwesomeIcon icon={faStarHalf} />s */}
                    <FontAwesomeIcon icon={faArrowUp} />
                    <p>{Weather.query.results.channel.astronomy.sunrise}</p>
                    <FontAwesomeIcon icon={faArrowDown} />
                    <p>{Weather.query.results.channel.astronomy.sunset}</p>
                    </div>



                </div>
                <p className='feels'>Feels like</p>

            </div>
            <div className='wshalf'>
                <div className='wleft'>
                    <div className='uleft'>
                        <p><FontAwesomeIcon icon={faTemperatureArrowDown} />
                            High/Low
                        </p>
                        {Weather.query.results.channel.item.forecast.filter(data => data.code == 23).map(datas =>
                            <>
                               

                                    <p>{datas.high}/{datas.low}</p>
                            </>
                        )}

                    </div>
                    <div className='uleft'>
                        <p><FontAwesomeIcon icon={faDroplet} />
                            Humidity
                        </p>
                        <p>{Weather.query.results.channel.atmosphere.humidity} %</p>

                    </div>
                    <div className='uleft'>
                        <p><FontAwesomeIcon icon={faArrowsToDot} />
                            Pressure
                        </p>
                        <p>{Weather.query.results.channel.atmosphere.pressure} mb</p>

                    </div>
                    <div className='uleft'>
                        <p><FontAwesomeIcon icon={faEye} />
                            Visibility
                        </p>
                        <p>{Weather.query.results.channel.atmosphere.visibility}</p>

                    </div>

                </div>
                <div className='wright'>
                    <div className='uright'>
                        <p><FontAwesomeIcon icon={faWind} />
                            Wind
                        </p>
                        <p>{Weather.query.results.channel.wind.speed} km/h</p>

                    </div>
                    <div className='uright'>
                        <p><FontAwesomeIcon icon={faDroplet} />
                            Dew Point
                        </p>
                        <p>{Weather.query.results.channel.wind.direction}</p>

                    </div>
                    <div className='uright'>
                        <p><FontAwesomeIcon icon={faRadiationAlt} />
                            UV Index
                        </p>
                        <p>0 of 10</p>

                    </div>
                    <div className='uright'>
                        <p><FontAwesomeIcon icon={faMoon} />
                            Moon Phase
                        </p>
                        <p>Waning Gibbous</p>

                    </div>

                </div>



            </div>

        </div>
    )
}
