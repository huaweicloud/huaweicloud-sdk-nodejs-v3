

export class UpdateIpReputationRuleRequestBodyAction {
    public category?: string;
    public constructor(category?: string) { 
        this['category'] = category;
    }
    public withCategory(category: string): UpdateIpReputationRuleRequestBodyAction {
        this['category'] = category;
        return this;
    }
}