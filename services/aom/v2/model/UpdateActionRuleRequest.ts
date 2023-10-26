import { ActionRule } from './ActionRule';


export class UpdateActionRuleRequest {
    public body?: ActionRule;
    public constructor() { 
    }
    public withBody(body: ActionRule): UpdateActionRuleRequest {
        this['body'] = body;
        return this;
    }
}