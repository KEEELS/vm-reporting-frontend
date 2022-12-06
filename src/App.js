import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import LoginPage from "./Pages/LoginPage";
import UserPage from "./Pages/UserPage";


function getCookie() {
    if (document.cookie.length > 0) {
        let start = document.cookie.indexOf("token=");
        if (start !== -1) {
            start = start + 6;
            let end = document.cookie.indexOf(";", start);
            if (end === -1) end = document.cookie.length;
            return unescape(document.cookie.substring(start, end));
        }
    }
}

function App() {
    if (getCookie() != null) {
        return (
            <div className="App">
                <BrowserRouter>
                    <Routes>
                        <Route path="/user" element={<UserPage/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        );
    } else {
        return (
            <div className="App">

                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<LoginPage/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
