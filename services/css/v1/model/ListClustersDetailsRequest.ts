

export class ListClustersDetailsRequest {
    public start?: number;
    public limit?: number;
    public constructor() { 
    }
    public withStart(start: number): ListClustersDetailsRequest {
        this['start'] = start;
        return this;
    }
    public withLimit(limit: number): ListClustersDetailsRequest {
        this['limit'] = limit;
        return this;
    }
}