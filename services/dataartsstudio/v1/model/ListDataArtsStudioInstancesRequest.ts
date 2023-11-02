

export class ListDataArtsStudioInstancesRequest {
    public limit?: number;
    public offset?: number;
    public constructor() { 
    }
    public withLimit(limit: number): ListDataArtsStudioInstancesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListDataArtsStudioInstancesRequest {
        this['offset'] = offset;
        return this;
    }
}