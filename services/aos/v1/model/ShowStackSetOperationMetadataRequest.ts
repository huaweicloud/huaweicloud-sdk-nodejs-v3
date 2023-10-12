

export class ShowStackSetOperationMetadataRequest {
    private 'Client-Request-Id'?: string;
    private 'stack_set_name'?: string;
    private 'stack_set_id'?: string;
    private 'stack_set_operation_id'?: string;
    public constructor(clientRequestId?: string, stackSetName?: string, stackSetOperationId?: string) { 
        this['Client-Request-Id'] = clientRequestId;
        this['stack_set_name'] = stackSetName;
        this['stack_set_operation_id'] = stackSetOperationId;
    }
    public withClientRequestId(clientRequestId: string): ShowStackSetOperationMetadataRequest {
        this['Client-Request-Id'] = clientRequestId;
        return this;
    }
    public set clientRequestId(clientRequestId: string  | undefined) {
        this['Client-Request-Id'] = clientRequestId;
    }
    public get clientRequestId(): string | undefined {
        return this['Client-Request-Id'];
    }
    public withStackSetName(stackSetName: string): ShowStackSetOperationMetadataRequest {
        this['stack_set_name'] = stackSetName;
        return this;
    }
    public set stackSetName(stackSetName: string  | undefined) {
        this['stack_set_name'] = stackSetName;
    }
    public get stackSetName(): string | undefined {
        return this['stack_set_name'];
    }
    public withStackSetId(stackSetId: string): ShowStackSetOperationMetadataRequest {
        this['stack_set_id'] = stackSetId;
        return this;
    }
    public set stackSetId(stackSetId: string  | undefined) {
        this['stack_set_id'] = stackSetId;
    }
    public get stackSetId(): string | undefined {
        return this['stack_set_id'];
    }
    public withStackSetOperationId(stackSetOperationId: string): ShowStackSetOperationMetadataRequest {
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