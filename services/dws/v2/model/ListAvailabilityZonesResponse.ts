import { AvailabilityZone } from './AvailabilityZone';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAvailabilityZonesResponse extends SdkResponse {
    private 'availability_zones'?: Array<AvailabilityZone> | undefined;
    public count?: number;
    public constructor() { 
        super();
    }
    public withAvailabilityZones(availabilityZones: Array<AvailabilityZone>): ListAvailabilityZonesResponse {
        this['availability_zones'] = availabilityZones;
        return this;
    }
    public set availabilityZones(availabilityZones: Array<AvailabilityZone> | undefined) {
        this['availability_zones'] = availabilityZones;
    }
    public get availabilityZones() {
        return this['availability_zones'];
    }
    public withCount(count: number): ListAvailabilityZonesResponse {
        this['count'] = count;
        return this;
    }
}