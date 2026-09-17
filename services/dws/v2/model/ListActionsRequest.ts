

export class ListActionsRequest {
    public limit?: number;
    public offset?: number;
    public constructor() { 
    }
    public withLimit(limit: number): ListActionsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListActionsRequest {
        this['offset'] = offset;
        return this;
    }
}