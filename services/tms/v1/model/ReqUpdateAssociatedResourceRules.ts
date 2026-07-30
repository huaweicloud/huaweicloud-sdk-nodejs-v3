import { ReqAssociatedResourceRule } from './ReqAssociatedResourceRule';


export class ReqUpdateAssociatedResourceRules {
    public rules?: Array<ReqAssociatedResourceRule>;
    public constructor() { 
    }
    public withRules(rules: Array<ReqAssociatedResourceRule>): ReqUpdateAssociatedResourceRules {
        this['rules'] = rules;
        return this;
    }
}