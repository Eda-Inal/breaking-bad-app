import logo from './logo.svg';
import { createRoot } from "react-dom/client";
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
          <h1>Hello World</h1>
          <Link to="about">About Us</Link> {" "} {" "}
          <Link to="xella">Xella</Link> 
        </div>
      ),
    },
    {
      path: "about",
      element: <div>About</div>,
    },
    {
      path :"xella",
      element: <div>Xella</div>
    }
  ]);
  
  createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
  );
  return (
    <div className="App">
  
    </div>
  );
}

export default App;
