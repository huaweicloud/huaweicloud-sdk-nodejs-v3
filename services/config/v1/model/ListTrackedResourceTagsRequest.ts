

export class ListTrackedResourceTagsRequest {
    public key?: string;
    public marker?: string;
    public limit?: number;
    public constructor() { 
    }
    public withKey(key: string): ListTrackedResourceTagsRequest {
        this['key'] = key;
        return this;
    }
    public withMarker(marker: string): ListTrackedResourceTagsRequest {
        this['marker'] = marker;
        return this;
    }
    public withLimit(limit: number): ListTrackedResourceTagsRequest {
        this['limit'] = limit;
        return this;
    }
}