import { RulesLocalAdditional } from './RulesLocalAdditional';
import { RulesRemote } from './RulesRemote';


export class MappingRules {
    public local: Array<{ [key: string]: RulesLocalAdditional; }>;
    public remote: Array<RulesRemote>;
    public constructor(local?: any, remote?: any) { 
        this['local'] = local;
        this['remote'] = remote;
    }
    public withLocal(local: Array<{ [key: string]: RulesLocalAdditional; }>): MappingRules {
        this['local'] = local;
        return this;
    }
    public withRemote(remote: Array<RulesRemote>): MappingRules {
        this['remote'] = remote;
        return this;
    }
}