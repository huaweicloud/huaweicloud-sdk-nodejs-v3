

export class ListHandshakesRequest {
    public limit?: number;
    public marker?: string;
    public constructor() { 
    }
    public withLimit(limit: number): ListHandshakesRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListHandshakesRequest {
        this['marker'] = marker;
        return this;
    }
}