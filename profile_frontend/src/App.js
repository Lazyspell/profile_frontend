import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import { Loader } from "./components/loader/loader.component";
import { AnimatedSphere } from "./components/animation/cloudSphere.component";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path="/checkout" element={<AnimatedSphere />} />
            </Route>
        </Routes>
    );
}

export default App;
