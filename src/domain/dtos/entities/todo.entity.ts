


export class TodoEntity {

    constructor(
        public id: number,
        public text: string,
        public completedAt?: Date | null
    ) { }

    get isCompleted() {
        return !!this.completedAt;
    }

    public static fromObject(object: { [key: string]: any }): TodoEntity {
        const { id, text, completedAt } = object;
        if (!id) throw new Error("Invalid object: missing 'id'");
        if (!text) throw new Error("Invalid object: missing 'text'");

        let newCompletedAtDate;
        if (completedAt) {
            newCompletedAtDate = new Date(completedAt);
            if (isNaN(newCompletedAtDate.getTime())) {
                throw new Error("Invalid object: 'completedAt' is not a valid date");
            }
        }

        return new TodoEntity(id, text, completedAt);
    }
}