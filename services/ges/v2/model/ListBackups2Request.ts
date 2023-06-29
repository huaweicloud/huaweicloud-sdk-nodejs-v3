

export class ListBackups2Request {
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withOffset(offset: number): ListBackups2Request {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListBackups2Request {
        this['limit'] = limit;
        return this;
    }
}