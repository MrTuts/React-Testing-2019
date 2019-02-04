import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentList extends Component {
  render() {
    return (
      <div>
        <p>CommentList</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  comments: state.comments,
});

export default connect(mapStateToProps)(CommentList);
