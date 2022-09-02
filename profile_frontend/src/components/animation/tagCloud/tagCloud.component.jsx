import { useContext } from "react";
import TagCloud from "react-tag-cloud";
import randomColor from "randomcolor";

import { ProfileContext } from "../../../contexts/profile.context";

export const TagCloudAnimation = () => {
    const { experience } = useContext(ProfileContext);

    const tagCloudArray = [];
    const experienceArray = experience[0].tech_used;

    for (let i of experienceArray) {
        const newObject = {
            value: i,
            count: Math.floor(Math.random() * 40) + 30,
        };

        tagCloudArray.push(newObject);
    }

    return (
        <>
            <TagCloud
                style={{
                    fontFamily: "sans-serif",
                    fontSize: 30,
                    fontWeight: "bold",
                    fontStyle: "italic",
                    color: () => randomColor(),
                    padding: 5,
                    width: "100%",
                    height: "100%",
                }}
            >
                <div>react</div>
                <div>tag</div>
                <div>cloud</div>
            </TagCloud>
        </>
    );
};
