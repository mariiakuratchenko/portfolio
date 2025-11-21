import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import AboutMe from "./components/AboutMe";
import Projects from './components/Projects';
import Services from './components/Services';
import ContactPage from "./components/ContactPage";
import Layout from "./components/Layout";
import UserForm from "./components/UserForm";
import AddUser from "./components/UserForm/AddUser";
import EditUser from "./components/UserForm/EditUser";
import UserList from "./components/UserList";
import Form from "./components/Form";
import AddProject from "./components/Form/AddProject.jsx";
import EditProject from "./components/Form/EditProject";
import ProjectList from "./components/ProjectList";
import AddService from "./components/Form/AddService";
import EditService from "./components/Form/EditService";
import ServiceList from "./components/ServiceList";
import AddContact from "./components/Form/AddContact";
import EditContact from "./components/Form/EditContact";
import ContactList from "./components/ContactList";

function MainRouter(){
    return(
        <Layout>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/aboutme" element={<AboutMe/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="/contactpage" element={<ContactPage/>}/>
                <Route path="/userform" element={<UserForm/>}/>
                <Route path="/adduser" element={<AddUser/>}/>
                <Route path="/edituser/:id" element={<EditUser/>}/>
                <Route path="/userlist" element={<UserList/>}/>
                <Route path="/form" element={<Form/>}/>
                <Route path="/addproject" element={<AddProject/>}/>
                <Route path="/editproject/:id" element={<EditProject/>}/>
                <Route path="/projectlist" element={<ProjectList/>}/>
                <Route path="/addservice" element={<AddService/>}/>
                <Route path="/editservice/:id" element={<EditService/>}/>
                <Route path="/servicelist" element={<ServiceList/>}/>
                <Route path="/addcontact" element={<AddContact/>}/>
                <Route path="/editcontact/:id" element={<EditContact/>}/>
                <Route path="/contactlist" element={<ContactList/>}/>
            </Routes>
        </Layout>
    );
}

export default MainRouter;
