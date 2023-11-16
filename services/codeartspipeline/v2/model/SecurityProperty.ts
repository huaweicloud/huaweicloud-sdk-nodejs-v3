import { SecurityRule } from './SecurityRule';


export class SecurityProperty {
    public enable?: boolean;
    public rules?: SecurityRule;
    public constructor() { 
    }
    public withEnable(enable: boolean): SecurityProperty {
        this['enable'] = enable;
        return this;
    }
    public withRules(rules: SecurityRule): SecurityProperty {
        this['rules'] = rules;
        return this;
    }
}