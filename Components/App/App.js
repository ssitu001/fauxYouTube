import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import { Row, Col } from 'react-bootstrap';

import Nav from '../Nav/Nav';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import VideoList from '../VideoList/VideoList';

import store from '../../Store/store';
import { handleSearch } from '../../Actions/search.js';

class App extends Component {

  componentDidMount() {
    // this.props.handleSearchInputChange('warriors')
    console.log('store', store)
    store.dispatch({type: 'VID_FETCH_REQUESTED', payload: { query: 'warriors'}})
  }

  render() {
    return (
      <div>
        <Row className="show-grid">
          <Nav />
        </Row>
        <Row className="show-grid">
          <Col sm={7}>
            <VideoPlayer />
          </Col>
          <Col sm={5}>
            <VideoList />
          </Col>
        </Row>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSearchInputChange: (video) => dispatch(handleSearch(video))
  }
};

export default connect(null, mapDispatchToProps)(App);
