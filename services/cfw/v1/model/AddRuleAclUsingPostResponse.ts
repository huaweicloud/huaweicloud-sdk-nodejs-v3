import { RuleIdList } from './RuleIdList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddRuleAclUsingPostResponse extends SdkResponse {
    public data?: RuleIdList;
    public constructor() { 
        super();
    }
    public withData(data: RuleIdList): AddRuleAclUsingPostResponse {
        this['data'] = data;
        return this;
    }
}