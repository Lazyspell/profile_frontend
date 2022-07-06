import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { GET_PROFILE_BY_ID } from "../../client/profileQuerys";

const Home = () => {
    const { data, loading, error } = useQuery(GET_PROFILE_BY_ID, {
        variables: {
            id: "jeremy498081",
        },
    });

    useEffect(() => {
        if (data) {
            const {
                profileId: { name },
            } = data;

            setFullName(name);
        }
    }, [data]);

    const [fullName, setFullName] = useState({});

    if (loading) return "Loading...";
    if (error) return <pre>{error.message}</pre>;
    return (
        <>
            <h1>
                {fullName.first_name} {fullName.last_name}
            </h1>
        </>
    );
};

export default Home;
