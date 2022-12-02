import {render, screen} from '@testing-library/react';
import App from './App';

test('Render App.js', () => {
    const rnd = render(<App/>);
    expect(rnd).toBeDefined();
});


