import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPost, deletePost } from "../actions";

class PostsShow extends Component {
  componentDidMount(){
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  onDeleteClick() {
    const { id } = this.props.match.params;

    this.props.deletePost(id, () => {
      this.props.history.push("/");
    });
  }

  render() {
    const { post } = this.props;

    if (!post) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Link style={{marginTop:"10px", marginBottom:"10px"}} to="/" className="btn btn-primary">Back to Index</Link>
        <button style={{marginTop:"10px", marginBottom:"10px"}} className="btn btn-danger pull-xs-right" onClick={this.onDeleteClick.bind(this)}>Delete Post</button>
        <div style={{textAlign:"center"}}>
          <h2>{post.title}</h2>
          <h5>Categories: {post.categories}</h5>
          <p>{post.content}</p>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost } )(PostsShow);
