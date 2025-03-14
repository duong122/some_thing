import { html } from '../core.js'
import TodoItem from './TodoItem.js'
import { connect } from '../store.js'

function TodoList( { todos, filter, filters, editIndex} ) {
    console.log(todos)
    return html`
        <section class="main">
            <input 
                id="toggle-all" 
                class="toggle-all"
                type="checkbox"
                ${todos.every(filters.completed) && 'checked'}
                onchange="dispatch('toggleAll', this.checked)"
            >
            <label for="toggle-all">Mark all as complete</label>
            <ul class="todo-list">
                ${todos.filter(filters[filter]).map((todo, index) => TodoItem( {todo, index } ))}
			</ul>
		</section>
    `
}

export default connect()(TodoList)