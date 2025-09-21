import { Routes, Route } from "react-router-dom";
//router allows to navigate pages
import Home from './components/Home';
import AboutMe from "./components/AboutMe";
import Projects from './components/Projects';
import Services from './components/Services';
import ContactPage from "./components/ContactPage";
import Layout from "./components/Layout";

function MainRouter(){
    return(
        <Layout>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/aboutme" element={<AboutMe/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="/contactpage" element={<ContactPage/>}/>
            </Routes>
        </Layout>
    );
}

export default MainRouter;
