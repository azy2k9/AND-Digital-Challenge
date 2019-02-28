import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import './App.css'
import { Grid } from '@material-ui/core';
import Candidates from './components/Candidates';
import Header from './components/Header';
import Title from './components/Title';
import SkillsSelector from './components/SkillsSelector';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    flexGrow: 1,
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
    filteredCandidates: [],
  }

  componentDidMount() {
    this.setState({ filteredCandidates: this.state.allCandidates})    
  }

  updateCandidatesList = (selectedSkills) => {
    let filteredCandidates = [...this.state.allCandidates]
    filteredCandidates = filteredCandidates.reduce((accumulator,candidate) => {
      const candidateHasSkill = candidate.skills.some(skill => selectedSkills.includes(skill))
      return candidateHasSkill ? [...accumulator, candidate] : [...accumulator]
    }, [])

    this.setState({ filteredCandidates: filteredCandidates})
  }

  render() {
    const { classes } = this.props;
    
    return (
      <>
      <Header />
      <Grid container alignItems={"center"} direction={"column"} justify={"center"}>
        <Grid item xs={12} className={classes.title}>
          <Title />
        </Grid>
        <Grid container alignContent={"center"} justify={"center"}>
          <Grid item>
            <Candidates allCandidates={this.state.filteredCandidates} />
          </Grid>
          <Grid item className={classes.space}>
            <SkillsSelector allCandidates={this.state.allCandidates} updateCandidatesList={this.updateCandidatesList} />
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