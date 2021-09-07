import React from 'react';
import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import { Typography } from '@material-ui/core';

const Header = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="title" color="inherit">
                        TDEE Calculator
                    </Typography>
                </Toolbar>
            </AppBar>

        </div>
    );
};

export default Header;