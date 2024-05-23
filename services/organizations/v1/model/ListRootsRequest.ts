

export class ListRootsRequest {
    public limit?: number;
    public marker?: string;
    public constructor() { 
    }
    public withLimit(limit: number): ListRootsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListRootsRequest {
        this['marker'] = marker;
        return this;
    }
}