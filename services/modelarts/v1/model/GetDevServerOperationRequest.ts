

export class GetDevServerOperationRequest {
    public id?: string;
    private 'operation_id'?: string;
    public constructor(id?: string, operationId?: string) { 
        this['id'] = id;
        this['operation_id'] = operationId;
    }
    public withId(id: string): GetDevServerOperationRequest {
        this['id'] = id;
        return this;
    }
    public withOperationId(operationId: string): GetDevServerOperationRequest {
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