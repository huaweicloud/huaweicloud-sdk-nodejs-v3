import { RulesLocal } from './RulesLocal';
import { RulesRemote } from './RulesRemote';


export class MappingRules {
    public local: Array<RulesLocal>;
    public remote: Array<RulesRemote>;
    public constructor(local?: any, remote?: any) { 
        this['local'] = local;
        this['remote'] = remote;
    }
    public withLocal(local: Array<RulesLocal>): MappingRules {
        this['local'] = local;
        return this;
    }
    public withRemote(remote: Array<RulesRemote>): MappingRules {
        this['remote'] = remote;
        return this;
    }
}