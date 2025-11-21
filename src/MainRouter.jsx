import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import AboutMe from "./components/AboutMe";
import Projects from './components/Projects';
import Services from './components/Services';
import ContactPage from "./components/ContactPage";
import ContactForm from "./components/ContactForm";
import Layout from "./components/Layout";
import AddProject from "./components/Form/AddProject";

function MainRouter(){
    return(
        <Layout>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/aboutme" element={<AboutMe/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="/contactpage" element={<ContactPage/>}/>
                <Route path="/contactform" element={<ContactForm/>}/>
                <Route path="/addproject" element={<AddProject/>}/>
            </Routes>
        </Layout>
    );
}

export default MainRouter;
