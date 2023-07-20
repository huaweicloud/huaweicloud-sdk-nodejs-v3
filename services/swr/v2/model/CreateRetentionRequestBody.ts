import { Rule } from './Rule';


export class CreateRetentionRequestBody {
    public algorithm?: string;
    public rules?: Array<Rule>;
    public constructor(algorithm?: string, rules?: Array<Rule>) { 
        this['algorithm'] = algorithm;
        this['rules'] = rules;
    }
    public withAlgorithm(algorithm: string): CreateRetentionRequestBody {
        this['algorithm'] = algorithm;
        return this;
    }
    public withRules(rules: Array<Rule>): CreateRetentionRequestBody {
        this['rules'] = rules;
        return this;
    }
}