
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateRuleResponse extends SdkResponse {
    public status?: boolean;
    private 'rule_id'?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: boolean): CreateRuleResponse {
        this['status'] = status;
        return this;
    }
    public withRuleId(ruleId: string): CreateRuleResponse {
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