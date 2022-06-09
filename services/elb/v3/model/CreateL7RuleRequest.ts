import { CreateL7RuleRequestBody } from './CreateL7RuleRequestBody';


export class CreateL7RuleRequest {
    private 'l7policy_id': string | undefined;
    public body?: CreateL7RuleRequestBody;
    public constructor(l7policyId?: any) { 
        this['l7policy_id'] = l7policyId;
    }
    public withL7policyId(l7policyId: string): CreateL7RuleRequest {
        this['l7policy_id'] = l7policyId;
        return this;
    }
    public set l7policyId(l7policyId: string | undefined) {
        this['l7policy_id'] = l7policyId;
    }
    public get l7policyId() {
        return this['l7policy_id'];
    }
    public withBody(body: CreateL7RuleRequestBody): CreateL7RuleRequest {
        this['body'] = body;
        return this;
    }
}