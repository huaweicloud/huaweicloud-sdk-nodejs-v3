import { AvailabilityZones } from './AvailabilityZones';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAvailableZoneInfoResponse extends SdkResponse {
    private 'availability_zone'?: AvailabilityZones;
    public constructor() { 
        super();
    }
    public withAvailabilityZone(availabilityZone: AvailabilityZones): ShowAvailableZoneInfoResponse {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: AvailabilityZones  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): AvailabilityZones | undefined {
        return this['availability_zone'];
    }
}