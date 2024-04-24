import { Request, Response, Router } from 'express'
import { getTodos, getToDoById, addTodo, updateTodo, deleteTodoById } from '../services/data'
import { ToDo } from '../types/todo'
import { hasAuthentication } from '../middleware/auth'

export const todosRouter = Router();

todosRouter.post('/', hasAuthentication, (req: Request, res: Response) => {
    const { toDo, deadLine, assignee, owner } = req.body;

    addTodo(toDo, new Date(deadLine), assignee, owner);

    res.status(204).send();
});

todosRouter.get('/', hasAuthentication, (req: Request, res: Response) => {
    const user = req.headers.authorization!;
    const todos: ToDo[] = getTodos().filter((todo: { assignee: string; }) => todo.assignee === user);

    res.status(200).send(todos);
});

todosRouter.get('/:id', hasAuthentication, (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    const todo: ToDo | undefined = getToDoById(id);

    if (todo === undefined) {
        res.status(404).send(`Die Aufgabe mit der ID ${id} wurde nicht gefunden.`);
    } else {
        res.status(200).send(todo);
    }
});

todosRouter.put('/:id', hasAuthentication, (req: Request, res: Response) => {
    const { toDo, deadLine, assignee, owner, status } = req.body;
    const id: number = parseInt(req.params.id);
    const oldTodo: ToDo | undefined = getToDoById(id);

    if (oldTodo === undefined) {
        res.status(404).send(`Die Aufgabe mit der ID ${id} wurde nicht gefunden.`);
        return;
    }

    const deadlineDate: Date = new Date(deadLine);
    updateTodo(id, toDo, deadlineDate.toISOString(), assignee, owner, status);

    res.status(204).send();
});

todosRouter.patch('/:id', hasAuthentication, (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    const oldTodo: ToDo | undefined = getToDoById(id);

    if (oldTodo === undefined) {
        res.status(404).send(`Die Aufgabe  mit der ID ${id} wurde nicht gefunden.`);
        return;
    }

    const { toDo, deadLine, assignee, owner, status} = req.body;

    let updatedDeadLine: string | Date = deadLine ?? oldTodo.deadLine;
    if (deadLine instanceof Date) {
        updatedDeadLine = deadLine;
    } else if (typeof deadLine === 'string') {
        updatedDeadLine = new Date(deadLine);
    }

    // Konvertiere updatedDeadLine explizit in einen String, wenn es ein Date-Objekt ist
    if (updatedDeadLine instanceof Date) {
        updatedDeadLine = updatedDeadLine.toISOString();
    }

    updateTodo(id, toDo ?? oldTodo.toDo, updatedDeadLine, assignee ?? oldTodo.assignee, owner ?? oldTodo.owner, status ?? oldTodo.status);

    res.status(204).send();
});



todosRouter.delete('/:id', hasAuthentication, (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    const oldTodo: ToDo | undefined = getToDoById(id);

    if (oldTodo === undefined) {
        res.status(404).send(`Die Aufgabe  mit der ID ${id} wurde nicht gefunden.`);
        return
    }

    deleteTodoById(id);

    res.status(204).send();
});
