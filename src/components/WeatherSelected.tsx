import {List} from "../model/Forecast";
import React, {useState} from "react";
import styled from "styled-components";
import grey from '@material-ui/core/colors/grey';
import Shared from "../Shared";

const Daily = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  display: flex;
  flex-direction: column;
  margin-left: 70px;

  @media (max-width: 700px) {
    margin: 20px 0;
  }

  li {
    display: flex;
    justify-content: space-between;
  }
    
   span{
     margin: 5px 0;
    }

  p {
    width: 250px;
    margin: 5px 0;
    font-size: 18px;
    padding-right: 20px;
    text-align: right;
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


const WeatherSelected: React.FunctionComponent<IWeatherProps> = props => {
    const [tempUnit, setTempUnit] = useState('C');

    return (
        <div className={'weather-today-today'}>
            <DateRow>
                <CurrentDate>{Shared.getDateString(props.day.dt)}</CurrentDate>
                <WeatherType>{props.day.weather[0].description}</WeatherType>
            </DateRow>
            <WeatherDiv>
                <Temperature>{`${Shared.getCurrentTemp(props.day.temp)}`}</Temperature>
                <i className={`wi wi-owm-${Shared.isDay() ? 'day' : 'night'}-${props.day.weather[0].id}`}/>
                <Daily>
                    <li>
                        <p>Morning</p>
                        <span>{`${props.day.temp.morn}°${tempUnit}`}</span>
                    </li>
                    <li>
                        <p>Afternoon</p>
                        <span>{`${props.day.temp.day}°${tempUnit}`}</span>
                    </li>
                    <li>
                        <p>Evening</p>
                        <span>{`${props.day.temp.eve}°${tempUnit}`}</span>
                    </li>
                    <li>
                        <p>Night</p>
                        <span>{`${props.day.temp.night}°${tempUnit}`}</span>
                    </li>
                </Daily>

                <Daily>
                    <li>
                        <p>Sunny</p>
                        <span style={{backgroundColor: Shared.sunnyColor}}>color</span>
                    </li>
                    <li>
                        <p>More than 20°C</p>
                        <span style={{backgroundColor: Shared.moreThanTwentyColor}}>color</span>
                    </li>
                    <li>
                        <p>Sunny & More than 20°C</p>
                        <span style={Shared.bothSunnyAndMoreThanTwenty}>color</span>
                    </li>
                </Daily>
            </WeatherDiv>
        </div>
    );
};

interface IWeatherProps {
    day: List;
}

export default WeatherSelected;

