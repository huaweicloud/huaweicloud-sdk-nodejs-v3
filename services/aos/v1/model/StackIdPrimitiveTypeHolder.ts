

export class StackIdPrimitiveTypeHolder {
    private 'stack_id'?: string;
    public constructor() { 
    }
    public withStackId(stackId: string): StackIdPrimitiveTypeHolder {
        this['stack_id'] = stackId;
        return this;
    }
    public set stackId(stackId: string  | undefined) {
        this['stack_id'] = stackId;
    }
    public get stackId(): string | undefined {
        return this['stack_id'];
    }
}