

export class ListRunningTaskRequest {
    public limit?: number;
    public offset?: number;
    public constructor() { 
    }
    public withLimit(limit: number): ListRunningTaskRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListRunningTaskRequest {
        this['offset'] = offset;
        return this;
    }
}