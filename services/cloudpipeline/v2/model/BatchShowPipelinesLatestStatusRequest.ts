

export class BatchShowPipelinesLatestStatusRequest {
    public body?: Array<string>;
    public constructor() { 
    }
    public withBody(body: Array<string>): BatchShowPipelinesLatestStatusRequest {
        this['body'] = body;
        return this;
    }
}