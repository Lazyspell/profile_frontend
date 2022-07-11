import { useEffect } from "react";
import TagCloud from "TagCloud";

import "./cloudSphere.animation.css";

export const AnimatedSphere = () => {
    const myTags = [
        "JavaScript",
        "CSS",
        "HTML",
        "React",
        "Python",
        "Java",
        "git",
        "django",
        "Node.js",
        "OpenCV",
        "MySQL",
        "jQuery",
    ];

    useEffect(() => {
        TagCloud(".content", myTags, {
            // radius in px
            radius: 100,
            // animation speed
            // slow, normal, fast
            maxSpeed: "fast",
            initSpeed: "fast",
            // 0 = top
            // 90 = left
            // 135 = right-bottom
            // direction: 135,
            // interact with cursor move on mouse out
            // keep: true,
            // radius: screen.width > 500 ? 300 : 100,
            // maxSpeed: "fast",
            // initSpeed: "normal",
            // direction: 100,
            // keep: false,
            useContainerInlineStyles: true,
            // sectionContainer: "about",
        });
    }, [myTags]);

    return (
        <>
            <div>
                <span className="content"></span>;
            </div>
        </>
    );
};
