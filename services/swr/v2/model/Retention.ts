import { Rule } from './Rule';


export class Retention {
    public algorithm?: string;
    public id?: number;
    public rules?: Array<Rule>;
    public scope?: string;
    public constructor(algorithm?: string, id?: number, rules?: Array<Rule>, scope?: string) { 
        this['algorithm'] = algorithm;
        this['id'] = id;
        this['rules'] = rules;
        this['scope'] = scope;
    }
    public withAlgorithm(algorithm: string): Retention {
        this['algorithm'] = algorithm;
        return this;
    }
    public withId(id: number): Retention {
        this['id'] = id;
        return this;
    }
    public withRules(rules: Array<Rule>): Retention {
        this['rules'] = rules;
        return this;
    }
    public withScope(scope: string): Retention {
        this['scope'] = scope;
        return this;
    }
}