

export class ListSyncTasksRequest {
    public limit?: number;
    public offset?: number;
    public status?: string;
    public constructor() { 
    }
    public withLimit(limit: number): ListSyncTasksRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListSyncTasksRequest {
        this['offset'] = offset;
        return this;
    }
    public withStatus(status: string): ListSyncTasksRequest {
        this['status'] = status;
        return this;
    }
}