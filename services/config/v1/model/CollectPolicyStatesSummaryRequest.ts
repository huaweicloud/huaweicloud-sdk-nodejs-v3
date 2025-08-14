

export class CollectPolicyStatesSummaryRequest {
    public tags?: Array<string>;
    public constructor() { 
    }
    public withTags(tags: Array<string>): CollectPolicyStatesSummaryRequest {
        this['tags'] = tags;
        return this;
    }
}