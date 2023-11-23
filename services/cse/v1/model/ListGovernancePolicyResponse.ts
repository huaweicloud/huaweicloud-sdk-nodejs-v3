import { GovPolicyDetail } from './GovPolicyDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListGovernancePolicyResponse extends SdkResponse {
    public body?: Array<GovPolicyDetail>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<GovPolicyDetail>): ListGovernancePolicyResponse {
        this['body'] = body;
        return this;
    }
}