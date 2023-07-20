import { AvailableZoneV2 } from './AvailableZoneV2';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAvailableZonesResponse extends SdkResponse {
    private 'available_zones'?: Array<AvailableZoneV2>;
    private 'default_az_code'?: string;
    private 'support_physical_az_group'?: boolean;
    public constructor() { 
        super();
    }
    public withAvailableZones(availableZones: Array<AvailableZoneV2>): ListAvailableZonesResponse {
        this['available_zones'] = availableZones;
        return this;
    }
    public set availableZones(availableZones: Array<AvailableZoneV2>  | undefined) {
        this['available_zones'] = availableZones;
    }
    public get availableZones(): Array<AvailableZoneV2> | undefined {
        return this['available_zones'];
    }
    public withDefaultAzCode(defaultAzCode: string): ListAvailableZonesResponse {
        this['default_az_code'] = defaultAzCode;
        return this;
    }
    public set defaultAzCode(defaultAzCode: string  | undefined) {
        this['default_az_code'] = defaultAzCode;
    }
    public get defaultAzCode(): string | undefined {
        return this['default_az_code'];
    }
    public withSupportPhysicalAzGroup(supportPhysicalAzGroup: boolean): ListAvailableZonesResponse {
        this['support_physical_az_group'] = supportPhysicalAzGroup;
        return this;
    }
    public set supportPhysicalAzGroup(supportPhysicalAzGroup: boolean  | undefined) {
        this['support_physical_az_group'] = supportPhysicalAzGroup;
    }
    public get supportPhysicalAzGroup(): boolean | undefined {
        return this['support_physical_az_group'];
    }
}