import Login from './../pages/login'
import Register from './../pages/register'
import Buttons from '../pages/ui/button';
/**
 * Router Model
 */
export default [
    {path: '/admin/login', name: 'Login', component: Login, auth: true },
    {path: '/admin/register', name: 'Register', component: Register, auth: true },
    {path: 'admin/ui/button', name: 'Buttons', component: Buttons},
]