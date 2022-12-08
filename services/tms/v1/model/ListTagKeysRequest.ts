

export class ListTagKeysRequest {
    private 'region_id'?: string | undefined;
    public limit?: number;
    public marker?: string;
    public constructor() { 
    }
    public withRegionId(regionId: string): ListTagKeysRequest {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId() {
        return this['region_id'];
    }
    public withLimit(limit: number): ListTagKeysRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListTagKeysRequest {
        this['marker'] = marker;
        return this;
    }
}