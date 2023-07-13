

export class ListTaskGroupRequest {
    public limit?: number;
    public offset?: number;
    public status?: number;
    public constructor() { 
    }
    public withLimit(limit: number): ListTaskGroupRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListTaskGroupRequest {
        this['offset'] = offset;
        return this;
    }
    public withStatus(status: number): ListTaskGroupRequest {
        this['status'] = status;
        return this;
    }
}