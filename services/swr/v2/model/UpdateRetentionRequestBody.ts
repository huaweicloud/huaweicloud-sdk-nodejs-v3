import { Rule } from './Rule';


export class UpdateRetentionRequestBody {
    public algorithm?: string;
    public rules?: Array<Rule>;
    public constructor(algorithm?: string, rules?: Array<Rule>) { 
        this['algorithm'] = algorithm;
        this['rules'] = rules;
    }
    public withAlgorithm(algorithm: string): UpdateRetentionRequestBody {
        this['algorithm'] = algorithm;
        return this;
    }
    public withRules(rules: Array<Rule>): UpdateRetentionRequestBody {
        this['rules'] = rules;
        return this;
    }
}