import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/Home/home';
import Useraccount from './components/Useraccount/useraccount';

function App() {
 let router = createBrowserRouter([
    {
path: "/",
element: <Home />,
    },

    {
      path: "useraccount",
      element: <Useraccount />,
          },

  ])
  return (
<div className='App'>
<RouterProvider router= {router} />

</div>
  );
}
 
export default App;
