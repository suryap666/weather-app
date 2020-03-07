import React, {useState} from "react";
import {List} from "../model/Forecast";
import {getDateString} from "./WeatherToday";
import styled from "styled-components";

const WeatherDiv = styled.div`
  padding-top: 20px;
  &:hover  {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

const WeatherRest: React.FunctionComponent<IWeatherProps> = props => {
    const [tempUnit, setTempUnit] = useState('C');

    return (
        <WeatherDiv onClick={() => props.onClick(props.day)}>
            <h3>{getDateString(props.day.dt)}</h3>
            <i className={`wi wi-owm-${props.day.weather[0].id}`}/>
            <p>
                Average: {`${Math.round(
                Object.values(props.day.temp).reduce(
                    (sum, current) => sum + current) / Object.values(props.day.temp).length)}°${tempUnit}`}
            </p>
        </WeatherDiv>
    );
};

interface IWeatherProps {
    day: List;
    onClick: (day:List) => any;
}

export default WeatherRest;
