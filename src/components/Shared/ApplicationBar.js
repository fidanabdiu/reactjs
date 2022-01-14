import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function ApplicationBar(props) {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            {props.username}
                        </Typography>
                        <Button color="inherit" onClick={props.logoutHandler}>LOGOUT</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
};