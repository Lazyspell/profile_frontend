import { gql, useQuery } from "@apollo/client";
import { Graphql_Query } from "../../client/profileQuerys";

let testValue = "jeremy498081";
const testQuery = Graphql_Query(testValue);
const TEST_QUERY = gql`
    {
        profileId(id: "jeremy498081") {
            id
            name {
                first_name
                last_name
            }
            location {
                state
                city
                zip_code
            }
            email
        }
    }
`;

const Home = () => {
    const { data, loading, error } = useQuery(TEST_QUERY);

    console.log(data);
    if (loading) return "Loading...";
    if (error) return <pre>{error.message}</pre>;
    return (
        <>
            <h1></h1>
        </>
    );
};

export default Home;
