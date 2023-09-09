import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem';

export default function AppContent() {
const todoList = useSelector((state => state.todo.todoList));
console.log(todoList)

const sortedTodoList = [...todoList]
sortedTodoList.sort((a,b) => new Date(b.time) - new Date(a.time))

  return (
    <>
    {sortedTodoList && sortedTodoList.length > 0 ? 
    sortedTodoList.map((todo) => <TodoItem key={todo.id} todo={todo}/>) :
     'no todo list found'}
    </>
  )
}
