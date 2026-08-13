

export class ListResourceGroupsRequest {
    public limit?: number;
    public marker?: string;
    public constructor() { 
    }
    public withLimit(limit: number): ListResourceGroupsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListResourceGroupsRequest {
        this['marker'] = marker;
        return this;
    }
}