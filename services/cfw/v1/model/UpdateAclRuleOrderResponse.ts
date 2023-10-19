import { RuleId } from './RuleId';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateAclRuleOrderResponse extends SdkResponse {
    public data?: RuleId;
    public constructor() { 
        super();
    }
    public withData(data: RuleId): UpdateAclRuleOrderResponse {
        this['data'] = data;
        return this;
    }
}