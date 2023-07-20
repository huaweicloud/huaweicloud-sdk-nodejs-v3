

export class ListTagValuesRequest {
    private 'region_id'?: string;
    public limit?: number;
    public marker?: string;
    public key?: string;
    public constructor(key?: string) { 
        this['key'] = key;
    }
    public withRegionId(regionId: string): ListTagValuesRequest {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withLimit(limit: number): ListTagValuesRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListTagValuesRequest {
        this['marker'] = marker;
        return this;
    }
    public withKey(key: string): ListTagValuesRequest {
        this['key'] = key;
        return this;
    }
}