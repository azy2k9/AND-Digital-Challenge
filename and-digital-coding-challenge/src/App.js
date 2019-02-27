import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import './App.css'
import { Grid, List, ListItem, ListItemText, FormControl,
FormLabel, FormControlLabel, Typography, AppBar, 
Toolbar, Checkbox, FormGroup } from '@material-ui/core';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
    paddingTop: 30,
    paddingBottom: 30
  },
  title: {
    paddingTop: 50,
    paddingBottom: 25
  },
  space: {
    paddingTop: 20,
    paddingLeft: 50,
  }
});


class App extends Component {
  state = {
    allCandidates: [
      { name: "Kerrie", skills: ["JavaScript", "Docker", "Ruby"] },
      { name: "Mario", skills: ["Python", "AWS"] },
      { name: "Jacquline", skills: ["JavaScript", "Azure"] },
      { name: "Kathy", skills: ["JavaScript", "Java"] },
      { name: "Anna", skills: ["JavaScript", "AWS"] },
      { name: "Matt", skills: ["PHP", "AWS"] },
      { name: "Matt", skills: ["PHP", ".Net", "Docker"] },
    ],
    allSkills: [],
    selectedSkills: []
  }

  componentDidMount() {
    const allCandidates = [ ...this.state.allCandidates]
    const skills = allCandidates.reduce((accumulator, candidate) => {
      return Array.from(new Set([...accumulator, ...candidate.skills]))
    }, [])

    this.setState({ allSkills: skills, selectedSkills: skills})
  }

  handleCheckboxSelect = e => {
    let skills = [...this.state.selectedSkills]
    
    if(skills.includes(e.target.value)) {
      skills = skills.filter(skill => skill !== e.target.value)
    }
    else {
      skills = [...skills, e.target.value]
    }

    this.setState({ selectedSkills: skills })
  }

  render() {
    const { classes } = this.props;

    const candidates = this.state.allCandidates.map((candidate, index) => 
      <ListItem key={index}>
        <ListItemText primary={candidate.name} secondary={candidate.skills.join(", ")} />
      </ListItem>
    )

    const skills = this.state.allSkills.map((skill, index) => 
        <FormControlLabel value={skill} control={<Checkbox onClick={this.handleCheckboxSelect} checked={this.state.selectedSkills.includes(skill)} />} 
        label={skill} key={index}  />
    )

    return (
      <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" color="inherit" className={classes.grow} align="center">
            <b>AND Digital</b>
          </Typography>
        </Toolbar>
      </AppBar>

      <Grid container alignItems={"center"} direction={"column"} justify={"center"}>
        <Grid item xs={12} className={classes.title}>
          <Typography variant="h3">Candidates Filter App</Typography>
        </Grid>
          <Grid container alignContent={"center"} justify={"center"}>
            <Grid item>
              <List className={classes.root}>
                {candidates}            
              </List>
            </Grid>
            <Grid item className={classes.space}>
              <FormControl component="fieldset">
                <FormLabel component="legend" style={{ textAlign: 'center' }}>Select skills!</FormLabel>
                <FormGroup>
                  {skills}
                </FormGroup>
              </FormControl>
            </Grid>
          </Grid>
      </Grid>
      </>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);