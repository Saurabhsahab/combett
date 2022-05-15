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
// import {} from "@"
// import Expenses from "./routes/expenses";
// import Invoices from "./routes/invoices";
import Home from "./Home.js";
import Navbar from "./Navbar.js";
import CreatePost from "./CreatePost.js";
import { AnimatePresence } from "framer-motion";
import BlogOpen from "./BlogOpen"
import Drawer from "./Drawer"
import SelfUser from "./SelfUser.js";
const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <AnimatePresence>
    {/* <Component key={router.route} {...pageProps} /> */}
<BrowserRouter>
<Routes>
           {/* <Route path="/" element={<Drawer />} /> */}
           <Route path="/" element={<SignIn />} />
           <Route exact path="/Allpeople" element={<Allpeople />} />
  
        <Route exact path="/Blogs" element={<Home />} />
           <Route path="/Blogs/:code" element={<BlogOpen />} />

    
        {/* <Route path="/" element={<Navbar />} /> */}
        <Route path="/create" element={<CreatePost />} />
        <Route path="/self" element={<SelfUser />} />

        {/* <Route path="/blog/" element={<BlogOpen/>}/> */}
        <Route  path="*" element={<Default/>} />

        {/* <Redirect from='default' /> */}
        {/* <Route path="" element={<SignIn />} /> */}

        {/* <Route path="invoices" element={<Invoices />} /> */}
      </Routes>
    
    </BrowserRouter>
  </AnimatePresence>
);


