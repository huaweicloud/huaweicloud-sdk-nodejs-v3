

export class SnapshotRegion {
    private 'region_id'?: string;
    public constructor() { 
    }
    public withRegionId(regionId: string): SnapshotRegion {
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