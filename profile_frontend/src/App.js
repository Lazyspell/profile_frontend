import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import { Loader } from "./components/loader/loader.component";
import { AnimatedSphere } from "./components/animation/cloudSphere/cloudSphere.component";
import { About } from "./routes/about/about.component";
import { Skills } from "./routes/skills/skills.component";
import { Work } from "./routes/work/work.component";
import { Contact } from "./routes/contact/contact.component";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/work" element={<Work />} />
                <Route path="/contact" element={<Contact />} />
            </Route>
        </Routes>
    );
}

export default App;
