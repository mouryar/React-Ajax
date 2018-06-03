import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import axios from '../../../axios';
import Post from '../../../components/Post/Post'
import './Posts.css'


class Posts extends Component{

    state = {
        posts: []
    }

    postSelectedhandler = (id) => {
        this.setState({selectPostId: id});
    }

    componentDidMount(){
        console.log(this.props);
        axios.get('/posts')
                .then(response => {
                    const posts = response.data.slice(0,4);
                    const updatePost = posts.map(post =>{
                        return {...post,
                                author: 'Mourya'};
                    })
                    this.setState({posts: updatePost})
                });
    }


    render(){

        const posts = this.state.posts.map(post => {
            return (
            <Link key={post.id} to= {"/" + post.id}>
                <Post  
                        title={post.title} 
                        author={post.author}
                clicked= {() => this.postSelectedhandler(post.id)}/>
            </Link>)
        });
       return (<section className="Posts">
                    {posts}
              </section>); 
        
    }
}

export default Posts;