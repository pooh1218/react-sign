import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const Signup = (props) => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repassword, setRepassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [error, setError] = useState('');

    const navigate = useNavigate()

    const onButtonClick = () => {
        // You'll update this function later...
    }

    const clickRegister = () => {
        navigate('/login');
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== repassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            const response = await axios.post('http://localhost/signup.php', {
                username,
                email,
                password,
            });

            console.log(response.data); // Assuming backend returns success message
        } catch (error) {
            setError('Signup failed. Please try again.'); // Update error state if signup fails
        }
    };

    return (
        <div className={'mainContainer'}>
            <div className={'titleContainer'}>
                <div>Sign Up</div>
            </div>
            <br />
            {/* <form onSubmit={handleSubmit}> */}
                <div className={'inputContainer'}>
                    <input
                        value={username}
                        placeholder="Enter your name here"
                        onChange={(ev) => setUsername(ev.target.value)}
                        className={'inputBox'}
                        required
                    />
                    <label className="errorLabel">{emailError}</label>
                </div>
                <br />
                <div className={'inputContainer'}>
                    <input
                        value={email}
                        placeholder="Enter your email here"
                        onChange={(ev) => setEmail(ev.target.value)}
                        className={'inputBox'}
                        required
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
                        required
                    />
                    <label className="errorLabel">{passwordError}</label>
                </div>
                <br />
                <div className={'inputContainer'}>
                    <input
                        value={repassword}
                        placeholder="Enter your password again"
                        onChange={(ev) => setRepassword(ev.target.value)}
                        className={'inputBox'}
                        required
                    />
                    <label className="errorLabel">{passwordError}</label>
                </div>
                <br />
                <div className={'inputContainer'}>
                    <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Sign Up'} />
                </div>
                <div className={'textContainer'}>
                    Do you have already the account? <span className='registerLink' onClick={clickRegister}>Login</span>
                </div>
            {/* </form> */}
        </div>
    )
}

export default Signup