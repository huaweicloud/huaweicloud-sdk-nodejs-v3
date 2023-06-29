

export class ResourceSummaryResponseItemRegions {
    private 'region_id'?: string | undefined;
    public count?: number;
    public constructor() { 
    }
    public withRegionId(regionId: string): ResourceSummaryResponseItemRegions {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId() {
        return this['region_id'];
    }
    public withCount(count: number): ResourceSummaryResponseItemRegions {
        this['count'] = count;
        return this;
    }
}