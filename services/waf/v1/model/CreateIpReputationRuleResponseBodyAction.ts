

export class CreateIpReputationRuleResponseBodyAction {
    public category?: string;
    public constructor() { 
    }
    public withCategory(category: string): CreateIpReputationRuleResponseBodyAction {
        this['category'] = category;
        return this;
    }
}