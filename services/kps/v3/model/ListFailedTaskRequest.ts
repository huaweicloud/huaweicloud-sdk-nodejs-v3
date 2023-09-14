

export class ListFailedTaskRequest {
    public limit?: number;
    public offset?: number;
    public constructor() { 
    }
    public withLimit(limit: number): ListFailedTaskRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListFailedTaskRequest {
        this['offset'] = offset;
        return this;
    }
}