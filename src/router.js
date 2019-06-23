import Vue from 'vue'
import Router from 'vue-router'
import LoginForm from "./components/autorization/LoginForm";
import EventPanel from "./components/events/EventPanel";
import RegistrationForm from "./components/autorization/RegistrationForm";
import Directories from "./components/directories/Directories";
import SportForm from "./components/directories/SportForm";
import TeamForm from "./components/directories/TeamForm";
import AddEventForm from "./components/events/AddEventForm";
import StartPageAdmin from "./components/main_pages/StartPageAdmin";
import StartPage from "./components/main_pages/StartPage";
import StartPageUser from "./components/main_pages/StartPageUser";

Vue.use(Router);

export default new Router({
  routes: [
    {path: '/login', component: LoginForm},
    {path: '/registration', component: RegistrationForm},
    {path: '/', component: StartPage},

    {path: '/directories', component: Directories},
    {path: '/sports', component: SportForm},
    {path: '/teams', component: TeamForm},

    {path: '/events', component: AddEventForm},
    {path: '/admin', component: StartPageAdmin},
    {path: '/user', component: StartPageUser}
  ]
})
