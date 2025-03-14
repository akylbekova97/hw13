import TodoList from './TodoList'
import { Component } from 'react'
import TodoForm from './TodoForm'
import classes from './Todos.module.css'

class Todos extends Component {
	constructor(){
		super()
		this.state = {
			todoList: []
		}
	}

	addTodoHandler(el){
		this.setState((prevState) => ({
			todoList: [
				{ id: Math.random().toString(), title: el.title, date: el.date },
				...prevState.todoList
			]
		}))
	}

	render() {
		return(
			<div className={classes.container}>
				<TodoForm addTodo={this.addTodoHandler.bind(this)}/>
				<TodoList todo={this.state.todoList}/>
			</div>
		)
	}
}

export default Todos

