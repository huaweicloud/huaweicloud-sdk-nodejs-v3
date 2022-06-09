import { UpdateL7ruleRequestBody } from './UpdateL7ruleRequestBody';


export class UpdateL7ruleRequest {
    private 'l7policy_id': string | undefined;
    private 'l7rule_id': string | undefined;
    public body?: UpdateL7ruleRequestBody;
    public constructor(l7policyId?: any, l7ruleId?: any) { 
        this['l7policy_id'] = l7policyId;
        this['l7rule_id'] = l7ruleId;
    }
    public withL7policyId(l7policyId: string): UpdateL7ruleRequest {
        this['l7policy_id'] = l7policyId;
        return this;
    }
    public set l7policyId(l7policyId: string | undefined) {
        this['l7policy_id'] = l7policyId;
    }
    public get l7policyId() {
        return this['l7policy_id'];
    }
    public withL7ruleId(l7ruleId: string): UpdateL7ruleRequest {
        this['l7rule_id'] = l7ruleId;
        return this;
    }
    public set l7ruleId(l7ruleId: string | undefined) {
        this['l7rule_id'] = l7ruleId;
    }
    public get l7ruleId() {
        return this['l7rule_id'];
    }
    public withBody(body: UpdateL7ruleRequestBody): UpdateL7ruleRequest {
        this['body'] = body;
        return this;
    }
}