var CommentBox = React.createClass({
  render: function () {
    return (
      <div className="CommentBox">
        What is up, Sean? I am a freaking comment box, yo!
        <h1>Comments</h1>
        <CommentList />
        <CommentForm />
      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function() {
    return (
      <div className="commentList">
        <Comment author="Sean DaGreasa">This is a comment.</Comment>
        <Comment author="Luke Skywalker">This is another comment.</Comment>
      </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function() {
    return (
      <div className="commentForm">
        Hola! Mi llamo es La Pacina de Muerta!
      </div>
    );
  }
})

var Comment = React.createClass({
  render: function() {
    return(
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        {this.props.children}
      </div>
    );
  }
});




ReactDOM.render (
  <CommentBox />,
  document.getElementById('content')
)