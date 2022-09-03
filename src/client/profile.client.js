import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: "https://profile-backend-go-tpy8r.ondigitalocean.app/query",
    cache: new InMemoryCache(),
});
