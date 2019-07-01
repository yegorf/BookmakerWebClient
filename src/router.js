import Vue from 'vue'
import Router from 'vue-router'
import LoginForm from "./components/autorization/LoginForm";
import RegistrationForm from "./components/autorization/RegistrationForm";
import SportForm from "./components/directories/SportForm";
import TeamForm from "./components/directories/TeamForm";
import AddEventForm from "./components/admin/AddEventForm";
import StartPageAdmin from "./components/main_pages/StartPageAdmin";
import StartPage from "./components/main_pages/StartPage";
import StartPageUser from "./components/main_pages/StartPageUser";
import UsersPanel from "./components/admin/UsersPanel";
import UserAccount from "./components/user/UserAccount";
import MakeBets from "./components/events/MakeBets";
import TransactionForm from "./components/admin/TransactionForm";
import BetsPanel from "./components/user/BetsPanel";
import EventResultsPanel from "./components/admin/EventResultsPanel";

Vue.use(Router);

export default new Router({
    routes: [
        {path: '/login', component: LoginForm},
        {path: '/registration', component: RegistrationForm},
        {path: '/', component: StartPage},

        {path: '/sports', component: SportForm},
        {path: '/teams', component: TeamForm},

        {path: '/events', component: AddEventForm},
        {path: '/admin', component: StartPageAdmin},
        {path: '/user', component: StartPageUser},

        {path: '/users', component: UsersPanel},
        {path: '/results', component: EventResultsPanel},

        {path: '/bets', component: BetsPanel},
        {path: '/userAccount', component: UserAccount},
        {path: '/makingBets', component: MakeBets},
        {path: '/transactions', component: TransactionForm}
    ]
})
