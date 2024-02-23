import React from 'react'
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "./App.css"
import Services from './Services.jsx';
import Aboutus from './Aboutus.jsx';
import Donerreg from './Donerreg.jsx';
import Donerlog from './donerlog.jsx';
import Relog from './relog.jsx';
import Rereg from './rereg.jsx';
import Ngolog from './ngo.jsx';
import Blood from './Blood.jsx';
import Organs from './Organs.jsx';
import DonarSelect from './donarselect.jsx';
import ContactUs from './ContactUs.jsx';
import DetailsForm from './DetailsForm.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/contact",
    element: <ContactUs/>
  },
  {
    path: "/Details",
    element: <DetailsForm/>
  },
  {
    path: "donerlog",
    element: <Donerlog/>,
  },
  {
    path: "ngolog",
    element: <Ngolog/>,
  },
  {
    path: "relog",
    element: <Relog/>,
  },
  {
    path: "ddonate",
    element: <DonarSelect/>,
  },
  {
    path: "rereg",
    element: <Rereg/>,
  },

  {
    path: "about",
    element: <Aboutus/>,
  },
  {
    path: "donerreg",
    element: <Donerreg/>,
  }
  ,
  {
    path: "organ",
    element: <Organs/>,
  },
  {
    path:"service",
    element:<Services/>
  },{
    path:"blood",
    element:<Blood/>
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
