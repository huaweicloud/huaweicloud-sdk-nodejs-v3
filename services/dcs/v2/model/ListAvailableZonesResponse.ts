import { AvailableZones } from './AvailableZones';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAvailableZonesResponse extends SdkResponse {
    private 'region_id'?: string | undefined;
    private 'available_zones'?: Array<AvailableZones> | undefined;
    public constructor() { 
        super();
    }
    public withRegionId(regionId: string): ListAvailableZonesResponse {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId() {
        return this['region_id'];
    }
    public withAvailableZones(availableZones: Array<AvailableZones>): ListAvailableZonesResponse {
        this['available_zones'] = availableZones;
        return this;
    }
    public set availableZones(availableZones: Array<AvailableZones> | undefined) {
        this['available_zones'] = availableZones;
    }
    public get availableZones() {
        return this['available_zones'];
    }
}