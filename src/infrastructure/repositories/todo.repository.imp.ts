import { CreateTodoDto, TodoDatasource, TodoEntity, TodoRepository, UpdatedTodoDto } from "../../domain";


export class todoRepositoryImp implements TodoRepository {

    constructor(
        private datasource: TodoDatasource
    ) { }


    create(createTodoDto: CreateTodoDto): Promise<TodoEntity> {
        return this.datasource.create(createTodoDto);
    }

    getAll(): Promise<TodoEntity[]> {
        return this.datasource.getAll();
    }

    getById(id: number): Promise<TodoEntity> {
        return this.datasource.getById(id);
    }

    updateById(updateTodoDto: UpdatedTodoDto): Promise<TodoEntity> {
        return this.datasource.updateById(updateTodoDto);
    }

    deleteById(id: number): Promise<TodoEntity> {
        return this.datasource.deleteById(id);
    }
}