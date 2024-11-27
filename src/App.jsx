import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import { Home, About, Projects, Contact, Maintenance } from './pages';
import Navbar from './components/Navbar';

const links = [
  {
    name: 'Home', 
    href: '/',
    element: <Home/>,
  },
  {
    name: 'About',
    href: '/about',
    element: <About/>,
  },
  {
    name: 'Projects', 
    href: '/projects', 
    element: <Projects/>,
  },
  {
    name: 'Contact',
    href: '/contact',
    element: <Contact/>,
  },
  {
    name: 'Maintenance',
    href: '/projects/maintenance',
    element: <Maintenance/>,
  },
];

const Main = () => {
  const location = useLocation();

  const isMaintenance = location.pathname === '/projects/maintenance';

  return (
    <main className={`min-h-screen ${isMaintenance ? 'bg-white' :'bg-slate-300/20'}`}>
        <Navbar />
        <Routes>
          {links.map((link) => (
            <Route key={link.name} path={link.href} element={link.element} />
          ))}
        </Routes>
    </main>
  );
}

const App = () => {
  return (
    <Router>
      <Main />
    </Router>
  );
}

export default App;