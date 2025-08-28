

export class ListDdmEnginesRequest {
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withOffset(offset: number): ListDdmEnginesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListDdmEnginesRequest {
        this['limit'] = limit;
        return this;
    }
}