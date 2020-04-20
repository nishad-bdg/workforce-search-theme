import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SearchSuggestionPage from '../views/SearchSuggestionPage'
import SearchResultCV from '../views/SearchResultCV'
import SearchJobResult from '../views/SearchJobResult'
import JobAlertDetails from '../components/JobAlertDetails'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/search-suggestion-page',
        name: 'SearchSugesstionPage',
        component: SearchSuggestionPage
    },
    {
        path: '/search-cv-result',
        name: 'SearchResultCV',
        component: SearchResultCV
    },
    {
        path: '/search-job-result',
        name: 'SearchJobResult',
        component: SearchJobResult
    },
    {
        path: '/job-alert-details',
        name: 'JobAlertDetails',
        component: JobAlertDetails
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router