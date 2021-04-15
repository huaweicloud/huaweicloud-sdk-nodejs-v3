

export class ListServerGroupsRequest {
    public limit?: number;
    public marker?: string;
    public constructor() { 
    }
    public withLimit(limit: number): ListServerGroupsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListServerGroupsRequest {
        this['marker'] = marker;
        return this;
    }
}