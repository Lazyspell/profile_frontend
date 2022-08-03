import "./skills-item.styles.scss";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import { Button } from "../../components/button/button.component";

export const SkillItem = ({ inputSkills }) => {
    const { tech_name, years_of_experience, tech_description, image_url } =
        inputSkills;
    console.log(inputSkills);
    return (
        <Card sx={{ maxWidth: 300 }} style={{ backgroundColor: "black" }}>
            <CardMedia
                component="img"
                height="140"
                image={image_url}
                alt={tech_name}
                style={{ backgroundColor: "black" }}
            />
            <CardContent>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    style={{ backgroundColor: "black" }}
                    color="white"
                >
                    {tech_name}
                </Typography>
                <Typography
                    variant="body2"
                    color="white"
                    style={{ backgroundColor: "black" }}
                >
                    {tech_description}
                </Typography>
                <br></br>
                <Typography
                    variant="body2"
                    color="white"
                    style={{ backgroundColor: "black" }}
                    className="test"
                >
                    Years of Experience: {years_of_experience}
                </Typography>
            </CardContent>
            <CardActions>
                <Button>Learn More</Button>
            </CardActions>
        </Card>
    );
};
