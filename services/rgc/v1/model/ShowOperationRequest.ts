

export class ShowOperationRequest {
    private 'operation_id'?: string;
    public constructor(operationId?: string) { 
        this['operation_id'] = operationId;
    }
    public withOperationId(operationId: string): ShowOperationRequest {
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