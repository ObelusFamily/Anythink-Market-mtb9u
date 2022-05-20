import { React, useState } from "react";
import logo from "../../imgs/logo.png";
import Search from "../search/search";

const Banner = (props) => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span id="get-part">A place to</span>
          <span onClick={(e) => setVisible(!visible)}> get</span>
          <Search visible={visible} onSearch={props.onSearch} />
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
