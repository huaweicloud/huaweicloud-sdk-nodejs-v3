

export class Function {
    public name: string;
    public operation: string;
    public metadata?: object;
    public constructor(name?: any, operation?: any) { 
        this['name'] = name;
        this['operation'] = operation;
    }
    public withName(name: string): Function {
        this['name'] = name;
        return this;
    }
    public withOperation(operation: string): Function {
        this['operation'] = operation;
        return this;
    }
    public withMetadata(metadata: object): Function {
        this['metadata'] = metadata;
        return this;
    }
}