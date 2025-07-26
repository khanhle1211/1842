// src/router/index.js
import Vue from 'vue'
import Router from 'vue-router'
import EmployeeList from '../components/EmployeeList.vue'
import EmployeeForm from '../components/EmployeeForm.vue'
import AboutUs from '../components/AboutUs.vue'
import TestPage from '../components/TestPage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: EmployeeList
    },
    {
      path: '/add',
      name: 'AddEmployee',
      component: EmployeeForm
    },
    {
      path: '/edit/:id',
      name: 'EditEmployee',
      component: EmployeeForm,
      props: true
    },
    {
      path: '/about',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/test',
      name: 'TestPage',
      component: TestPage
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
