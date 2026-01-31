import { Request, Response } from "express";

const todos = [
    { id: 1, text: 'Buy milk', completedAt: new Date() },
    { id: 2, text: 'Walk the dog', completedAt: null },
    { id: 3, text: 'Read a book', completedAt: new Date() }
]

export class TodosController {
    //* DI
    constructor() { }

    public getTodos = (req: Request, res: Response) => {
        return res.json(todos);
    }

    public getTodoById = (req: Request, res: Response) => {
        const id = Number(req.params.id);

        if (isNaN(id)) return res.status(400).json({ message: 'Invalid ID' });

        const todo = todos.find(t => t.id === id);

        (todo) ? res.json(todo) : res.status(404).json({ message: 'Todo not found' });
    }

    public createTodo = (req: Request, res: Response) => {
        const { text } = req.body;
        if (!text) return res.status(400).json({ message: 'Text is required' });

        const newTodo = {
            id: todos.length + 1,
            text,
            completedAt: null
        }

        todos.push(newTodo);

        res.json(newTodo);
    }

    public updateTodo = (req: Request, res: Response) => {
        const id = Number(req.params.id);
        if (isNaN(id)) return res.status(400).json({ message: 'Invalid ID' });

        const todo = todos.find(t => t.id === id);
        if (!todo) res.status(404).json({ message: 'Todo not found' });

        const { text, completedAt } = req.body;
        if (!text) return res.status(400).json({ message: 'Text is required' });

        todo!.text = text || todo!.text;
        (completedAt === null) ?
            todo!.completedAt = null :
            todo!.completedAt = new Date(completedAt || todo!.completedAt);

        res.json(todo);
    }

    public deleteTodo = (req: Request, res: Response) => {
        const id = Number(req.params.id);
        if (isNaN(id)) return res.status(400).json({ message: 'Invalid ID' });

        const todo = todos.find(t => t.id === id);
        if (!todo) res.status(404).json({ message: 'Todo not found' });

        const index = todos.indexOf(todo!);
        todos.splice(index, 1);

        res.json(todo);
    }

}