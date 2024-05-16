

export class ListResourceShareTagsRequest {
    public limit?: number;
    public marker?: string;
    public constructor() { 
    }
    public withLimit(limit: number): ListResourceShareTagsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListResourceShareTagsRequest {
        this['marker'] = marker;
        return this;
    }
}