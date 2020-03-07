import React from "react";
import {List} from "../model/Forecast";
import styled from "styled-components";
import Shared from "../Shared";

const WeatherDiv = styled.div`
  padding: 20px;
  border-radius: 15px;
  &:hover  {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

const WeatherRest: React.FunctionComponent<IWeatherProps> = props => {

    return (
        <WeatherDiv
            onClick={() => props.onClick(props.day)}
            style={{backgroundColor: Shared.isTemperatureGreater(Shared.averageTemperature(props.day)) ? 'orange' : '#448aff'}}
        >
            <h3>{Shared.getDateString(props.day.dt)}</h3>
            <i className={`wi wi-owm-${props.day.weather[0].id}`}/>
            <p>
                Average: {Shared.averageTemperature(props.day)}
            </p>
        </WeatherDiv>
    );
};

interface IWeatherProps {
    day: List;
    onClick: (day: List) => any;
}

export default WeatherRest;
