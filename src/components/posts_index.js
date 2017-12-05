import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        <h4>posts index</h4>
      </div>
    );
  }
}

export default connect(null, { fetchPosts })(PostsIndex);
