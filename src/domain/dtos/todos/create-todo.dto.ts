export class CreateTodoDto {

    private constructor(
        public readonly text: string,
    ) { }

    static create(props: { [key: string]: any } | undefined): [string?, CreateTodoDto?] {
        if (!props || typeof props !== 'object') {
            return ['Props is required', undefined];
        }
        const { text } = props;
        if (!text) return ['Text is required', undefined];
        return [undefined, new CreateTodoDto(text)];
    }

}