import { RuleId } from './RuleId';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteRuleAclUsingDeleteResponse extends SdkResponse {
    public data?: RuleId;
    public constructor() { 
        super();
    }
    public withData(data: RuleId): DeleteRuleAclUsingDeleteResponse {
        this['data'] = data;
        return this;
    }
}