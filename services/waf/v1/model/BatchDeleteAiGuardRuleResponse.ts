
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchDeleteAiGuardRuleResponse extends SdkResponse {
    private 'rule_ids'?: Array<string>;
    public constructor() { 
        super();
    }
    public withRuleIds(ruleIds: Array<string>): BatchDeleteAiGuardRuleResponse {
        this['rule_ids'] = ruleIds;
        return this;
    }
    public set ruleIds(ruleIds: Array<string>  | undefined) {
        this['rule_ids'] = ruleIds;
    }
    public get ruleIds(): Array<string> | undefined {
        return this['rule_ids'];
    }
}