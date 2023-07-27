import { ThrottleApiBinding } from './ThrottleApiBinding';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AssociateRequestThrottlingPolicyV2Response extends SdkResponse {
    private 'throttle_applys'?: Array<ThrottleApiBinding>;
    public constructor() { 
        super();
    }
    public withThrottleApplys(throttleApplys: Array<ThrottleApiBinding>): AssociateRequestThrottlingPolicyV2Response {
        this['throttle_applys'] = throttleApplys;
        return this;
    }
    public set throttleApplys(throttleApplys: Array<ThrottleApiBinding>  | undefined) {
        this['throttle_applys'] = throttleApplys;
    }
    public get throttleApplys(): Array<ThrottleApiBinding> | undefined {
        return this['throttle_applys'];
    }
}