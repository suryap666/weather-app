import React, {useState} from "react";
import {List} from "../model/Forecast";

const WeatherRest: React.FunctionComponent<IWeatherProps> = props => {
    const [tempUnit, setTempUnit] = useState('C');
    const getDay = (index: number) => {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return days[index];
    };

    return (
        <li key={props.day.dt}>
            <h3>{getDay(new Date(props.day.dt * 1000).getDay())}</h3>
            <i className={`wi wi-owm-${props.day.weather[0].id}`}/>
            <p>
                {`${Math.round(
                    Object.values(props.day.temp).reduce(
                        (sum, current) => sum + current) / Object.values(props.day.temp).length)}°${tempUnit}`}
            </p>
        </li>
    );
};

interface IWeatherProps {
    day: List;
}

export default WeatherRest;
