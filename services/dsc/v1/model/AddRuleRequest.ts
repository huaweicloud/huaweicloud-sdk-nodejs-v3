import { RuleRequest } from './RuleRequest';


export class AddRuleRequest {
    public body?: RuleRequest;
    public constructor() { 
    }
    public withBody(body: RuleRequest): AddRuleRequest {
        this['body'] = body;
        return this;
    }
}