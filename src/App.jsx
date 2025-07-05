import Navbar from './components/navbar/navbar';
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from './pages/home.jsx';
import Projects from './pages/projects.jsx';
import Resume from './pages/resume.jsx';
import Contact from './pages/contact.jsx';
import Error404 from './pages/error404.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/projects",
    element: <Projects />
  },
  {
    path: "/resume",
    element: <Resume />
  },
  {
    path: "/contact",
    element: <Contact />
  },
  {
    path: "*",
    element: <Error404 />
  }
]);

const App = () => {
  return (
    <div>
      <Navbar />
      <RouterProvider router={router} />
    </div>
  )
};

export default App;
