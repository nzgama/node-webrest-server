import { Router } from "express";
import { TodosController } from "./controller";
import { TodoDatasourceImp } from "../../infrastructure/datasources/todo.datasources.imp";
import { todoRepositoryImp } from "../../infrastructure/repositories/todo.repository.imp";


export class TodoRoutes {

    static get routes(): Router {

        const router = Router();

        const datasource = new TodoDatasourceImp();
        const todoRepository = new todoRepositoryImp(datasource);
        const todosController = new TodosController(todoRepository);

        router.get('/', todosController.getTodos);
        router.get('/:id', todosController.getTodoById);
        router.post('/', todosController.createTodo);
        router.put('/:id', todosController.updateTodo);
        router.delete('/:id', todosController.deleteTodo);

        return router;
    }

}