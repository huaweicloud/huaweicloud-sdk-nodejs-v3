

export class ListAssociatedResourceSettingsRequest {
    public limit?: number;
    public marker?: string;
    private 'region_id'?: string;
    public constructor() { 
    }
    public withLimit(limit: number): ListAssociatedResourceSettingsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListAssociatedResourceSettingsRequest {
        this['marker'] = marker;
        return this;
    }
    public withRegionId(regionId: string): ListAssociatedResourceSettingsRequest {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
}