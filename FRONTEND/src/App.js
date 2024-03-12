import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import NoPage from './pages/NoPage';
// import Home from './pages/Home';
// import AboutUs from './pages/AboutUs';
// import Clubs from './pages/Clubs';
// import Programs from './pages/Programs';
// import Contact from './pages/contactus';
// import Dashboard from './pages/Dashboard';
// import Login from './pages/Login';
// import Reset from './pages/ResetPassword';
// import Forgot from './pages/ForgotPassword';
const LazyHome = React.lazy(() => import('./pages/Home'))
const LazyPrograms = React.lazy(() => import('./pages/Programs'))
const LazyClubs = React.lazy(() => import('./pages/Clubs'))
const LazyAbout = React.lazy(() => import('./pages/AboutUs'))
const LazyNopage = React.lazy(() => import('./pages/NoPage'))
const LazyLogin = React.lazy(() => import('./pages/Login'))
const LazyContact = React.lazy(() => import('./pages/contactus'))
const LazyDash = React.lazy(() => import('./pages/dashboard1'))
const LazyForgot = React.lazy(() => import('./pages/ForgotPassword'))
const LazyReset = React.lazy(() => import('./pages/ResetPassword'))
const LazyEnroll = React.lazy(() => import('./pages/enrollment'))

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<LazyHome />} />
          <Route path="/programmes" element={<LazyPrograms />} />
          <Route path="/clubs" element={<LazyClubs />} />
          <Route path="/about" element={<LazyAbout />} />
          <Route path="/nopage" element={<LazyNopage />} />
          <Route path="/contact" element={<LazyContact />} />
          <Route path="/dashboard1" element={<LazyDash />} />
          <Route path="/login" element={<LazyLogin />} />
          <Route path="/reset" element={<LazyReset />} />
          <Route path="/forgot" element={<LazyForgot />} />
          <Route path="/enroll" element={<LazyEnroll />} />

        </Routes>
      </BrowserRouter>

    </div>

  )

}
