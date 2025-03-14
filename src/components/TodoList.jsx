import { Component } from 'react';
import classes from './TodoList.module.css'

class TodoList extends Component {

	render() {
		return(
			<>
				{this.props.todo.map(el => (
					<div className={classes.todo} key={el.id}>
						<span className={classes.title}>{el.title}</span>
						<span className={classes.date}>{el.date}</span>
					</div>
				))}
			</>
		)
	}

}

export default TodoList;




















// import { Component } from 'react'
// import classes from './TodoList.module.css'

// class TodoList extends Component {
// 	render() {
// 		return (
// 			<>
// 				{this.props.todo.map((el) => (
// 					<div className={classes.todo} key={el.id}>
// 						<span className={classes.title}>{el.title}</span>
// 						<span className={classes.date}>{el.date}</span>
// 					</div>
// 				))}
// 			</>
// 		)
// 	}
// }

// export default TodoList
