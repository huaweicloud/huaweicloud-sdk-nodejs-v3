import { RuleChangeRequest } from './RuleChangeRequest';


export class ChangeRuleRequest {
    public body?: RuleChangeRequest;
    public constructor() { 
    }
    public withBody(body: RuleChangeRequest): ChangeRuleRequest {
        this['body'] = body;
        return this;
    }
}