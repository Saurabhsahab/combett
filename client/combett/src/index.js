import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
// import Home from "./App.js";
import SignIn from "./SignIn.js";
import Default from "./Default.js";
// import Expenses from "./routes/expenses";
// import Invoices from "./routes/invoices";
import Home from "./Home.js";
import Navbar from "./Navbar.js";
import CreatePost from "./CreatePost.js";
import { AnimatePresence } from "framer-motion";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <AnimatePresence>
  {/* <Component key={router.route} {...pageProps} /> */}

  <BrowserRouter>
  {/* <Navbar /> */}
    <Routes>

      {/* <Route path="/" element={<Navbar />} /> */}
      <Route path="/si" element={<SignIn />} />
      <Route path="/create" element={<CreatePost />} />

      <Route path="/home" element={<Home />} />

      <Route path="*" element={<Default/>} />

      {/* <Redirect from='default' /> */}
      {/* <Route path="" element={<SignIn />} /> */}

      {/* <Route path="invoices" element={<Invoices />} /> */}
    </Routes>
  </BrowserRouter>
  </AnimatePresence>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
