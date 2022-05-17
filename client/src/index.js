import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
// import Home from "./App.js";
import Allpeople from "./Allpeople"
import SignIn from "./SignIn.js";
import Default from "./Default.js";
// import EditSelf from "./EditSelf";
import Home from "./Home.js";
import Navbar from "./Navbar.js";
import CreatePost from "./CreatePost.js";
import { AnimatePresence } from "framer-motion";
import BlogOpen from "./BlogOpen"
import Drawer from "./Drawer"
import SelfUser from "./SelfUser.js";
import People from "./People";
import Loading from "./Loading";
import "./home.css"
import UserPorfile from "./UserPorfile";
import Myprofile from "./Myprofile";
import EditSelf from "./EditSelf";
import EditPost from "./EditPost";
const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <AnimatePresence>
    <div className="main">


      {/* <Component key={router.route} {...pageProps} /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />

          <Route exact path="/people" element={<People />} />

          <Route exact path="/Blogs" element={<Home />} />
          <Route path="/Blogs/:code" element={<BlogOpen />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/self" element={<SelfUser />} />
          <Route path="/loading:email" element={<Loading />} />
          <Route path="*" element={<Default />} />
          <Route path="/user/:id" element={<UserPorfile />} />
          <Route path="/myprofile" element={<Myprofile/>} />
          <Route path="/editself" element={<EditSelf/>} />
          <Route path="/editpost/:id" element={<EditPost/>} />

          {/* <Route path="" element={<SignIn />} /> */}

          {/* <Route path="invoices" element={<Invoices />} /> */}
        </Routes>

      </BrowserRouter>
    </div>
  </AnimatePresence>
);


