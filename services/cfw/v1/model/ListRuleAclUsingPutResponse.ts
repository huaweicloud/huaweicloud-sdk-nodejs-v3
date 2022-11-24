import { RuleId } from './RuleId';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRuleAclUsingPutResponse extends SdkResponse {
    public data?: RuleId;
    public constructor() { 
        super();
    }
    public withData(data: RuleId): ListRuleAclUsingPutResponse {
        this['data'] = data;
        return this;
    }
}