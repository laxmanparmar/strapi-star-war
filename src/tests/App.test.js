import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import {
  ApolloProvider
} from "@apollo/client";
import App from '../App';
import client from '../apolloClient';

test('renders home page', () => {
  render(
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/Spacious/i);
  expect(linkElement).toBeInTheDocument();
});

test('should display 2 tabs', () => {
  render(
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
  );
  const planetTab = screen.getByText(/Planets/i);
  const characterTab = screen.getByText(/Characters/i);
  expect(planetTab).toBeInTheDocument();
  expect(characterTab).toBeInTheDocument();
});
