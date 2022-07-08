import gql from "graphql-tag";

export const GET_PROFILE_BY_ID = gql`
    query findProfiles($id: ID!) {
        profileId(id: $id) {
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
            description
        }
    }
`;
