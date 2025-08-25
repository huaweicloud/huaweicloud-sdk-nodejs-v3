import { ShowAvailableAzResponsebodyAvailabilityZone } from './ShowAvailableAzResponsebodyAvailabilityZone';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAvailableAzResponse extends SdkResponse {
    private 'availability_zone'?: Array<ShowAvailableAzResponsebodyAvailabilityZone>;
    public constructor() { 
        super();
    }
    public withAvailabilityZone(availabilityZone: Array<ShowAvailableAzResponsebodyAvailabilityZone>): ShowAvailableAzResponse {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: Array<ShowAvailableAzResponsebodyAvailabilityZone>  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): Array<ShowAvailableAzResponsebodyAvailabilityZone> | undefined {
        return this['availability_zone'];
    }
}