


import React, { Component }from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import registerServiceWorker from './registerServiceWorker';

class Title extends Component {

    constructor(){
        super()
        this.state = {
            title : '小红书',
            count: 0

        }
    }

    changeTitle(){
        this.setState({
            title: '小黄书',

        })
    }
    handleClickOnLikeButton () {
        this.setState((prevState) => {
            return { count: 0 }
        })
        this.setState((prevState) => {
            return { count: prevState.count + 1 } // 上一个 setState 的返回是 count 为 0，当前返回 1
        })
        this.setState((prevState) => {
            return { count: prevState.count + 2 } // 上一个 setState 的返回是 count 为 1，当前返回 3
        })
        // 最后的结果是 this.state.count 为 3
    }
    render () {
        return (
            <h1 onClick={()=>this.handleClickOnLikeButton ()}> { this.state.count } </h1>
        )
    }
}

class Header extends Component {
    render () {
        return (
            <div>
                <Title />
                <h2>This is Header</h2>
            </div>
        )
    }
}

class Main extends Component {
    render () {
        return (
            <div>
                <h2>This is main content</h2>
            </div>
        )
    }
}

class Footer extends Component {
    render () {
        return (
            <div>
                <h2>This is footer</h2>
            </div>
        )
    }
}
/*
class Index extends Component {
    render () {
        return (
            <div>
                <Header />
                <Main />
                <Footer />
            </div>
        )
    }
}*/



const users = [
    { username: 'Jerry', age: 21, gender: 'male' },
    { username: 'Tomy', age: 22, gender: 'male' },
    { username: 'Lily', age: 19, gender: 'female' },
    { username: 'Lucy', age: 20, gender: 'female' }
]

class User extends Component {
    render () {
        let { user }  = this.props    // object deconstruction assignment , so we should add {} and use 'user' not others
        console.log(user)
        return (
            <div>
                <div>姓名：{user.username}</div>
                <div>年龄：{user.age}</div>
                <div>性别：{user.gender}</div>
                <hr />
            </div>
        )
    }
}

class Index extends Component {
    render () {
        return (
            <div>
                {users.map((user,i) => <User key={i} user={user} />)}
            </div>
        )
    }
}


ReactDOM.render(<Index />, document.getElementById('root'));

registerServiceWorker();
