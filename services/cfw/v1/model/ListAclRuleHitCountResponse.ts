import { RuleHitCountRecords } from './RuleHitCountRecords';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAclRuleHitCountResponse extends SdkResponse {
    public data?: RuleHitCountRecords;
    public constructor() { 
        super();
    }
    public withData(data: RuleHitCountRecords): ListAclRuleHitCountResponse {
        this['data'] = data;
        return this;
    }
}