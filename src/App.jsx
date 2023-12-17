import logo from './logo.svg';
import React from 'react';
import { createRoot } from "react-dom/client";
import Home from './pages/Home';
import { Provider } from 'react-redux'
import { store } from './redux/store';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Link to="home">Home</Link> 
        </div>
      ),
    },
    {
      path :"home",
      element: <div><Home/></div>
    }
  ]);
  
 
  const root = createRoot(document.getElementById('root'));

  root.render(
    <React.StrictMode>
      {/* Wrap the entire app with the Provider */}
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>
  );
  return (
    <div className="App">
  
    </div>
  );
}

export default App;
