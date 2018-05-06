import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {

    state = {
        lodedPost : null
    }

    componentDidUpdate(){
        if(this.props.selectPostId && 
            (!this.state.lodedPost || 
                (this.state.lodedPost.id !== this.props.selectPostId))){
            axios.get('/posts/'+this.props.selectPostId)
                .then(response => {
                    this.setState({lodedPost: response.data})
                }).catch(response =>{
                    console.log(response);
                });
        }
    }

    deletePostHandler = () => {
        axios.delete('/posts/'+this.props.selectPostId)
            .then(response => {
                console.log(response);
            }).catch(response => {
                console.log(response);
            });
    }

    render () {

        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
        if(this.props.selectPostId){
            post = <p style={{textAlign: 'center'}}>Loading ...</p>;
        }
        if(this.state.lodedPost){
            post = (
                <div className="FullPost">
                    <h1>{this.state.lodedPost.title}</h1>
                    <p>{this.state.lodedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.deletePostHandler}>Delete</button>
                    </div>
                </div>
            );
        }
        
        return post;
    }
}

export default FullPost;