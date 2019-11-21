import React, { Component } from 'react';

import Post from './Post';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: "https://api.adorable.io/avatars/40/user1.png"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://api.adorable.io/avatars/40/user2.png"
            },
            content: "Conteúdo do comentário"
          },
          {
            id: 2,
            author: {
              name: "João Paulo Fricks",
              avatar: "https://api.adorable.io/avatars/40/user3.png"
            },
            content: "Eu quero saber também!"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "João Paulo Fricks",
          avatar: "https://api.adorable.io/avatars/40/user3.png"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://api.adorable.io/avatars/40/user2.png"
            },
            content: "Conteúdo do comentário"
          },
          {
            id: 2,
            author: {
              name: "Rafaella",
              avatar: "https://api.adorable.io/avatars/40/user4.png"
            },
            content: "Eu quero saber também!"
          }
        ]
      },
    ]
  }

  render() {
    const { posts } = this.state;

    return (
      <div className="postlist">
        {posts.map(post => <Post key={post.id} data={post} />)}
      </div>
    )    
  }
}

export default PostList;