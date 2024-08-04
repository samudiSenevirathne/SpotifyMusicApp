import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { PropsWithChildren } from 'react';

const client = new ApolloClient({
  uri: 'https://antanandavo.us-east-a.ibm.stepzen.net/api/oldfashioned-aardvark/graphql',
  headers: {
    Authorization:
      'apikey antanandavo::local.net+1000::9b6d1da77813be8b96418cd003ce5c3b933f9660398d41716ff79efc0d40aae8',
  },
  cache: new InMemoryCache(),
});

const ApolloClientProvider = ({ children }: PropsWithChildren) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloClientProvider;
;