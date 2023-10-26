import { RuleGroupRequest } from './RuleGroupRequest';


export class AddRuleGroupRequest {
    public body?: RuleGroupRequest;
    public constructor() { 
    }
    public withBody(body: RuleGroupRequest): AddRuleGroupRequest {
        this['body'] = body;
        return this;
    }
}