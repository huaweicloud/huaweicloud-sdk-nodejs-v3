

export class DeleteIpReputationRuleResponseBodyAction {
    public category?: string;
    public constructor() { 
    }
    public withCategory(category: string): DeleteIpReputationRuleResponseBodyAction {
        this['category'] = category;
        return this;
    }
}