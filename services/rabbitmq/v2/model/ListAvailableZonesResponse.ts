import { ListAvailableZonesRespAvailableZones } from './ListAvailableZonesRespAvailableZones';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAvailableZonesResponse extends SdkResponse {
    private 'region_id'?: string;
    private 'available_zones'?: Array<ListAvailableZonesRespAvailableZones>;
    public constructor() { 
        super();
    }
    public withRegionId(regionId: string): ListAvailableZonesResponse {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withAvailableZones(availableZones: Array<ListAvailableZonesRespAvailableZones>): ListAvailableZonesResponse {
        this['available_zones'] = availableZones;
        return this;
    }
    public set availableZones(availableZones: Array<ListAvailableZonesRespAvailableZones>  | undefined) {
        this['available_zones'] = availableZones;
    }
    public get availableZones(): Array<ListAvailableZonesRespAvailableZones> | undefined {
        return this['available_zones'];
    }
}