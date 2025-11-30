import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import AboutMe from "./components/AboutMe";
import Projects from './components/Projects';
import Services from './components/Services';
import ContactPage from "./components/ContactPage";
import ContactForm from "./components/ContactForm";
import Contacts from "./components/Contacts";
import Users from "./components/Users";
import Layout from "./components/Layout";
import AddProject from "./components/Form/AddProject";
import EditProject from "./components/Form/EditProject";
import AddService from "./components/Form/AddService";
import EditService from "./components/Form/EditService";
import AddUser from "./components/Form/AddUser";
import EditUser from "./components/Form/EditUser";
import EditContact from "./components/Form/EditContact";

function MainRouter(){
    return(
        <Layout>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/aboutme" element={<AboutMe/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/addproject" element={<AddProject/>}/>
                <Route path="/editproject/:id" element={<EditProject/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="/addservice" element={<AddService/>}/>
                <Route path="/editservice/:id" element={<EditService/>}/>
                <Route path="/users" element={<Users/>}/>
                <Route path="/adduser" element={<AddUser/>}/>
                <Route path="/edituser/:id" element={<EditUser/>}/>
                <Route path="/contactpage" element={<ContactPage/>}/>
                <Route path="/contactform" element={<ContactForm/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
                <Route path="/editcontact/:id" element={<EditContact/>}/>
            </Routes>
        </Layout>
    );
}

export default MainRouter;
