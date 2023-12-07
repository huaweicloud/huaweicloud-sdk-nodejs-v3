import { AvailabilityZones } from './AvailabilityZones';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAvailableZoneInfoResponse extends SdkResponse {
    private 'availability_zone'?: Array<AvailabilityZones>;
    public constructor() { 
        super();
    }
    public withAvailabilityZone(availabilityZone: Array<AvailabilityZones>): ShowAvailableZoneInfoResponse {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: Array<AvailabilityZones>  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): Array<AvailabilityZones> | undefined {
        return this['availability_zone'];
    }
}