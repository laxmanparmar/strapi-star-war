import config from './config.json';
import {
    ApolloClient,
    InMemoryCache,
    createHttpLink
  } from "@apollo/client";
  import { setContext } from '@apollo/client/link/context';

  const httpLink = createHttpLink({
    uri: config.SERVER_URI
  });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: 'strapiBearerToken',
      }
    }
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  });

  export default client;
