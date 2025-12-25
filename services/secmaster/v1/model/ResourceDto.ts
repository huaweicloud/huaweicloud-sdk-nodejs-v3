

export class ResourceDto {
    public enable?: ResourceDtoEnableEnum | string;
    private 'region_id'?: string;
    public constructor(enable?: string, regionId?: string) { 
        this['enable'] = enable;
        this['region_id'] = regionId;
    }
    public withEnable(enable: ResourceDtoEnableEnum | string): ResourceDto {
        this['enable'] = enable;
        return this;
    }
    public withRegionId(regionId: string): ResourceDto {
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

/**
    * @export
    * @enum {string}
    */
export enum ResourceDtoEnableEnum {
    INACTIVE = 'inactive',
    ACTIVE = 'active'
}
