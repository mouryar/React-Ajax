import React, { Component } from 'react';
import axios from '../../axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

    state = {
        posts: [],
        selectPostId: null
    }

    componentDidMount(){
        axios.get('/posts')
                .then(response => {
                    const posts = response.data.slice(0,4);
                    const updatePost = posts.map(post =>{
                        return {...post,
                                author: 'Mourya'};
                    })
                    this.setState({posts: updatePost})
                    console.log(response);
                });
    }

    postSelectedhandler = (id) => {
        this.setState({selectPostId: id});
    }
    render () {
        const posts = this.state.posts.map(post => {
            return <Post key={post.id} 
                    title={post.title} 
                    author={post.author}
                    clicked= {() => this.postSelectedhandler(post.id)}/>;
        })
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost selectPostId={this.state.selectPostId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;