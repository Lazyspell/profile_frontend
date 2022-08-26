import "./work-item.styles.scss";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { AnimatedSphere } from "../animation/cloudSphere/cloudSphere.component";

export const WorkItem = ({ inputWork }) => {
    const { company_name, years_worked, work_description, tech_used } =
        inputWork;

    return (
        <Card sx={{ maxWidth: 400 }} style={{ backgroundColor: "black" }}>
            <Typography
                variant="h4"
                component="div"
                color="white"
                style={{ backgroundColor: "black" }}
            >
                {company_name}
            </Typography>

            <Typography
                variant="body"
                component="div"
                color="white"
                style={{ backgroundColor: "black" }}
            >
                {work_description}
            </Typography>

            <Typography
                variant="body"
                component="div"
                color="white"
                style={{ backgroundColor: "black" }}
            >
                Years Worked: {years_worked}
            </Typography>
            <Typography
                variant="body"
                component="div"
                color="white"
                style={{ backgroundColor: "black" }}
            >
                Technology Used:{" "}
                <AnimatedSphere techList={tech_used} radius={100} />
            </Typography>
        </Card>
    );
};
