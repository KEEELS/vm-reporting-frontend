import {render, screen} from '@testing-library/react';
import App from './App';
import AddUsers from "./Components/AddUsers";
import NavBar from "./Components/NavBar";
import ViewUsers from "./Components/ViewUsers";
import LoginPage from "./Pages/LoginPage";
import UserPage from "./Pages/UserPage";

test('Render App.js', () => {
    const rnd = render(<App/>);
    expect(rnd).toBeDefined();
});

test('Render AddUsers.js', () => {
    const rnd = render(<AddUsers/>);
    expect(rnd).toBeDefined();
});

test('Render NavBar.js', () => {
    const rnd = render(<NavBar/>);
    expect(rnd).toBeDefined();
});

// test('Render ViewUsers.js', () => {
//     const rnd = render(<ViewUsers/>);
//     expect(rnd).toBeDefined();
// });

test('Render LoginPage.js', () => {
    const rnd = render(<LoginPage/>);
    expect(rnd).toBeDefined();
});

// test('Render UserPage.js', () => {
//     const rnd = render(<UserPage/>);
//     expect(rnd).toBeDefined();
// });