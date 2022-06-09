import { UpdateL7RuleRequestBody } from './UpdateL7RuleRequestBody';


export class UpdateL7RuleRequest {
    private 'l7policy_id': string | undefined;
    private 'l7rule_id': string | undefined;
    public body?: UpdateL7RuleRequestBody;
    public constructor(l7policyId?: any, l7ruleId?: any) { 
        this['l7policy_id'] = l7policyId;
        this['l7rule_id'] = l7ruleId;
    }
    public withL7policyId(l7policyId: string): UpdateL7RuleRequest {
        this['l7policy_id'] = l7policyId;
        return this;
    }
    public set l7policyId(l7policyId: string | undefined) {
        this['l7policy_id'] = l7policyId;
    }
    public get l7policyId() {
        return this['l7policy_id'];
    }
    public withL7ruleId(l7ruleId: string): UpdateL7RuleRequest {
        this['l7rule_id'] = l7ruleId;
        return this;
    }
    public set l7ruleId(l7ruleId: string | undefined) {
        this['l7rule_id'] = l7ruleId;
    }
    public get l7ruleId() {
        return this['l7rule_id'];
    }
    public withBody(body: UpdateL7RuleRequestBody): UpdateL7RuleRequest {
        this['body'] = body;
        return this;
    }
}