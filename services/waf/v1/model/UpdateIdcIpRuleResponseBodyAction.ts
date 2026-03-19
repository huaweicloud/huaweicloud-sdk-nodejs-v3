

export class UpdateIdcIpRuleResponseBodyAction {
    public category?: string;
    public constructor() { 
    }
    public withCategory(category: string): UpdateIdcIpRuleResponseBodyAction {
        this['category'] = category;
        return this;
    }
}