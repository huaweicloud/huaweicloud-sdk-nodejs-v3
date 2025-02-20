

export class BatchCreateApplicationViewRequestBodySyncRules {
    private 'ep_id'?: string;
    private 'rule_tags'?: string;
    public constructor() { 
    }
    public withEpId(epId: string): BatchCreateApplicationViewRequestBodySyncRules {
        this['ep_id'] = epId;
        return this;
    }
    public set epId(epId: string  | undefined) {
        this['ep_id'] = epId;
    }
    public get epId(): string | undefined {
        return this['ep_id'];
    }
    public withRuleTags(ruleTags: string): BatchCreateApplicationViewRequestBodySyncRules {
        this['rule_tags'] = ruleTags;
        return this;
    }
    public set ruleTags(ruleTags: string  | undefined) {
        this['rule_tags'] = ruleTags;
    }
    public get ruleTags(): string | undefined {
        return this['rule_tags'];
    }
}