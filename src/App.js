import React, { lazy, Suspense, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body  from './components/Body';
import Contact from './components/Contact';
// import About from './components/About';
import Error from './components/Error';
import { createBrowserRouter,Outlet,RouterProvider } from 'react-router-dom';
import RestrauntMenu from './components/RestrauntMenu';
import UserContext from './utils/UserContext';
const About = lazy(() => import('./components/About'));
const AppLayout = () => {
  const [userName, setUserName] = useState();
  useEffect(() => {
    setUserName('Rahul');
  },[])
  return (
    <UserContext.Provider value={{loggedInUser: userName,setUserName}}>
    <div className='app'>
      <Header />
      <Outlet/>
    </div>
    </UserContext.Provider>
  );
}

const appRoute = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Body />
      },
      {
        path: 'about',
        element: <Suspense fallback={<h1>Loading...</h1>}><About /></Suspense>
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'restraunt/:id',
        element: <RestrauntMenu />
      },
    ],
    errorElement: <Error />,
  },
 
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRoute} />);