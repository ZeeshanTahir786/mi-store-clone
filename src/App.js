import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import PreNavbar from "./components/preNavbar/preNavbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Slider from "./components/Slider/Slider";
import data from "./data/data.json";
import Offers from "./components/Offers/Offers";
import Heading from "./components/Heading/Heading";
import StarProduct from "./components/StarProduct/StarProduct";
import HotAccessoriesMenu from "./components/HotAccessoriesMenu/HotAccessoriesMenu";
import HotAccessories from "./components/HotAccessoriesMenu/HotAccessories/HotAccessories";
import ProductReviews from "./components/ProductReviews/ProductReviews";
import Videos from "./components/Videos/Videos";

function App() {
  return (
    <Router>
      <PreNavbar />
      <Navbar />
      <Slider start={data.banner.start} />
      <Offers offers={data.offer} />
      <Heading text="STAR PRODUCTS" />
      <StarProduct starProduct={data.starProduct} />
      <Heading text="HOT ACCESSORIES" />
      <HotAccessoriesMenu />
      <Routes>
        <Route
          exact
          path="/music"
          element={
            <HotAccessories
              music={data.hotAccessories.music}
              musicCover={data.hotAccessoriesCover.music}
            />
          }
        ></Route>
        <Route
          exact
          path="/smartDevices"
          element={
            <HotAccessories
              music={data.hotAccessories.smartDevice}
              musicCover={data.hotAccessoriesCover.smartDevice}
            />
          }
        ></Route>
        <Route
          exact
          path="/home"
          element={
            <HotAccessories
              music={data.hotAccessories.home}
              musicCover={data.hotAccessoriesCover.home}
            />
          }
        ></Route>
        <Route
          exact
          path="/lifeStyle"
          element={
            <HotAccessories
              music={data.hotAccessories.lifeStyle}
              musicCover={data.hotAccessoriesCover.lifeStyle}
            />
          }
        ></Route>
        <Route
          exact
          path="/mobileAccessories"
          element={
            <HotAccessories
              music={data.hotAccessories.mobileAccessories}
              musicCover={data.hotAccessoriesCover.mobileAccessories}
            />
          }
        ></Route>
      </Routes>
      <Heading text="PRODUCT REVIEWS" />
      <ProductReviews productReviews={data.productReviews} />
      <Heading text="VIDEOS" />
      <Videos videos={data.videos} />
      <Heading text="IN THE PRESS" />
    </Router>
  );
}

export default App;
