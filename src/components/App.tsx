import React, {useState} from 'react';
import SearchAppBar from "./AppBar";
import WeatherGrids from "./WeatherGrids";
import ForeCastServices from "../services/ForeCastServices";
import {Forecast, List} from "../model/Forecast";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CustomizedSnackbars from "./CustomizedSnackbars";

const App: React.FunctionComponent<IAppProps> = (props) => {

    const [searchValue, setSearchValue] = useState('');
    const [forecast, setForecast] = useState<Forecast | null>(null);
    const [showMessage, setShowMessage] = useState<'success' | 'info' | 'warning' | 'error'>('info');
    const [headerDay, setHeaderDay] = useState<List>();

    const handleSearchInput = (cityName: string) => {
        setSearchValue(cityName);
    };

    const onClickUpdate = (day: List) => {
        setHeaderDay(day);
    };

    const getWeatherForeCastByCity = async (e: Event) => {
        e.preventDefault();
        const foreCast = await ForeCastServices.getForecastByCity(searchValue);

        if (foreCast) {
            setForecast(foreCast);
            setHeaderDay(foreCast.list[0])
        } else {
            setForecast(null);
            setShowMessage('error');
    }
    };

    return (
        <MuiThemeProvider>
            <div className={'app'}>
                <SearchAppBar
                    getForeCast={getWeatherForeCastByCity}
                    textChanged={handleSearchInput}
                />
                {forecast === null ?
                    <CustomizedSnackbars showMessage={showMessage}/> :
                    <WeatherGrids
                        forecast={forecast}
                        searchValue={searchValue}
                        onClickUpdate={onClickUpdate}
                        headerDay={headerDay}
                    />}
            </div>
        </MuiThemeProvider>
    );
};

interface IAppProps {
}

interface IAppState {
    searchValue: string;
}

export default App;
