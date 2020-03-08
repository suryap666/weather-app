import React from "react";
import {List} from "../model/Forecast";
import styled from "styled-components";
import Shared from "../Shared";

const WeatherDiv = styled.div`
  padding: 10px;
  border-radius: 15px;
  &:hover  {
    transform: scale(1.1);
    cursor: pointer;
  }
  i {
    font-size: 40px;
   }`;


const WeatherCards: React.FunctionComponent<IWeatherProps> = props => {
    function getStyle() {
        const weatherDescription = props.day.weather[0].description;
        const isTempGreaterThanTwenty = Shared.isTemperatureGreater(Shared.averageTemperature(props.day));
        let color: string = '#448aff';
        if (isTempGreaterThanTwenty && weatherDescription === 'sky is clear') {
            return Shared.bothSunnyAndMoreThanTwenty;
        } else if (isTempGreaterThanTwenty) {
            color = Shared.moreThanTwentyColor;
        } else if (weatherDescription === 'sky is clear') {
            color = Shared.sunnyColor;
        }

        return {backgroundColor: color};
    }
    const [day, date] = Shared.getDateString(props.day.dt).split(',');

    return (
        <WeatherDiv
            onClick={() => props.onClick(props.day)}
            style={getStyle()}
        >
            <h3>{date}</h3>
            <h4>{day}</h4>
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

export default WeatherCards;
