

export class UpdateIpReputationRuleRequestBodyAction {
    public category?: string;
    public constructor() { 
    }
    public withCategory(category: string): UpdateIpReputationRuleRequestBodyAction {
        this['category'] = category;
        return this;
    }
}