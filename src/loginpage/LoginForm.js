import React from 'react';
import styled from 'styled-components';
import Label from '../components/Label';
import Input from '../components/Input';
import SubmitButton from '../components/SubmitButton';

const StyledLoginForm = styled.form``;

export default function LoginForm({
  userGroups,
  onLogin,
  history,
  onIncorrectLoginData
}) {
  function handleLoginFormSubmit(event) {
    event.preventDefault();
    const loginemail = event.target.loginemail.value;
    const loginpassword = event.target.loginpassword.value;

    const totalUsers = userGroups.map(userGroup => userGroup.users);
    const totalUsersList = new Array().concat(...totalUsers);

    try {
      const foundUser = totalUsersList.find(user => user.email === loginemail);
      const foundUserGroup = userGroups.find(
        userGroup => userGroup.id === foundUser.userGroupId
      );
      if (foundUserGroup.password === loginpassword) {
        onLogin(foundUser, foundUserGroup, history);
      } else {
        onIncorrectLoginData('errorWrongPassword');
      }
    } catch {
      onIncorrectLoginData('errorWrongEmail');
    }
  }

  return (
    <StyledLoginForm onSubmit={event => handleLoginFormSubmit(event)}>
      <Label htmlFor="loginemail" label="Gib deine Email-Adresse an:" />
      <Input name="loginemail" required />

      <Label htmlFor="loginpassword" label="Gib dein Familienpasswort an:" />
      <Input name="loginpassword" required />

      <SubmitButton>Login</SubmitButton>
    </StyledLoginForm>
  );
}
