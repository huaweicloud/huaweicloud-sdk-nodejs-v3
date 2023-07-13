import { NovaAvailabilityZone } from './NovaAvailabilityZone';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class NovaListAvailabilityZonesResponse extends SdkResponse {
    public availabilityZoneInfo?: Array<NovaAvailabilityZone>;
    public constructor() { 
        super();
    }
    public withAvailabilityZoneInfo(availabilityZoneInfo: Array<NovaAvailabilityZone>): NovaListAvailabilityZonesResponse {
        this['availabilityZoneInfo'] = availabilityZoneInfo;
        return this;
    }
}