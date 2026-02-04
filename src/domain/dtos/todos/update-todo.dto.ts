export class UpdatedTodoDto {

    private constructor(
        public readonly id: number,
        public readonly text?: string,
        public readonly completedAt?: Date,
    ) { }

    get values() {
        const returnObj: { [key: string]: any } = {};

        if (this.text !== undefined) returnObj.text = this.text;
        if (this.completedAt !== undefined) returnObj.completedAt = this.completedAt;

        return returnObj;
    }

    static create(props: { [key: string]: any } | undefined): [string?, UpdatedTodoDto?] {
        if (!props || typeof props !== 'object') {
            return ['Props is required', undefined];
        }

        const { id, text, completedAt } = props;
        let newCompletedAt = completedAt;

        if (id === undefined || isNaN(Number(id))) {
            return ['Valid id is required', undefined];
        }

        if (completedAt) {
            newCompletedAt = new Date(completedAt);
            if (newCompletedAt.toString() === 'Invalid Date') {
                return ['completedAt must be a valid date or null', undefined];
            }
        }

        return [undefined, new UpdatedTodoDto(id, text, newCompletedAt)];
    }

}