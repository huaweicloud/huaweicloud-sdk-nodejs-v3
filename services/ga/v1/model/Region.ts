

export class Region {
    private 'region_id'?: string;
    public area?: string;
    private 'supported_endpoint_types'?: Array<RegionSupportedEndpointTypesEnum> | Array<string>;
    public constructor() { 
    }
    public withRegionId(regionId: string): Region {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withArea(area: string): Region {
        this['area'] = area;
        return this;
    }
    public withSupportedEndpointTypes(supportedEndpointTypes: Array<RegionSupportedEndpointTypesEnum> | Array<string>): Region {
        this['supported_endpoint_types'] = supportedEndpointTypes;
        return this;
    }
    public set supportedEndpointTypes(supportedEndpointTypes: Array<RegionSupportedEndpointTypesEnum> | Array<string>  | undefined) {
        this['supported_endpoint_types'] = supportedEndpointTypes;
    }
    public get supportedEndpointTypes(): Array<RegionSupportedEndpointTypesEnum> | Array<string> | undefined {
        return this['supported_endpoint_types'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum RegionSupportedEndpointTypesEnum {
    EIP = 'EIP'
}
