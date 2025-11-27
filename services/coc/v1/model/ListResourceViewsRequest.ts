

export class ListResourceViewsRequest {
    public limit?: number;
    public marker?: string;
    public constructor(limit?: number) { 
        this['limit'] = limit;
    }
    public withLimit(limit: number): ListResourceViewsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListResourceViewsRequest {
        this['marker'] = marker;
        return this;
    }
}