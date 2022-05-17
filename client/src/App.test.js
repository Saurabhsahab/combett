// mport ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./App.js";
import SignIn from "./SignIn.js";
import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="si" element={<SignIn />} />
      {/* <Route path="invoices" element={<Invoices />} /> */}
    </Routes>
  </BrowserRouter>
);
