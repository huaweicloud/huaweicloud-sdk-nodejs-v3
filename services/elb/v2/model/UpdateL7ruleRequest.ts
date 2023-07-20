import { UpdateL7ruleRequestBody } from './UpdateL7ruleRequestBody';


export class UpdateL7ruleRequest {
    private 'l7policy_id'?: string;
    private 'l7rule_id'?: string;
    public body?: UpdateL7ruleRequestBody;
    public constructor(l7policyId?: string, l7ruleId?: string) { 
        this['l7policy_id'] = l7policyId;
        this['l7rule_id'] = l7ruleId;
    }
    public withL7policyId(l7policyId: string): UpdateL7ruleRequest {
        this['l7policy_id'] = l7policyId;
        return this;
    }
    public set l7policyId(l7policyId: string  | undefined) {
        this['l7policy_id'] = l7policyId;
    }
    public get l7policyId(): string | undefined {
        return this['l7policy_id'];
    }
    public withL7ruleId(l7ruleId: string): UpdateL7ruleRequest {
        this['l7rule_id'] = l7ruleId;
        return this;
    }
    public set l7ruleId(l7ruleId: string  | undefined) {
        this['l7rule_id'] = l7ruleId;
    }
    public get l7ruleId(): string | undefined {
        return this['l7rule_id'];
    }
    public withBody(body: UpdateL7ruleRequestBody): UpdateL7ruleRequest {
        this['body'] = body;
        return this;
    }
}