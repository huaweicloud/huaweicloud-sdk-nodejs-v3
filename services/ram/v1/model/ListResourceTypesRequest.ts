

export class ListResourceTypesRequest {
    public limit?: number;
    public marker?: string;
    public constructor() { 
    }
    public withLimit(limit: number): ListResourceTypesRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListResourceTypesRequest {
        this['marker'] = marker;
        return this;
    }
}