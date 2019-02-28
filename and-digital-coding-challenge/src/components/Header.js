import React from 'react'
import { AppBar, Toolbar, Typography, withStyles } from '@material-ui/core'

const styles = () => ({
    grow: {
        flexGrow: 1,
        paddingTop: 30,
        paddingBottom: 30
    }
});

const Header = (props) => {
    const { classes } = props
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h4" color="inherit" className={classes.grow} align="center">
                    <b>AND Digital</b>
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default withStyles(styles)(Header)