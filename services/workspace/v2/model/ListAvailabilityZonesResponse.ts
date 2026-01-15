import { AvailabilityZone } from './AvailabilityZone';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAvailabilityZonesResponse extends SdkResponse {
    private 'availability_zones'?: Array<AvailabilityZone>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withAvailabilityZones(availabilityZones: Array<AvailabilityZone>): ListAvailabilityZonesResponse {
        this['availability_zones'] = availabilityZones;
        return this;
    }
    public set availabilityZones(availabilityZones: Array<AvailabilityZone>  | undefined) {
        this['availability_zones'] = availabilityZones;
    }
    public get availabilityZones(): Array<AvailabilityZone> | undefined {
        return this['availability_zones'];
    }
    public withTotalCount(totalCount: number): ListAvailabilityZonesResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}