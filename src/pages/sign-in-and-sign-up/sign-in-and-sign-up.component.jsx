import React, {useState} from 'react';
import GoogleSignInImage from '../../assets/images/btn_google_dark_normal_ios@3x.png';

import {
    FormContainer,
    FormInputLabel,
    FormInput,
    FormSection,
    FormHeader,
    StyledForm,
    StyledButton,
    ButtonContainer,
    ButtonSeparator,
    GoogleSignInContainer,
    GoogleSignInText,
    GoogleSignInIcon
} from './sign-in-and-sign-up.styles';

const SignInAndSignUp = () => {

    const [userDetails, setUserDetails] = useState({
        email: '',
        currentPassword: ''
    });

    const [passInputDetails, setPassInputDetials] = useState({
        passwordFieldType: 'password',
        togglePasswordText: 'Show Password',
        togglePasswordTextContext: 'Show password as plain text. Warning: this will display your password on the screen.'
    });

    
    const {email, currentPassword} = userDetails;
    const {
            passwordFieldType,  
            togglePasswordText, 
            togglePasswordTextContext
        } = passInputDetails;

    
    const handleChange = event => {
        const { value, name } = event.target;

        setUserDetails({...userDetails, [name]: value });
    }

    const togglePassword = () => {
        if (passwordFieldType === 'password'){
            setPassInputDetials({
                passwordFieldType: 'text',
                togglePasswordText: 'Hide Password',
                togglePasswordTextContext: 'Hide password.'
            })
        } else {
            setPassInputDetials({
                passwordFieldType: 'password',
                togglePasswordText: 'Show Password',
                togglePasswordTextContext: 'Show password as plain text.' + 
                    'Warning: this will display your password on the screen.',
            })

        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        alert(`Email: ${email}, Password: ${currentPassword}`);
    }

    return (
        <FormContainer>
            <StyledForm onSubmit={handleSubmit}>
                <FormHeader>Sign in</FormHeader>

                <FormSection>
                    <FormInputLabel htmlFor="email"> Email </FormInputLabel>
                    <FormInput 
                        id="email" 
                        name="email" 
                        type="email" 
                        autocomplete="username"
                        value={email}
                        onChange={handleChange}
                        required autoFocus/>
                </FormSection>

                <FormSection>        
                    <FormInputLabel
                        htmlFor="currentPassword">
                            Password
                    </FormInputLabel>
                    <FormInput 
                        id="currentPassword" 
                        name="currentPassword"
                        type={passwordFieldType} 
                        autocomplete="currentPassword" 
                        onChange={handleChange}
                        value={currentPassword}
                        required/>
                    <StyledButton 
                        id="toggle-password" 
                        type="button" 
                        aria-label={togglePasswordTextContext}
                        onClick={togglePassword} 
                        isTogglePassword>
                            {togglePasswordText}
                    </StyledButton>
                </FormSection>
                <ButtonContainer>
                    <StyledButton id="signin" isSignInButton> Sign in </StyledButton>
                    <ButtonSeparator>Or</ButtonSeparator>
                    {/* <StyledButton type="button" backgroundImage={GoogleSignInButtonImage} isGoogleSignIn/> */}
                    <GoogleSignInContainer>
                        <GoogleSignInIcon googleIcon={GoogleSignInImage}/>
                        <GoogleSignInText>Sign in with Google</GoogleSignInText>
                    </GoogleSignInContainer>
                </ButtonContainer>
            </StyledForm>
        </FormContainer>
    )
}

export default SignInAndSignUp;