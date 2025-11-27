

export class StackSetIdPrimitiveTypeHolder {
    private 'stack_set_id'?: string;
    public constructor() { 
    }
    public withStackSetId(stackSetId: string): StackSetIdPrimitiveTypeHolder {
        this['stack_set_id'] = stackSetId;
        return this;
    }
    public set stackSetId(stackSetId: string  | undefined) {
        this['stack_set_id'] = stackSetId;
    }
    public get stackSetId(): string | undefined {
        return this['stack_set_id'];
    }
}