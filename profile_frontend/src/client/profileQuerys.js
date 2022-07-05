import { gql } from "@apollo/client";
export const Graphql_Query = (value) => {
    return gql`
        {
            profileId(id: ${value}) {
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
};
