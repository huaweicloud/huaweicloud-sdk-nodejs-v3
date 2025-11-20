import { Tag } from './Tag';


export class UnusedAnalysisRuleCriteria {
    private 'account_ids'?: Array<string>;
    private 'resource_tags'?: Array<Tag>;
    public constructor() { 
    }
    public withAccountIds(accountIds: Array<string>): UnusedAnalysisRuleCriteria {
        this['account_ids'] = accountIds;
        return this;
    }
    public set accountIds(accountIds: Array<string>  | undefined) {
        this['account_ids'] = accountIds;
    }
    public get accountIds(): Array<string> | undefined {
        return this['account_ids'];
    }
    public withResourceTags(resourceTags: Array<Tag>): UnusedAnalysisRuleCriteria {
        this['resource_tags'] = resourceTags;
        return this;
    }
    public set resourceTags(resourceTags: Array<Tag>  | undefined) {
        this['resource_tags'] = resourceTags;
    }
    public get resourceTags(): Array<Tag> | undefined {
        return this['resource_tags'];
    }
}