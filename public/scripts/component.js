var CommentBox = React.createClass({
  render: function () {
    return (
      <div className="CommentBox">
        What is up, Sean? I am a freaking comment box, yo!
        <h1>Comments</h1>
        <CommentList data={this.props.data}/>
        <CommentForm />
      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map(function(comment){
      return (
        <Comment author={comment.author} key={comment.id}>
          {comment.text}
        </Comment>
      );
    });
    return (
      <div className="commentList">
        {commentNodes}
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
  rawMarkup: function() {
  var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
  return { __html: rawMarkup };
  },

  render: function() {
    return(
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    );
  }
});

var data = [
  {id: 1, author: "Bilbo Baggins", text: "I'm not a burglar!"},
  {id: 2, author: "Gandalf Gray", text: "You shall not pass!"}
];




ReactDOM.render (
  <CommentBox data={data} />,
  document.getElementById('content')
)