import React from 'react';
import './Search.css';
import { connect } from 'react-redux';

// action dispatchers
import { handleSearch } from '../../Actions/search.js';

// const handleChange = (value) => {
//   console.log('value', value)
// }

const Search = ({handleSearchInputChange}) => (
  <div className="search-bar form-inline">
    <input
      className="form-control"
      type="text"
      onChange={(e) => handleSearchInputChange(e.target.value)}
    />
    <button className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
);

// const mapStateToProps = (state) => ({ });

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSearchInputChange: (video) => dispatch(handleSearch(video))
  }
};
export default connect(null, mapDispatchToProps)(Search);
