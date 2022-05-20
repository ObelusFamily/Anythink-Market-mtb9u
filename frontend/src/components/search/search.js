import agent from "../../agent";
import { connect } from "react-redux";
import { SEARCH_CHANGED } from "../../constants/actionTypes";
import { React, useState } from "react";

const mapDispatchToProps = (dispatch) => ({
  onSearch: (inputText, payload) =>
    dispatch({ type: SEARCH_CHANGED, inputText, payload }),
});

const Search = (props) => {
  const [inputText, setInputText] = useState("");
  const inputHandler = (e) => {
    //convert input text to lower case
    const lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
    if (inputText.length > 2) {
      props.onSearch(inputText, agent.Items.all(null, inputText));
    }
  };

  return (
    <input
      type="text"
      id="search-box"
      placeholder="What is it that you trully desire?"
      onChange={inputHandler}
      name="s"
    />
  );
};

export default connect(null, mapDispatchToProps)(Search);
