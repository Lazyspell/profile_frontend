import { createContext, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";

import { GET_PROFILE_BY_ID } from "../client/profileQuery";

export const ProfileContext = createContext({
    fullName: {},
    location: {},
    email: "",
    profileId: "",
});

export const ProfileProvider = ({ children }) => {
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
            setLocation(location);
            setEmail(email);
            setProfileId(profileId);
        }
    }, [data]);

    const [fullName, setFullName] = useState({});
    const [location, setLocation] = useState({});
    const [email, setEmail] = useState("");
    const [profileId, setProfileId] = useState("");

    const value = {
        fullName,
        location,
        email,
        profileId,
    };

    if (loading) return "Loading...";
    if (error) return <pre>{error.message}</pre>;
    return (
        <ProfileContext.Provider value={value}>
            {children}
        </ProfileContext.Provider>
    );
};
