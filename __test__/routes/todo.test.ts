// Not working yet

import request from "supertest"
import app from "../../src/app"
import { ToDo } from "../../src/types/todo"
import { getToDoById, getTodos, addTodo } from "../../src/services/data"
import { Router } from "express";

const currentDate = new Date();
const oneWeekLater = new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000); // 7 Tage in Millisekunden

const mockTodos: ToDo[] = [
    {
        id: 1, toDo: "test1", assignee: "test1", owner: "TestUser1",
        deadLine: oneWeekLater,
        status: "not started"
    },
    {
        id: 2, toDo: "test2", assignee: "test2", owner: "TestUser2",
        deadLine: oneWeekLater,
        status: "not started"
    }
];

jest.mock("../../services/data", () => ({
    getTodos: jest.fn(() => mockTodos),
    getToDoById: jest.fn(id => mockTodos.find(note => note.id === id)),
    addTodo: jest.fn()
}))