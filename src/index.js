//Define your routes here
import Navbar from  './views/layout/navbar'
//import Footer from  './views/layout/footer'

// Content
import HomePage from  '../src/views/home'
import SplashPage from  '../src/views/splash'
import AgentsPage from  '../src/views/agents'
import BrandsPage from  '../src/views/brands'
import ShowroomPage from  '../src/views/showroom'

if (module.hot) {
   module.hot.accept();
}

if (process.env.NODE_ENV !== 'production') {
   console.log('Looks like we are in development mode!');
}

//m.route.prefix('')

m.route(document.body.querySelector('#root'), '/splash', {
   '/splash': SplashPage,
   '/home': {
      render() {
         return [
            m(HomePage)
         ]
      }
   },
   '/brands': {
      render() {
         return [
            m(BrandsPage)
         ]
      }
   },
   '/brands/:brand': {
      render() {
         return [
            m(BrandsPage)
         ]
      }
   },
   '/agents': {
      render() {
         return [
            m(Navbar, { color: 'black' }),
            m(AgentsPage)
         ]
      }
   },
   '/showroom': {
      render() {
         return [
            m(ShowroomPage)
         ]
      }
   },
});
