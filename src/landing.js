import React, { Component } from "react"
// import logo from '../../components/Logo/logo.svg';

import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

class Index extends Component {
    render() {
        return (
            //     <div className="App" >
            //         <header className="App-header">
            //             <img src={logo} className="App-logo" alt="logo" />
            //             <p>
            //                 Edits <code>src/App.js</code> and save to reload.
            // </p>
            //             <a
            //                 className="App-link"
            //                 href="https://reactjs.org"
            //                 target="_blank"
            //                 rel="noopener noreferrer"
            //             >
            //                 Learn React
            // </a>
            //         </header>
            //     </div >
            <div class="main-container">
                <Header />
                <Content />
                <Footer />
            </div>

        )
    }
}

export default Index;