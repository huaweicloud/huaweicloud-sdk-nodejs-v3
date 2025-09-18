

export class ListRegionsRequest {
    public limit?: number;
    public marker?: string;
    public constructor() { 
    }
    public withLimit(limit: number): ListRegionsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListRegionsRequest {
        this['marker'] = marker;
        return this;
    }
}