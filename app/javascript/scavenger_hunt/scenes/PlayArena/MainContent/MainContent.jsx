import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { Clues } from '../../../data/staticData/clues';
import { 
    QuestionOne,
    QuestionTwo,
    QuestionThree
  } from '../../Questions';


const MainContent = ({ progress, clueId }) => {
  const history = useHistory();

  const getClue = () => {
    let index = clueId - 1
    if ((clueId - 1) > progress) {
      index = progress
      history.push(`/hunt/play/${index+1}`)
    }

    return Clues[index]
  }

  return (
    <Grid container spacing={0} justify="center" alignItems="stretch">
      <Grid item xs={8}>
        <QuestionOne />
        <QuestionTwo />
        <QuestionThree />
      </Grid>
    </Grid>
  )
};

MainContent.propTypes = {
  progress: PropTypes.number,
  clueId: PropTypes.number,
};

export { MainContent };
