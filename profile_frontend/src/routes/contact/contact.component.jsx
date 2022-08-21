import { EmailForum } from "../../components/email-forum/email-forum.component";
import GoogleMapComponent from "../../components/google-maps/google-maps.component";
import "./contact.styles.scss";
export const Contact = () => {
    console.log(process.env);
    console.log("test");
    return (
        <>
            <div className="contact-container">
                <div className="contact-left">
                    <div className="contact-center-left">
                        <EmailForum />
                    </div>
                </div>
                <div className="contact-right">
                    <GoogleMapComponent />
                </div>
            </div>
        </>
    );
};
