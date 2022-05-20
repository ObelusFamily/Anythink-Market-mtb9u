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
          <span id="get-part" onClick={(e) => setVisible(!visible)}>A place to get</span>
          <Search visible={visible} onSearch={props.onSearch} />
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
