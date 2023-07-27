import { ApiForThrottle } from './ApiForThrottle';
import { BasePage } from './BasePage';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListApisUnbindedToRequestThrottlingPolicyV2Response extends SdkResponse {
    public size?: number;
    public total?: number;
    public apis?: Array<ApiForThrottle>;
    public constructor(size?: number, total?: number) { 
        super();
        this['size'] = size;
        this['total'] = total;
    }
    public withSize(size: number): ListApisUnbindedToRequestThrottlingPolicyV2Response {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): ListApisUnbindedToRequestThrottlingPolicyV2Response {
        this['total'] = total;
        return this;
    }
    public withApis(apis: Array<ApiForThrottle>): ListApisUnbindedToRequestThrottlingPolicyV2Response {
        this['apis'] = apis;
        return this;
    }
}