import React, { Component } from 'react'
import { FormControl, FormLabel, FormGroup, FormControlLabel, Checkbox, withStyles } from '@material-ui/core'

const styles = () => ({
    grow: {
        flexGrow: 1,
        paddingTop: 30,
        paddingBottom: 30
    }
});

class SkillsSelector extends Component {
    state = {
        allSkills: [],
        selectedSkills: [],
    }

    componentDidMount () {
        const allCandidates = [ ...this.props.allCandidates]
        const skills = allCandidates.reduce((accumulator, candidate) => {
          return Array.from(new Set([...accumulator, ...candidate.skills]))
        }, [])
    
        this.setState({ allSkills: skills, selectedSkills: skills})
    }

    handleCheckboxSelect = e => {
        let skills = [...this.state.selectedSkills]
        
        if(skills.includes(e.target.value)) 
        {
          skills = skills.filter(skill => skill !== e.target.value)
        }
        else
        {
          skills = [...skills, e.target.value]
        }

        this.setState({ selectedSkills: skills }, () => this.props.updateCandidatesList(skills))
    }
    
    render () {
        const allSkills = this.state.allSkills.map((skill, index) => {
            const checkbox = <Checkbox onClick={this.handleCheckboxSelect} 
            checked={this.state.selectedSkills.includes(skill)} /> 
            
            return <FormControlLabel value={skill} control={checkbox} label={skill} key={index}  />
        })
        
        return (
            <FormControl component="fieldset">
                <FormLabel component="legend" style={{ textAlign: 'center' }}>Select skills!</FormLabel>
                <FormGroup>
                {allSkills}
                </FormGroup>
            </FormControl>        
        )
    }
}

export default withStyles(styles)(SkillsSelector)