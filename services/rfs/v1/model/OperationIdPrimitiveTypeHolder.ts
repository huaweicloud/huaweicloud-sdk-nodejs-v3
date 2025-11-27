

export class OperationIdPrimitiveTypeHolder {
    private 'operation_id'?: string;
    public constructor() { 
    }
    public withOperationId(operationId: string): OperationIdPrimitiveTypeHolder {
        this['operation_id'] = operationId;
        return this;
    }
    public set operationId(operationId: string  | undefined) {
        this['operation_id'] = operationId;
    }
    public get operationId(): string | undefined {
        return this['operation_id'];
    }
}