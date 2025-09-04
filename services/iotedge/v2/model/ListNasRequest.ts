

export class ListNasRequest {
    public name?: string;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withName(name: string): ListNasRequest {
        this['name'] = name;
        return this;
    }
    public withOffset(offset: number): ListNasRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListNasRequest {
        this['limit'] = limit;
        return this;
    }
}