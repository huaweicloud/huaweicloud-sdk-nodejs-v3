import { Ruleset } from './Ruleset';


export class CreateRulesetRequest {
    public body?: Ruleset;
    public constructor() { 
    }
    public withBody(body: Ruleset): CreateRulesetRequest {
        this['body'] = body;
        return this;
    }
}