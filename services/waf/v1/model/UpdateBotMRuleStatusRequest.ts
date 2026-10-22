import { UpdateBotMRuleStatusRequestBody } from './UpdateBotMRuleStatusRequestBody';


export class UpdateBotMRuleStatusRequest {
    private 'policy_id'?: string;
    private 'rule_id'?: string;
    private 'Content-Type'?: string;
    public body?: UpdateBotMRuleStatusRequestBody;
    public constructor(policyId?: string, ruleId?: string, contentType?: string) { 
        this['policy_id'] = policyId;
        this['rule_id'] = ruleId;
        this['Content-Type'] = contentType;
    }
    public withPolicyId(policyId: string): UpdateBotMRuleStatusRequest {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withRuleId(ruleId: string): UpdateBotMRuleStatusRequest {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: string  | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId(): string | undefined {
        return this['rule_id'];
    }
    public withContentType(contentType: string): UpdateBotMRuleStatusRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: UpdateBotMRuleStatusRequestBody): UpdateBotMRuleStatusRequest {
        this['body'] = body;
        return this;
    }
}