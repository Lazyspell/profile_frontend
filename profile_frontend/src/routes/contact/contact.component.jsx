import GoogleMapComponent from "../../components/google-maps/google-maps.component";
import "./contact.styles.scss";
export const Contact = () => {
    console.log(process.env);
    console.log("test");
    return (
        <>
            <div className="contact-container">
                <div className="right">
                    <GoogleMapComponent />
                </div>
            </div>
        </>
    );
};
