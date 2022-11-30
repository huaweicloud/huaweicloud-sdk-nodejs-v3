import { CreateL7ruleRequestBody } from './CreateL7ruleRequestBody';


export class CreateL7ruleRequest {
    private 'l7policy_id': string | undefined;
    public body?: CreateL7ruleRequestBody;
    public constructor(l7policyId?: any) { 
        this['l7policy_id'] = l7policyId;
    }
    public withL7policyId(l7policyId: string): CreateL7ruleRequest {
        this['l7policy_id'] = l7policyId;
        return this;
    }
    public set l7policyId(l7policyId: string | undefined) {
        this['l7policy_id'] = l7policyId;
    }
    public get l7policyId() {
        return this['l7policy_id'];
    }
    public withBody(body: CreateL7ruleRequestBody): CreateL7ruleRequest {
        this['body'] = body;
        return this;
    }
}