

export class ListDdmsRequest {
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withOffset(offset: number): ListDdmsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListDdmsRequest {
        this['limit'] = limit;
        return this;
    }
}