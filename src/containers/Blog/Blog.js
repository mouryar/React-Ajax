import React, { Component } from 'react';
import { Route, NavLink, Switch}from 'react-router-dom' 
import Posts from '../Blog/Posts/Posts'
import NewPost from '../Blog/NewPost/NewPost'
import FullPost from '../Blog/FullPost/FullPost'
import './Blog.css';


class Blog extends Component {

    render () {
        
        return (
            <div>
                <header className='Blog'>
                    <nav>
                        <ul>
                            <li>
                                <NavLink to='/' exact>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to={{
                                     pathname: '/new-post',
                                     hash: '#submit',
                                     search: '?quicksubmit=true',
                                     activeClassName: 'active'
                                        }}>New Post</NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path='/' exact render={() => <h1>Mourya</h1>}/>
                <Route path='/new-post' render={() => <h1>Kumar Reddy</h1>}/> */}
                <Route path='/' exact component={Posts}/>
                <Switch>
                    <Route path='/new-post' component={NewPost}/>
                    <Route path='/:id' component={FullPost}/>
                </Switch>
            </div>
        );
    }
}

export default Blog;