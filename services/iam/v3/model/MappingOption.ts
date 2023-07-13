import { MappingRules } from './MappingRules';


export class MappingOption {
    public rules: Array<MappingRules>;
    public constructor(rules?: any) { 
        this['rules'] = rules;
    }
    public withRules(rules: Array<MappingRules>): MappingOption {
        this['rules'] = rules;
        return this;
    }
}