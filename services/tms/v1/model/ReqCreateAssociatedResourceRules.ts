import { ReqAssociatedResourceRule } from './ReqAssociatedResourceRule';


export class ReqCreateAssociatedResourceRules {
    public rules?: Array<ReqAssociatedResourceRule>;
    public constructor() { 
    }
    public withRules(rules: Array<ReqAssociatedResourceRule>): ReqCreateAssociatedResourceRules {
        this['rules'] = rules;
        return this;
    }
}