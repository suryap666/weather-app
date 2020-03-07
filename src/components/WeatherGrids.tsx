import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {blue} from "@material-ui/core/colors";
import {Forecast, List} from "../model/Forecast";
import WeatherSelected from "./WeatherSelected";
import WeatherCards from "./WeatherCards";
import CustomizedSnackbars from "./CustomizedSnackbars";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            background: blue.A200,
            minHeight: '200px',
        },
    }),
);

const WeatherGrids: React.FunctionComponent<IWeatherGridProps> = props => {
    const classes = useStyles();

    return (
        props.forecast === null ?
            <CustomizedSnackbars searchValue={props.searchValue} showMessage={props.showMessage}/>
            :
            (
                <div className={classes.root}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <WeatherSelected day={props.headerDay ?? props.forecast?.list[0]}/>
                            </Paper>
                        </Grid>

                        {props.forecast.list.map(day => (
                            <Grid item xs={2} key={day.dt}>
                                <Paper className={classes.paper}>
                                    <WeatherCards day={day} onClick={props.onClickUpdate}/>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            )
    );
};

export default WeatherGrids;

interface IWeatherGridProps {
    forecast: Forecast | null;
    searchValue: string;
    showMessage: 'success' | 'info' | 'warning' | 'error';
    onClickUpdate: (day: List) => any;
    headerDay: List | undefined;
}
