import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import UserPage from "./Pages/UserPage";
import Home from "./Pages/Home";
import LoginPage from "./Pages/LoginPage";
import AddUsers from "./Components/AddUsers";
import NavBar from "./Components/NavBar";

function getCookie() {
    return true;
}


function App() {
    if (getCookie() === true) {
        return (
            <div className="App">
                <div className="row">
                    <div className={"col-lg-5"}>
                        <NavBar/>
                    </div>

                    <div className={"col-lg-3"}>
                        <BrowserRouter>
                            <Routes>
                                <Route path="/" element={<Home/>}/>
                                <Route path="/Users" element={<UserPage/>}/>
                                <Route path="/Users/AddUser" element={<AddUsers/>}/>

                                <Route path="/Users/AddUser" element={<AddUsers/>}/>
                            </Routes>

                        </BrowserRouter>
                    </div>
                </div>
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
