

export class BatchShowNodesInformationRequest {
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withOffset(offset: number): BatchShowNodesInformationRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): BatchShowNodesInformationRequest {
        this['limit'] = limit;
        return this;
    }
}