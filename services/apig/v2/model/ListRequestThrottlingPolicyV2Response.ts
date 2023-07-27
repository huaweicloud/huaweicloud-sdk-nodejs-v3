import { BasePage } from './BasePage';
import { ThrottlesInfo } from './ThrottlesInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRequestThrottlingPolicyV2Response extends SdkResponse {
    public size?: number;
    public total?: number;
    public throttles?: Array<ThrottlesInfo>;
    public constructor(size?: number, total?: number) { 
        super();
        this['size'] = size;
        this['total'] = total;
    }
    public withSize(size: number): ListRequestThrottlingPolicyV2Response {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): ListRequestThrottlingPolicyV2Response {
        this['total'] = total;
        return this;
    }
    public withThrottles(throttles: Array<ThrottlesInfo>): ListRequestThrottlingPolicyV2Response {
        this['throttles'] = throttles;
        return this;
    }
}