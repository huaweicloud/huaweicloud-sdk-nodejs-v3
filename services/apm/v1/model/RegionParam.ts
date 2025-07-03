

export class RegionParam {
    private 'region_id'?: string;
    private 'region_name'?: string;
    public region?: string;
    private 'project_id'?: string;
    public status?: string;
    public constructor() { 
    }
    public withRegionId(regionId: string): RegionParam {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withRegionName(regionName: string): RegionParam {
        this['region_name'] = regionName;
        return this;
    }
    public set regionName(regionName: string  | undefined) {
        this['region_name'] = regionName;
    }
    public get regionName(): string | undefined {
        return this['region_name'];
    }
    public withRegion(region: string): RegionParam {
        this['region'] = region;
        return this;
    }
    public withProjectId(projectId: string): RegionParam {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withStatus(status: string): RegionParam {
        this['status'] = status;
        return this;
    }
}