

export class ListTrackedResourceTagsRequest {
    public key?: string;
    public marker?: string;
    public limit?: number;
    private 'resource_deleted'?: boolean;
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
    public withResourceDeleted(resourceDeleted: boolean): ListTrackedResourceTagsRequest {
        this['resource_deleted'] = resourceDeleted;
        return this;
    }
    public set resourceDeleted(resourceDeleted: boolean  | undefined) {
        this['resource_deleted'] = resourceDeleted;
    }
    public get resourceDeleted(): boolean | undefined {
        return this['resource_deleted'];
    }
}