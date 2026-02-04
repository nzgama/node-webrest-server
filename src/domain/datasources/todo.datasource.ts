import { CreateTodoDto, UpdatedTodoDto } from "../dtos";
import { TodoEntity } from "../dtos/entities/todo.entity";


export abstract class TodoDatasource {

    abstract create(createTodoDto: CreateTodoDto): Promise<TodoEntity>;

    //todo: PAGINATION
    abstract getAll(): Promise<TodoEntity[]>;

    abstract getById(id: number): Promise<TodoEntity>;
    abstract updateById(updateTodoDto: UpdatedTodoDto): Promise<TodoEntity>;
    abstract deleteById(id: number): Promise<TodoEntity>;

}