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
        What up, dude? I am a comment list!
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




ReactDOM.render (
  <CommentBox />,
  document.getElementById('content')
)