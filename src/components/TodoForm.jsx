import classes from './TodoForm.module.css'
import { Component } from "react";

class TodoForm extends Component {
	constructor() {
		super()
		this.state = {
			todo: '',
			todoDate: ''
		}
	}

	createTodoHandler = (e) => {
		this.setState({ todo: e.target.value })
	}

	dateChangeHandler = (e) => {
		this.setState({ todoDate: e.target.value })
	}

	submitHandler = (e) => {
		e.preventDefault()

		if (this.state.todo.trim().length === 0 || this.state.todoDate.length === 0) {
			alert('Fill in all fields')
			return
		}

		this.props.addTodo({ title: this.state.todo, date: this.state.todoDate.toString() })

		this.setState({ todo: '', todoDate: '' })
	}

	render() {
		return (
			<div className={classes.container}>
			<form onSubmit={this.submitHandler.bind(this)}>
				<input className={classes.title}
					value={this.state.todo}
					type='text'
					onChange={this.createTodoHandler.bind(this)}
				/>
				<input 
                    className={classes.title}
                    value={this.state.todoDate} 
                    type="date"
                    onChange={this.dateChangeHandler.bind(this)} 
                />
				<button className={classes.btn}>add todo</button>
			</form>
		</div>
		)
	}
}

