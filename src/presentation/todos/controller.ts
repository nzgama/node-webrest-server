import { Request, Response } from "express";
import { prisma } from "../../data/postgres";
import { CreateTodoDto, UpdatedTodoDto } from "../../domain/dtos";


export class TodosController {
    //* DI
    constructor() { }

    public getTodos = async (req: Request, res: Response) => {
        // return res.json(todos);

        const allTodos = await prisma.todo.findMany();

        return res.json(allTodos);
    }

    public getTodoById = async (req: Request, res: Response) => {
        const id = Number(req.params.id);

        if (isNaN(id)) return res.status(400).json({ message: 'Invalid ID' });

        // const todo = todos.find(t => t.id === id);

        const todo = await prisma.todo.findUnique({
            where: { id }
        });

        (todo) ? res.json(todo) : res.status(404).json({ message: 'Todo not found' });
    }

    public createTodo = async (req: Request, res: Response) => {
        const [error, createTodoDto] = CreateTodoDto.create(req.body);

        console.log(error);


        if (error) return res.status(400).json({ error });

        const todo = await prisma.todo.create({
            data: createTodoDto!
        });

        res.json(todo);
    }

    public updateTodo = async (req: Request, res: Response) => {
        const id = Number(req.params.id);
        const [error, updatedTodoDto] = UpdatedTodoDto.create({ ...req.body, id });

        if (error) return res.status(400).json({ error });

        const todo = await prisma.todo.findUnique({
            where: { id }
        });

        if (!todo) res.status(404).json({ message: 'Todo not found' });


        const updatedTodo = await prisma.todo.update({
            where: { id },
            data: updatedTodoDto!.values
        });

        res.json(updatedTodo);
    }

    public deleteTodo = async (req: Request, res: Response) => {
        const id = Number(req.params.id);
        if (isNaN(id)) return res.status(400).json({ message: 'Invalid ID' });

        // const todo = todos.find(t => t.id === id);
        const todo = await prisma.todo.findUnique({
            where: { id }
        });

        if (!todo) res.status(404).json({ message: 'Todo not found' });

        // const index = todos.indexOf(todo!);
        // todos.splice(index, 1);

        const deleted = await prisma.todo.delete({
            where: { id }
        });

        (deleted) ? res.json(deleted) : res.status(400).json({ error: 'Failed to delete todo' });

        res.json({ todo, deleted });
    }

}