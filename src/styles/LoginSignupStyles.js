import styled from 'styled-components';

export const FormWrapper = styled.div`
  background-color: #87CEEB; 
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width:100%;
  height: 80vh;
  padding: 30px;
  box-sizing: border-box;
   max-width: 450px;
  margin: 0 auto; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 1.9);
  margin-top: 100px;
  

  h2 {
    margin-bottom: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 90%;
    max-width: 400px; 
    margin-right:20px;
  }

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;

  @media (max-width: 768px) {
    padding: 8px;
    font-size: 14px;
  }
`;

export const Button = styled.button`
  padding: 10px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  font-size: 16px; 
  cursor: pointer;
  transition: background-color 0.3s ease;
  height: 50px;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const PhoneNumberWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  input {
    flex: 1;
    height:20px; 
    
    }

  button {
    margin-left: 10px;
    height: 40px; 
    margin-bottom: 15px;
    
    
  }
`;

export const OtpInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;

  p {
    margin: 5px 0;
    color: #777;
  }
`;
export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  input {
    margin-right: 5px; 
  }

  span {
    font-size: 18px; 
    color: green; 
  }

  label {
    font-size: 16px; 
  }
`;