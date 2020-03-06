import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {blue} from "@material-ui/core/colors";
import {Forecast} from "../model/Forecast";
import WeatherToday from "./WeatherToday";
import WeatherRest from "./WeatherRest";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            padding: '30px',
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: '#FFFFFF',
            background: blue.A200,
            minHeight: '200px'
        },
    }),
);

const WeatherGrids: React.FunctionComponent<IWeatherGridProps> = props => {
    const classes = useStyles();

    return (
        props.forecast === null ?
            <div>
                Add error component here
            </div>
            :
            (
                <div className={classes.root}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <WeatherToday day={props.forecast?.list[0]} />
                            </Paper>
                        </Grid>

                        {props.forecast.list.slice(1).map(day => (
                            <Grid item xs={2} key={day.dt}>
                                <Paper className={classes.paper}>
                                    <WeatherRest day={day} />
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
}
