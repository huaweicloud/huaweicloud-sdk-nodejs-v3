

export class ListTrainingJobTagsRequest {
    public limit?: number;
    public offset?: number;
    public constructor() { 
    }
    public withLimit(limit: number): ListTrainingJobTagsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListTrainingJobTagsRequest {
        this['offset'] = offset;
        return this;
    }
}