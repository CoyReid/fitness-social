import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


//Learn what this is used for and implement unit testing when app is more complete
//Definitely look into unit testing and how to implement it. Ideally what I would like to do is write the tests first and then write the code to pass the tests.
//Look into testing library and jest
//Look into how to test the backend as well
//Try and use Selenium and other tools used at last job