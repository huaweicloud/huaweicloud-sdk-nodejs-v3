

export class ListByoipPoolsRequest {
    public limit?: number;
    public marker?: string;
    public constructor() { 
    }
    public withLimit(limit: number): ListByoipPoolsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListByoipPoolsRequest {
        this['marker'] = marker;
        return this;
    }
}