import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toDoName: ''
        };
        
    }

    handleChanges = e => {
        this.setState({ toDoName: e.target.value });
        console.log(this.state.toDoName);
    };

    handleSubmit = e => {
        console.log(this.props, 'handlesubmit')
        this.props.addTodo(e, this.state.toDoName)
        this.setState({ itemName: ''});
    }

    render() {
        console.log('rendering form');
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type='text'
                    name='todo'
                    value={this.state.toDoName}
                    onChange={this.handleChanges}
                />
                <button>Add</button>
            </form>
        );
    }
}

export default TodoForm;