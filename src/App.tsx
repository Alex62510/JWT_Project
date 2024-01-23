import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home.tsx";
import {About} from "./pages/About.tsx";
import {SingIn} from "./pages/SingIn.tsx";
import {SingUp} from "./pages/SingUp.tsx";
import {Profile} from "./pages/Profile.tsx";
import {Header} from "./components/Header.tsx";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/about'} element={<About/>}/>
                <Route path={'/sing-in'} element={<SingIn/>}/>
                <Route path={'/sing-up'} element={<SingUp/>}/>
                <Route path={'/profile'} element={<Profile/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
