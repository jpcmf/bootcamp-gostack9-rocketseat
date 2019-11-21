import React from 'react';

function Post(props) {
  return (
    <div className="post">
      
      <div className="post-header">
        <img className="avatar" src={props.data.author.avatar} alt={props.data.author.name} />
        <div className="details">
          <span>{props.data.author.name}</span>
          <span>{props.data.date}</span>
        </div>
      </div>

      <p className="post-content">{props.data.content}</p>

      <div className="post-comments">
        <div className="divider"></div>
        {props.data.comments.map(comment => (
          <div key={comment.id} className="comment">
            <img src={comment.author.avatar} alt={comment.author.name} className="avatar"/>
            <p>
              <span>{comment.author.name}</span>
              {comment.content}
            </p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Post;