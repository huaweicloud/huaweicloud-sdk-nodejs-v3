import { ActionRule } from './ActionRule';


export class AddActionRuleRequest {
    public body?: ActionRule;
    public constructor() { 
    }
    public withBody(body: ActionRule): AddActionRuleRequest {
        this['body'] = body;
        return this;
    }
}