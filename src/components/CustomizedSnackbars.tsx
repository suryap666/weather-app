import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, {AlertProps} from '@material-ui/lab/Alert';
import {makeStyles, Theme} from '@material-ui/core/styles';

export type ErrorMessageType = { type: 'success' | 'info' | 'warning' | 'error', message: string };

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
                <Alert severity={props.showMessage.type}>
                    {props.showMessage.message}
                </Alert>
            </Snackbar>
        </div>
    );
};

interface ICustomizedSnackbarsProps {
    showMessage: ErrorMessageType;
}

export default CustomizedSnackbars;
