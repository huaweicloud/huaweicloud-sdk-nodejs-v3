import { CreateRuleOption } from './CreateRuleOption';


export class CreateL7RuleRequestBody {
    public rule?: CreateRuleOption;
    public constructor(rule?: CreateRuleOption) { 
        this['rule'] = rule;
    }
    public withRule(rule: CreateRuleOption): CreateL7RuleRequestBody {
        this['rule'] = rule;
        return this;
    }
}