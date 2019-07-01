import React, { Component } from 'react'
import { connect } from 'react-redux';
import {getTodos} from './actions/todoActions'

class App extends Component {
    componentDidMount(){
        this.props.getTodos();
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <ul>
                    {
                        this.props.todos.map((todo, i)=> {
                            return(
                                <li key={i}>{todo.title}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

const mapState = state => {
    return{
        todos : state.todos
    }
}

const mapDispatch =  {
        getTodos
}

export default connect(mapState, mapDispatch)(App)