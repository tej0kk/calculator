import { Routes, Route } from "react-router-dom"
import Splash from "./pages/Splash"
import Home from "./pages/Home";

function App() {
    return (
        <Routes>
            <Route path="/" Component={Splash} />
            <Route path="/home" Component={Home}/>
        </Routes>
    );
}

export default App