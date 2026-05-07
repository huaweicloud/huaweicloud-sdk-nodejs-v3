
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateCustomRuleConfigResponse extends SdkResponse {
    private 'rule_id'?: string;
    public constructor() { 
        super();
    }
    public withRuleId(ruleId: string): CreateCustomRuleConfigResponse {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: string  | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId(): string | undefined {
        return this['rule_id'];
    }
}