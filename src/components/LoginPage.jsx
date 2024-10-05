import React, { useState } from 'react';
import { FormWrapper, Input, Button } from '../styles/LoginSignupStyles';
// import Header from '../components/Header';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (email && password) {
      console.log("User logged in with email:", email);
    }
  };

  return (
    <>
      {/* <Header />  */}
      <FormWrapper>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">Login</Button>
        </form>
      </FormWrapper>
    </>
  );
};

export default LoginPage;