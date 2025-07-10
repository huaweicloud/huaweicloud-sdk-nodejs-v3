

export class RegionConfigurationList {
    public region?: string;
    private 'region_configuration_status'?: RegionConfigurationListRegionConfigurationStatusEnum | string;
    public constructor(region?: string, regionConfigurationStatus?: string) { 
        this['region'] = region;
        this['region_configuration_status'] = regionConfigurationStatus;
    }
    public withRegion(region: string): RegionConfigurationList {
        this['region'] = region;
        return this;
    }
    public withRegionConfigurationStatus(regionConfigurationStatus: RegionConfigurationListRegionConfigurationStatusEnum | string): RegionConfigurationList {
        this['region_configuration_status'] = regionConfigurationStatus;
        return this;
    }
    public set regionConfigurationStatus(regionConfigurationStatus: RegionConfigurationListRegionConfigurationStatusEnum | string  | undefined) {
        this['region_configuration_status'] = regionConfigurationStatus;
    }
    public get regionConfigurationStatus(): RegionConfigurationListRegionConfigurationStatusEnum | string | undefined {
        return this['region_configuration_status'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum RegionConfigurationListRegionConfigurationStatusEnum {
    ENABLED = 'ENABLED',
    DISABLED = 'DISABLED'
}
