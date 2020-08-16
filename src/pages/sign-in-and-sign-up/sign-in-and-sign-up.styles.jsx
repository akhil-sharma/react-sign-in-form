import styled, {css} from 'styled-components';

const desktopFontSize = "16px";
const mobileFontSize = "22px";

const SignInButtonStyle = css`
    margin: 30px 0 30px 12%;
    height: 50px;
`;

const TogglePasswordStyle = css`
    background: none;
    border: none;
    cursor: pointer;
    font-weight: 300;
    padding: 0; // Display at the top right of the password section
    position: absolute;
    top: -4px;
    right: -2px;
`;

const getButtonStyle = (props) => {
    if (props.isTogglePassword){
        return TogglePasswordStyle;
    } 
    else if (props.isSignInButton){
        return SignInButtonStyle
    } 
}

export const StyledButton = styled.button`
    background-color: #eee;
    border: 1px solid #ccc;
    border-radius: 2px;
    color: #444;
    cursor: pointer;
    display: block;
    max-width: 240px;
    font-size: 22px; // fallback
    font-size: ${mobileFontSize};
    font-weight: 500;
    margin: 3px 0 0 0;
    padding: 10px;

    &:hover {
        background-color: #ccc;
        color: black;
    }

    @media (min-width: 450px) {
        font-size: 14px; // fallback
        font-size: ${desktopFontSize};
    }

    ${getButtonStyle}
`;

export const ButtonSeparator = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    
    &:before, &:after {
        content: '';
        flex: 1;
        border-bottom: 1px solid #000;
    }
    
    &:before {
        margin-right: .25em;
    }
    
    &:after {
        margin-left: .25em;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%; // fallback
    width: calc(100% - 60px); // full width minus padding
    margin-left: 8%; // centering the div in form
`;

export const FormContainer = styled.div`
    font-family: sans-serif;
    font-weight: 500;
    margin: 10px 20px;
    input[type=email]:not(:focus):invalid,
    input[type=password]:not(:focus):invalid {
        color: red;
        outline-color: red;
    }

    @media (min-width: 450px) {
        margin: 20px 50px;
    }

    @media (min-width: 800px) {
        margin: 50px;
    }
`;

export const StyledForm = styled.form`
    margin: 0 auto;
    max-width: 400px;
`;

export const FormHeader = styled.h1`
    border-bottom: 1px solid #ccc;
    font-size: 28px;
    font-weight: 600;
    margin: 0 0 20px 0;
    padding: 0 0 5px 0;

    @media (min-width: 450px) {
        font-size: 28px;
        font-size: calc(2 * ${desktopFontSize});
        font-weight: 500;
        margin: 0 0 80px 0;
    }
`;

export const FormSection = styled.section`
    margin: 0 0 20px 0;
    position: relative; /* for password toggle positioning */
`;

export const FormInput = styled.input`
    border: 1px solid #ccc;
    font-size: 22px; // fallback
    font-size: ${mobileFontSize};
    padding: 15px;
    width: 80%; // fallback
    width: calc(100% - 30px); // full width minus padding

    @media (min-width: 450px) {
        font-size: 14px; //fallback
        font-size: ${desktopFontSize};
    }
`;

export const FormInputLabel = styled.label`
    display: block;
    font-size: 20px;
    font-size: ${mobileFontSize};
    font-weight: 500;
    margin: 0 0 3px 0;

    @media (min-width: 450px) {
        font-size: 14px; //fallback
        font-size: ${desktopFontSize};
    }
`;

// Google sign in button
export const GoogleSignInContainer = styled.div`
    display: inline-block;
    background: #4285f4;
    color: white;
    border-radius: 2px;
    border: thin solid #888;
    box-shadow: 1px 1px 1px grey;
    white-space: nowrap;
    width: 240px; // fallback
    height: 50px;
    margin: 30px 0 0 12%;

    &:hover{
        cursor: pointer;
    }
`;

export const GoogleSignInText = styled.span`
    display: inline-block;
    vertical-align: middle;
    padding-left: 35px;
    padding-right: 42px;
    font-size: 14px;
    font-weight: bold;
    /* Use the Roboto font that is loaded in the <head> */
    font-family: 'Roboto', sans-serif;
`;

export const GoogleSignInIcon = styled.span`
    background: url('${({googleIcon}) => googleIcon}');
    display: inline-block;
    vertical-align: middle;
    width: 50px;
    height: 50px;
    background-size: 100%;
`;
