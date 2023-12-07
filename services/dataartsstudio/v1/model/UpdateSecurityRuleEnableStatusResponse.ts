
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateSecurityRuleEnableStatusResponse extends SdkResponse {
    private 'rule_id'?: string;
    private 'rule_name'?: string;
    public enabled?: boolean;
    public constructor() { 
        super();
    }
    public withRuleId(ruleId: string): UpdateSecurityRuleEnableStatusResponse {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: string  | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId(): string | undefined {
        return this['rule_id'];
    }
    public withRuleName(ruleName: string): UpdateSecurityRuleEnableStatusResponse {
        this['rule_name'] = ruleName;
        return this;
    }
    public set ruleName(ruleName: string  | undefined) {
        this['rule_name'] = ruleName;
    }
    public get ruleName(): string | undefined {
        return this['rule_name'];
    }
    public withEnabled(enabled: boolean): UpdateSecurityRuleEnableStatusResponse {
        this['enabled'] = enabled;
        return this;
    }
}