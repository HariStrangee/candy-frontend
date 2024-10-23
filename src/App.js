import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./Components/NavBar/navbar";
import ExplorePage from "./Components/ExplorePage/explore";
import Indexpage from "./Components/IndexPage/indexpage";
import Errorpage from "./Components/Errorpage/errorpg";
import Shop from "./Components/ShopPage/shop";
const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route exact path="/" Component={Indexpage} />
      <Route exact path="/explore" Component={ExplorePage} />
      <Route exact path="/shop" Component={Shop} />
      <Route path="*" Component={Errorpage} />
    </Routes>
  </BrowserRouter>
);

export default App;
