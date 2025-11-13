

export class ListBatchOperationTasksRequest {
    public limit?: number;
    public offset?: number;
    public constructor() { 
    }
    public withLimit(limit: number): ListBatchOperationTasksRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListBatchOperationTasksRequest {
        this['offset'] = offset;
        return this;
    }
}