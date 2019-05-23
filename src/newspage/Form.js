import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import styled from 'styled-components';
import SubmitButton from './SubmitButton';

const StyledForm = styled.form`
  margin: 20px;
  display: grid;
`;
export default function Form({ onFormSubmit }) {
  function onSubmit(event, handleFormSubmit) {
    event.preventDefault();
    const form = event.target;
    const activities = form.activities.value
      .split(',')
      .map(value => value.trim())
      .filter(value => Boolean(value));
    const newEntry = {
      title: form.title.value,
      author: form.author.value,
      activities,
      description: form.description.value
    };
    handleFormSubmit(newEntry);
  }
  return (
    <StyledForm onSubmit={event => onSubmit(event, onFormSubmit)}>
      <Input
        name="title"
        label="Datum"
        required
        placeholder="Donnerstag, 09.05.2019"
      />
      <Input
        name="activities"
        label="Aktivitäten"
        required
        placeholder="Spaziergang, Mittagessen, ..."
      />
      <Input name="author" label="Autor" required placeholder="Anna" />
      <Input name="description" label="Placeholder placeholder?" />
      <SubmitButton>Eintrag abschicken</SubmitButton>
    </StyledForm>
  );
}

Form.propTypes = {
  onFormSubmit: PropTypes.func.isRequired
};
