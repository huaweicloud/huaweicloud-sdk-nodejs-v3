

export class ListInstanceConfigsV2Request {
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withOffset(offset: number): ListInstanceConfigsV2Request {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListInstanceConfigsV2Request {
        this['limit'] = limit;
        return this;
    }
}