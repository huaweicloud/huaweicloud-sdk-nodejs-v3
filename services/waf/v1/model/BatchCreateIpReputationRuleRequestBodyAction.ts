

export class BatchCreateIpReputationRuleRequestBodyAction {
    public category?: string;
    public constructor() { 
    }
    public withCategory(category: string): BatchCreateIpReputationRuleRequestBodyAction {
        this['category'] = category;
        return this;
    }
}