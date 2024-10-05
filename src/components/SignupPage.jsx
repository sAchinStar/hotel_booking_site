import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormWrapper, Input, Button, PhoneNumberWrapper, OtpInputWrapper, CheckboxWrapper } from '../styles/LoginSignupStyles';
// import Header from '../components/Header';

const Signup = ({ setIsSignedUp }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [timer, setTimer] = useState(0);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const navigate = useNavigate();

  // Handle form submission (Signup)
  const handleSignup = (e) => {
    e.preventDefault();

    // Validation
    if (!username) {
      alert('Username is required');
      return;
    }

    // Email validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation regex
    if (!email || !emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return;
    }

    if (!password) {
      alert('Password is required');
      return;
    }

    if (!phone || !validatePhoneNumber(phone)) {
      alert('Please enter a valid phone number');
      return;
    }

    if (!otpSent || !otp) {
      alert('Please enter the OTP that was sent to your phone');
      return;
    }

    if (!termsAccepted) {
      alert('Please read and accept the terms and conditions');
      return;
    }

    if (!captchaVerified) {
      alert('Please complete the CAPTCHA verification');
      return;
    }

    // If all validations pass
    setIsSignedUp(true);
    // navigate('/login');
    // navigate("/loginpage")
   

  };

  // Validate phone number (Indian phone number validation as an example)
  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^[6-9]\d{9}$/; // Basic validation for 10 digits starting with 6-9
    return phoneRegex.test(phone);
  };

  // Handle OTP request
  const requestOtp = () => {
    if (validatePhoneNumber(phone)) {
      setOtpSent(true);
      setTimer(30); // Start a 30-second timer
    } else {
      alert('Please enter a valid phone number');
    }
  };

  // Handle OTP timer
  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);

  // Handle resend OTP
  const resendOtp = () => {
    setOtp(''); // Clear previous OTP
    setTimer(30); // Reset timer
  };

  // Handle CAPTCHA checkbox toggle
  const handleCaptcha = () => {
    setCaptchaVerified(!captchaVerified);
  };

  
  function handlSignup(){
    navigate("/loginpage")
  }

  return (
    <>
      {/* <Header /> */}
      <FormWrapper>
        <h2>Signup</h2>
        <form onSubmit={handleSignup}>
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
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
          
          <PhoneNumberWrapper>
            <Input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <Button type="button" onClick={requestOtp} style={{ marginLeft: '10px' }}>
              Send OTP
            </Button>
          </PhoneNumberWrapper>

          {otpSent && (
            <OtpInputWrapper>
              <Input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              {timer > 0 ? (
                <p>Resend OTP in {timer} seconds</p>
              ) : (
                <Button type="button" onClick={resendOtp}>
                  Send Again OTP
                </Button>
              )}
            </OtpInputWrapper>
          )}

          <CheckboxWrapper>
            <input
              type="checkbox"
              checked={termsAccepted}
              onChange={() => setTermsAccepted(!termsAccepted)}
            />
            {termsAccepted && <span>✔️</span>}
            <label style={{ marginLeft: '5px' }}>
              I agree with <a href="/terms" target="_blank" rel="noopener noreferrer">terms and conditions</a>
            </label>
          </CheckboxWrapper>

          <CheckboxWrapper>
            <input
              type="checkbox"
              checked={captchaVerified}
              onChange={handleCaptcha}
            />
            {captchaVerified && <span>✔️</span>}
            <label style={{ marginLeft: '5px' }}>I'm not a robot (CAPTCHA)</label>
          </CheckboxWrapper>

          <Button  type="submit" disabled={!termsAccepted || !captchaVerified} onClick={handlSignup}>Signup</Button>
        </form>
      </FormWrapper>
    </>
  );
};

export default Signup;