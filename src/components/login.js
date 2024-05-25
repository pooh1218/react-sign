import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';


const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [error, setError] = useState('');

    const navigate = useNavigate()

    const onButtonClick = () => {
        // You'll update this function later...
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost/apiPhp/Login.php', {
                email,
                password,
            });

            console.log(response.data.Code);
            console.log(response.data.Message);

            // Assuming backend returns success message
            if (response.data.Code === 1) {
                // Redirect to dashboard or home page after successful login
                navigate('/landing', { state: { successMessage: response.data.Message } });
            } else {
                setError(response.data.Message || 'Invalid email or password');
            }
        } catch (error) {
            setError('Login failed. Please try again.');
        }
    };

    const clickRegister = () => {
        navigate('/signup');
    }

    return (
        <div className={'mainContainer'}>
            <div className={'titleContainer'}>
                <div>Login</div>
            </div>
            <br />
            <form onSubmit={handleSubmit}>
                <div className={'inputContainer'}>
                    <input
                        value={email}
                        placeholder="Enter your email here"
                        onChange={(ev) => setEmail(ev.target.value)}
                        className={'inputBox'}
                    />
                    <label className="errorLabel">{emailError}</label>
                </div>
                <br />
                <div className={'inputContainer'}>
                    <input
                        value={password}
                        placeholder="Enter your password here"
                        onChange={(ev) => setPassword(ev.target.value)}
                        className={'inputBox'}
                    />
                    <label className="errorLabel">{passwordError}</label>
                </div>
                <br />
                <div className={'inputContainer'}>
                    <input className={'inputButton'} type="submit" onClick={onButtonClick} value={'Log in'} />
                </div>
                <div className={'textContainer'}>
                    Don't you have the account? You can register <span className="registerLink" onClick={clickRegister}> here</span>.
                </div>
            </form>
        </div>
    )
}

export default Login