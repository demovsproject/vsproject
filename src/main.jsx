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
import Organs from './Organs.jsx';
import DonarSelect from './donarselect.jsx';
import ContactUs from './ContactUs.jsx';
import DetailsForm from './DetailsForm.jsx';
import DonarOrgans from './donarOrgans.jsx';
import Chalan from './Chalan.jsx';
import DonatedList from './DonatedList.jsx';
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
    path: "/organ-donate",
    element: <DonarOrgans/>
  },
  {
    path: "/blood-donate",
    element: <DetailsForm/>
  },
  {
    path: "/receipt",
    element: <Chalan/>,
  },
  {
    path: "/donationlists",
    element: <DonatedList/>,
  },
  {
    path: "/donerlog",
    element: <Donerlog/>,
  },
  {
    path: "/ngolog",
    element: <Ngolog/>,
  },
  {
    path: "relog",
    element: <Relog/>,
  },
  {
    path: "/ddonate",
    element: <DonarSelect/>,
  },
  {
    path: "/rereg",
    element: <Rereg/>,
  },

  {
    path: "/about",
    element: <Aboutus/>,
  },
  {
    path: "/donerreg",
    element: <Donerreg/>,
  }
,
  {
    path:"service",
    element:<Services/>
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
