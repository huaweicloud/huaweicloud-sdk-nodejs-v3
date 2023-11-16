import { TransferRuleInfo } from './TransferRuleInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstanceIpRuleResponse extends SdkResponse {
    public total?: number;
    public rules?: Array<TransferRuleInfo>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListInstanceIpRuleResponse {
        this['total'] = total;
        return this;
    }
    public withRules(rules: Array<TransferRuleInfo>): ListInstanceIpRuleResponse {
        this['rules'] = rules;
        return this;
    }
}