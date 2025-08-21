

export class SimpleDiffDto {
    private 'added_line'?: number;
    private 'deleted_line'?: number;
    public path?: string;
    public constructor() { 
    }
    public withAddedLine(addedLine: number): SimpleDiffDto {
        this['added_line'] = addedLine;
        return this;
    }
    public set addedLine(addedLine: number  | undefined) {
        this['added_line'] = addedLine;
    }
    public get addedLine(): number | undefined {
        return this['added_line'];
    }
    public withDeletedLine(deletedLine: number): SimpleDiffDto {
        this['deleted_line'] = deletedLine;
        return this;
    }
    public set deletedLine(deletedLine: number  | undefined) {
        this['deleted_line'] = deletedLine;
    }
    public get deletedLine(): number | undefined {
        return this['deleted_line'];
    }
    public withPath(path: string): SimpleDiffDto {
        this['path'] = path;
        return this;
    }
}