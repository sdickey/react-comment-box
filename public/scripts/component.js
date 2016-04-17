var CommentBox = React.createClass({
  loadCommentsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  getInitialState: function() {
    return { data: [] };
  },

  componentDidMount: function() {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },

  render: function () {
    return (
      <div className="CommentBox">
        What is up, Sean? I am a freaking comment box, yo!
        <h1>Comments</h1>
        <CommentList data={this.state.data}/>
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
  getInitialState: function() {
    return { author: '', text: '' };
  },

  handleAuthorChange: function(e) {
    this.setState({ author: e.target.value });
  },

  handleTextChange: function() {
    this.setState({ text: e.target.value });
  },

  render: function() {
    return (
      <form className="commentForm">
        <input type="text" placeholder="Your name" onChange={ this.handleAuthorChange } />
        <br></br>
        <input type="text" placeholder="Say something..." onChange={ this.handleTextChange }/>
        <br></br>
        <input type="submit" value="Post"/>
      </form>
    );
  }
});

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
  <CommentBox url="/api/comments" />,
  document.getElementById('content')
)