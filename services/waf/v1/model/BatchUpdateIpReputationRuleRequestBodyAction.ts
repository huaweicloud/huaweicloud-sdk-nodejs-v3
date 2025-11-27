

export class BatchUpdateIpReputationRuleRequestBodyAction {
    public category?: string;
    public constructor() { 
    }
    public withCategory(category: string): BatchUpdateIpReputationRuleRequestBodyAction {
        this['category'] = category;
        return this;
    }
}