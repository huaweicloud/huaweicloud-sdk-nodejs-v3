

export class ListFailedTaskRequest {
    public limit?: string;
    public offset?: string;
    public constructor() { 
    }
    public withLimit(limit: string): ListFailedTaskRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: string): ListFailedTaskRequest {
        this['offset'] = offset;
        return this;
    }
}