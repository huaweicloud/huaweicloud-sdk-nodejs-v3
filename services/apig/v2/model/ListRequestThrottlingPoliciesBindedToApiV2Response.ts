import { BasePage } from './BasePage';
import { ThrottleForApi } from './ThrottleForApi';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRequestThrottlingPoliciesBindedToApiV2Response extends SdkResponse {
    public size?: number;
    public total?: number;
    public throttles?: Array<ThrottleForApi>;
    public constructor(size?: number, total?: number) { 
        super();
        this['size'] = size;
        this['total'] = total;
    }
    public withSize(size: number): ListRequestThrottlingPoliciesBindedToApiV2Response {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): ListRequestThrottlingPoliciesBindedToApiV2Response {
        this['total'] = total;
        return this;
    }
    public withThrottles(throttles: Array<ThrottleForApi>): ListRequestThrottlingPoliciesBindedToApiV2Response {
        this['throttles'] = throttles;
        return this;
    }
}