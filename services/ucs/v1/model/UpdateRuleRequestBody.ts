import { RuleSpec } from './RuleSpec';


export class UpdateRuleRequestBody {
    public spec?: RuleSpec;
    public constructor() { 
    }
    public withSpec(spec: RuleSpec): UpdateRuleRequestBody {
        this['spec'] = spec;
        return this;
    }
}