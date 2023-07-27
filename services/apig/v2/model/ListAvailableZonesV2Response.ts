import { AvailableZone } from './AvailableZone';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAvailableZonesV2Response extends SdkResponse {
    private 'available_zones'?: Array<AvailableZone>;
    public constructor() { 
        super();
    }
    public withAvailableZones(availableZones: Array<AvailableZone>): ListAvailableZonesV2Response {
        this['available_zones'] = availableZones;
        return this;
    }
    public set availableZones(availableZones: Array<AvailableZone>  | undefined) {
        this['available_zones'] = availableZones;
    }
    public get availableZones(): Array<AvailableZone> | undefined {
        return this['available_zones'];
    }
}