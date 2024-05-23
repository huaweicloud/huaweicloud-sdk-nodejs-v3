

export class ListReceivedHandshakesRequest {
    public limit?: number;
    public marker?: string;
    public constructor() { 
    }
    public withLimit(limit: number): ListReceivedHandshakesRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListReceivedHandshakesRequest {
        this['marker'] = marker;
        return this;
    }
}