import { BindRulesTags } from './BindRulesTags';


export class VaultBindRules {
    public tags?: Array<BindRulesTags>;
    public constructor() { 
    }
    public withTags(tags: Array<BindRulesTags>): VaultBindRules {
        this['tags'] = tags;
        return this;
    }
}