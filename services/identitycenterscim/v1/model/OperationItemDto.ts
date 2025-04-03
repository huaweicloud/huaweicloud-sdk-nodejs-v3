

export class OperationItemDto {
    public op?: string;
    public path?: string;
    public value?: object;
    public constructor(op?: string) { 
        this['op'] = op;
    }
    public withOp(op: string): OperationItemDto {
        this['op'] = op;
        return this;
    }
    public withPath(path: string): OperationItemDto {
        this['path'] = path;
        return this;
    }
    public withValue(value: object): OperationItemDto {
        this['value'] = value;
        return this;
    }
}