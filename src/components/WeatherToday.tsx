import {FeelsLike, List} from "../model/Forecast";
import React, {useState} from "react";
import styled from "styled-components";
import grey from '@material-ui/core/colors/grey';

const Daily = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  display: flex;
  flex-direction: column;
  width: 125px;
  margin-left: 70px;

  @media (max-width: 700px) {
    margin: 20px 0;
  }

  li {
    display: flex;
    justify-content: space-between;
  }

  p {
    margin: 5px 0;
    font-size: 18px;
  }`;

const Temperature = styled.h1`
  font-size: 120px;
  margin-right: 70px;

  @media (max-width: 700px) {
    font-size: 70px;
    margin: 30px 0;
  }`;

const WeatherDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  @media (max-width: 700px) {
    flex-direction: column;
  }

  i {
    font-size: 120px;
    margin-top: -30px;

    @media (max-width: 700px) {
      font-size: 70px;
    }
  }`;

const DateRow = styled.div`
  margin-left: 20px;
  float: left;
`;

const CurrentDate = styled.h2`
  margin: 0;
`;

const WeatherType = styled.h3`
  margin: 0;
  font-weight: normal;
  text-transform: capitalize;
  float: left;
  color: ${grey[900]};
  font-weight: bold;
`;

const getCurrentTemp = (temps: FeelsLike) => {
    const hours = new Date(Date.now()).getHours();

    if (hours >= 6 && hours < 12) {
        return Math.round(temps.morn);
    } else if (hours >= 12 && hours < 18) {
        return Math.round(temps.day);
    } else if (hours >= 18 && hours < 24) {
        return Math.round(temps.eve);
    } else {
        return Math.round(temps.night);
    }
};

const getDay = (index: number) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[index];
};

export const getDateString = (seconds: number) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const date = new Date(seconds * 1000);
    return `${getDay(date.getDay())}, ${months[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`;
};

const isDay = () => {
    const hours = new Date(Date.now()).getHours();
    return hours >= 7 && hours <= 20;
};

const WeatherToday: React.FunctionComponent<IWeatherProps> = props => {
    const [tempUnit, setTempUnit] = useState('C');

    return (
        <div>
            <DateRow>
                <CurrentDate>{getDateString(props.day.dt)}</CurrentDate>
                <WeatherType>{props.day.weather[0].description}</WeatherType>
            </DateRow>
            <WeatherDiv>
                <Temperature>{`${getCurrentTemp(props.day.temp)}°${tempUnit}`}</Temperature>
                <i className={`wi wi-owm-${isDay() ? 'day' : 'night'}-${props.day.weather[0].id}`}/>
                <Daily>
                    <li>
                        <p>Morning</p>
                        <p>{`${Math.round(props.day.temp.morn)}°${tempUnit}`}</p>
                    </li>
                    <li>
                        <p>Day</p>
                        <p>{`${Math.round(props.day.temp.day)}°${tempUnit}`}</p>
                    </li>
                    <li>
                        <p>Evening</p>
                        <p>{`${Math.round(props.day.temp.eve)}°${tempUnit}`}</p>
                    </li>
                    <li>
                        <p>Night</p>
                        <p>{`${Math.round(props.day.temp.night)}°${tempUnit}`}</p>
                    </li>
                </Daily>
            </WeatherDiv>
        </div>
    );
};

interface IWeatherProps {
    day: List;
}

export default WeatherToday;

