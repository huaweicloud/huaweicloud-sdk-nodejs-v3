

export class ListAllTagsRequest {
    public key?: string;
    public marker?: string;
    public limit?: number;
    public constructor() { 
    }
    public withKey(key: string): ListAllTagsRequest {
        this['key'] = key;
        return this;
    }
    public withMarker(marker: string): ListAllTagsRequest {
        this['marker'] = marker;
        return this;
    }
    public withLimit(limit: number): ListAllTagsRequest {
        this['limit'] = limit;
        return this;
    }
}