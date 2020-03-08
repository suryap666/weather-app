import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, {AlertProps} from '@material-ui/lab/Alert';
import {makeStyles, Theme} from '@material-ui/core/styles';

function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

const CustomizedSnackbars: React.FunctionComponent<ICustomizedSnackbarsProps> = props => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Snackbar open={true}>
                <Alert severity={props.showMessage}>
                    {props.showMessage === 'info' ? 'Search for a city!' : `City name does not exist`}
                </Alert>
            </Snackbar>
        </div>
    );
};

interface ICustomizedSnackbarsProps {
    showMessage: 'success' | 'info' | 'warning' | 'error';
}

export default CustomizedSnackbars;
