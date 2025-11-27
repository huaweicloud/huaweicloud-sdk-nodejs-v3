import { CreateRuleObjectMeta } from './CreateRuleObjectMeta';
import { RuleSpec } from './RuleSpec';


export class CreateRuleRequestBody {
    public metadata?: CreateRuleObjectMeta;
    public spec?: RuleSpec;
    public constructor(metadata?: CreateRuleObjectMeta, spec?: RuleSpec) { 
        this['metadata'] = metadata;
        this['spec'] = spec;
    }
    public withMetadata(metadata: CreateRuleObjectMeta): CreateRuleRequestBody {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: RuleSpec): CreateRuleRequestBody {
        this['spec'] = spec;
        return this;
    }
}