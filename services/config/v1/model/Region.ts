

export class Region {
    private 'region_id'?: string | undefined;
    private 'display_name'?: string | undefined;
    public constructor() { 
    }
    public withRegionId(regionId: string): Region {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId() {
        return this['region_id'];
    }
    public withDisplayName(displayName: string): Region {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName() {
        return this['display_name'];
    }
}