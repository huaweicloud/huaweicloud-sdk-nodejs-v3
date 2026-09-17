

export class ListStoredQueriesRequest {
    public limit?: number;
    public marker?: string;
    public name?: string;
    public constructor() { 
    }
    public withLimit(limit: number): ListStoredQueriesRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListStoredQueriesRequest {
        this['marker'] = marker;
        return this;
    }
    public withName(name: string): ListStoredQueriesRequest {
        this['name'] = name;
        return this;
    }
}