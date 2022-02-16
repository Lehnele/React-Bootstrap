import { NavBar } from './components/Navbar';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Profile } from "./pages/Profile";
import { Alert } from "./components/Alert";
import {AlertState} from "./context/alert/AlertState";
import {GithubState} from "./context/github/GithubState";

function App() {
    return (
        <GithubState>
            <AlertState>
                <BrowserRouter>
                    <NavBar/>
                    <div className='container pt-4'>
                        <Alert alert={{text: 'Test alert'}}/>
                        <Routes>
                            <Route path='/' element={<Home/>}/>
                            <Route path='/about' element={<About/>}/>
                            <Route path='/profile/:name' element={<Profile/>}/>
                        </Routes>
                    </div>
                </BrowserRouter>
            </AlertState>
        </GithubState>
    );
}

export default App;
