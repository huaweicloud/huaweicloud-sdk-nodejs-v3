import { UpdateL7RuleOption } from './UpdateL7RuleOption';


export class UpdateL7RuleRequestBody {
    public rule: UpdateL7RuleOption;
    public constructor(rule?: any) { 
        this['rule'] = rule;
    }
    public withRule(rule: UpdateL7RuleOption): UpdateL7RuleRequestBody {
        this['rule'] = rule;
        return this;
    }
}