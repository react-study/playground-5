import React from 'react';
import ClassNames from 'classnames';

class Header extends React.Component{
    handleKeyDown = e => {
        const text = e.target.value;
        if(!text || e.keyCode !== 13) {
            return;
        }
        this.props.addTodo(text);
        e.target.value = '';
    }
    render(){
        const {
            isAllDone,
            toggleAll
        } = this.props;
        return (
            <header>
                <h1 className="todo-app__header">todos</h1>
                <input type="text" className="todo-app__new-todo" placeholder="what needs to be done?"
                    onKeyDown={this.handleKeyDown}
                />
                <button className = {ClassNames('toggle-all',{
                        checked: isAllDone
                    })}
                    onClick = {toggleAll}
                />
            </header>
        )
    }
}

export default Header;

/*
this 바인딩
1. constructor 내 this.handler = this.handler.bind(this);
2. this.handler.bind(this); / 매번 바인드가 실행 됨
3. arrow function
4. 메소드 자체를 arrow function
*/
