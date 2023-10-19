import { RuleId } from './RuleId';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateAclRuleResponse extends SdkResponse {
    public data?: RuleId;
    public constructor() { 
        super();
    }
    public withData(data: RuleId): UpdateAclRuleResponse {
        this['data'] = data;
        return this;
    }
}