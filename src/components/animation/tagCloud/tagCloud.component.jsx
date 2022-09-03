import TagCloud from "react-tag-cloud";
import randomColor from "randomcolor";

export const TagCloudAnimation = ({ data }) => {
    return (
        <div className="tag-cloud">
            <TagCloud
                style={{
                    fontFamily: "sans-serif",
                    fontSize: 30,
                    fontWeight: "bold",
                    fontStyle: "italic",
                    color: () => randomColor(),
                    padding: 5,
                }}
            >
                {data.map((item, index) => (
                    <div key={index + 1}>{item}</div>
                ))}
            </TagCloud>
        </div>
    );
};
