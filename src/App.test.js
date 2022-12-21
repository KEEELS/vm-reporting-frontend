import {render, screen} from '@testing-library/react';
import App from './App';
import AddUser from "./Components/AddUser";
import NavBar from "./Components/NavBar";
import UserDetails from "./Components/UserDetails";
import UserPage from "./Pages/UserPage";
import LoginPage from "./Pages/LoginPage";

test('Render App.js', () => {
    const rnd = render(<App/>);
    expect(rnd).toBeDefined();
});

test('Render AddUsers.js', () => {
    const rnd = render(<AddUser/>);
    expect(rnd).toBeDefined();
});

test('Render NavBar.js', () => {
    const rnd = render(<NavBar/>);
    expect(rnd).toBeDefined();
});

test('Render ViewUsers.js', () => {
    const rnd = render(<UserDetails/>);
    expect(rnd).toBeDefined();
});

test('Render LoginPage.js', () => {
    const rnd = render(<LoginPage/>);
    expect(rnd).toBeDefined();
});

test('Render UserPage.js', () => {
    const rnd = render(<UserPage/>);
    expect(rnd).toBeDefined();
});
