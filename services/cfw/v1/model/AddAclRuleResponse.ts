import { RuleIdList } from './RuleIdList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddAclRuleResponse extends SdkResponse {
    public data?: RuleIdList;
    public constructor() { 
        super();
    }
    public withData(data: RuleIdList): AddAclRuleResponse {
        this['data'] = data;
        return this;
    }
}