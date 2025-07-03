

export class ShowMasterAddressRequest {
    private 'region_name'?: string;
    public constructor(regionName?: string) { 
        this['region_name'] = regionName;
    }
    public withRegionName(regionName: string): ShowMasterAddressRequest {
        this['region_name'] = regionName;
        return this;
    }
    public set regionName(regionName: string  | undefined) {
        this['region_name'] = regionName;
    }
    public get regionName(): string | undefined {
        return this['region_name'];
    }
}