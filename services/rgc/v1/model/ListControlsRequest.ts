

export class ListControlsRequest {
    public limit?: number;
    public marker?: string;
    public constructor() { 
    }
    public withLimit(limit: number): ListControlsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListControlsRequest {
        this['marker'] = marker;
        return this;
    }
}