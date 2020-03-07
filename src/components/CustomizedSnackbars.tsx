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
            <Snackbar open={true} autoHideDuration={6000}>
                <Alert severity={props.showMessage}>
                    {props.showMessage === 'info' ? 'Search for a city!' : 'City name does not exists'}
                </Alert>
            </Snackbar>
            {/*<Alert severity="error">This is an error message!</Alert>*/}
            {/*<Alert severity="warning">This is a warning message!</Alert>*/}
            {/*<Alert severity="info">This is an information message!</Alert>*/}
            {/*<Alert severity="success">This is a success message!</Alert>*/}
        </div>
    );
};

interface ICustomizedSnackbarsProps {
    searchValue: string;
    showMessage: 'success' | 'info' | 'warning' | 'error';
}

export default CustomizedSnackbars;
