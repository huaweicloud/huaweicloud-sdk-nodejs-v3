

export class ListEnabledControlsRequest {
    public limit?: number;
    public marker?: string;
    public constructor() { 
    }
    public withLimit(limit: number): ListEnabledControlsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListEnabledControlsRequest {
        this['marker'] = marker;
        return this;
    }
}