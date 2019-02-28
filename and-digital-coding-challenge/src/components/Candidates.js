import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { List, ListItem, ListItemText } from "@material-ui/core"

const styles = theme => ({
root: {
    backgroundColor: theme.palette.background.paper,
    flexGrow: 1,
    },
});

class Candidates extends Component {
  render() {
    const { classes } = this.props;
    const candidates = this.props.allCandidates.map((candidate, index) => 
        <ListItem key={index}>
            <ListItemText primary={candidate.name} secondary={candidate.skills.join(", ")} />
        </ListItem>
    )
    
    return (
        <List className={classes.root}>
            {candidates}            
        </List>
    )
  }
}

Candidates.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Candidates);