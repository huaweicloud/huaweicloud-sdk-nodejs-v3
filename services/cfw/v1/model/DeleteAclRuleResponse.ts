import { RuleId } from './RuleId';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteAclRuleResponse extends SdkResponse {
    public data?: RuleId;
    public constructor() { 
        super();
    }
    public withData(data: RuleId): DeleteAclRuleResponse {
        this['data'] = data;
        return this;
    }
}