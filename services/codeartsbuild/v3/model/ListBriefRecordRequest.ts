

export class ListBriefRecordRequest {
    public limit?: number;
    public body?: Array<string>;
    public constructor(limit?: number) { 
        this['limit'] = limit;
    }
    public withLimit(limit: number): ListBriefRecordRequest {
        this['limit'] = limit;
        return this;
    }
    public withBody(body: Array<string>): ListBriefRecordRequest {
        this['body'] = body;
        return this;
    }
}