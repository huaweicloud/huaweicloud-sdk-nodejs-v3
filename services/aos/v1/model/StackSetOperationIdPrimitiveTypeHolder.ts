

export class StackSetOperationIdPrimitiveTypeHolder {
    private 'stack_set_operation_id'?: string;
    public constructor() { 
    }
    public withStackSetOperationId(stackSetOperationId: string): StackSetOperationIdPrimitiveTypeHolder {
        this['stack_set_operation_id'] = stackSetOperationId;
        return this;
    }
    public set stackSetOperationId(stackSetOperationId: string  | undefined) {
        this['stack_set_operation_id'] = stackSetOperationId;
    }
    public get stackSetOperationId(): string | undefined {
        return this['stack_set_operation_id'];
    }
}