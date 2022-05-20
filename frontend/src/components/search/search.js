import agent from "../../agent";
import { connect } from "react-redux";
import { SEARCH_CHANGED } from "../../constants/actionTypes";
import { React } from "react";

const mapDispatchToProps = (dispatch) => ({
  onSearch: (inputText, payload) =>
    dispatch({ type: SEARCH_CHANGED, inputText, payload }),
});

const Search = (props) => {
  const inputHandler = (e) => {
    //convert input text to lower case
    const lowerCase = e.target.value.toLowerCase();
    if (lowerCase.length > 2) {
      props.onSearch(lowerCase, agent.Items.all(null, lowerCase));
    }
  };

  if (props.visible) {
    return (
      <input
        type="text"
        id="search-box"
        placeholder="What is it that you trully desire?"
        onChange={inputHandler}
        name="s"
      />
    );
  } else {
    return null;
  }
};

export default connect(null, mapDispatchToProps)(Search);
