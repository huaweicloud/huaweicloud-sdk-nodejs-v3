import { LinksSelf } from './LinksSelf';
import { MappingRules } from './MappingRules';


export class MappingResult {
    public id?: string;
    public links?: LinksSelf;
    public rules?: Array<MappingRules>;
    public constructor(id?: string, links?: LinksSelf, rules?: Array<MappingRules>) { 
        this['id'] = id;
        this['links'] = links;
        this['rules'] = rules;
    }
    public withId(id: string): MappingResult {
        this['id'] = id;
        return this;
    }
    public withLinks(links: LinksSelf): MappingResult {
        this['links'] = links;
        return this;
    }
    public withRules(rules: Array<MappingRules>): MappingResult {
        this['rules'] = rules;
        return this;
    }
}