import * as fs from 'node:fs'
import { ToDo } from '../types/todo'
import { todo } from 'node:test';

type TodosRaw = {
    todos: ToDo[];
}

export function getTodos(): ToDo[] {
    const todosRaw = fs.readFileSync('data/todo.json', 'utf8');
    const todosData = JSON.parse(todosRaw) as TodosRaw;
    const todosArray = todosData.todos;
    return todosArray;
}

export function getToDoById(id: number): ToDo | undefined {
    const todos = getTodos();
    const todo = todos.find(todo => todo.id === id);
    return todo;
}

export function writeTodosToFile(oldTodos: ToDo[]): void {
    const newTodos: TodosRaw = { todos: oldTodos };
    fs.writeFileSync('data/todo.json', JSON.stringify(newTodos));
}

export function addTodo(toDo: string, deadLine: Date, assignee: string, owner: string, status: "not started" | "in progress" | "ready for review" | "in review" | "done" = "not started"): void {
    const oldTodos = getTodos();
    const id = Math.max(...oldTodos.map(todo => todo.id), 0) + 1;
    const newTodo: ToDo = new ToDo(id, toDo, deadLine, assignee, owner, status);
    oldTodos.push(newTodo);
    writeTodosToFile(oldTodos);
}

export function updateTodo(id: number, toDo: string, deadLine: string, assignee: string, owner: string, status: "not started" | "in progress" | "ready for review" | "in review" | "done"): void {
    const oldTodos = getTodos();
    const filteredTodos = oldTodos.filter(todo => todo.id !== id);
    const newTodo: ToDo = new ToDo(id, toDo, new Date(deadLine), assignee, owner, status);
    filteredTodos.push(newTodo);
    writeTodosToFile(filteredTodos);
}

export function deleteTodoById(id: number): void {
    const oldTodos = getTodos();
    const filteredTodos = oldTodos.filter(todo => todo.id !== id);
    writeTodosToFile(filteredTodos);
}

export function getTodosByAssignee(assignee: string): ToDo[] {
    const todos: ToDo[] = getTodos();
    return todos.filter(todo => todo.assignee === assignee);
}

export function getTodosByOwner(owner: string): ToDo[] {
    const todos: ToDo[] = getTodos();
    return todos.filter(todo => todo.owner === owner);
}