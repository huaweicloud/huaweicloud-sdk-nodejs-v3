

export class CreateIpReputationRuleRequestBodyAction {
    public category?: string;
    public constructor() { 
    }
    public withCategory(category: string): CreateIpReputationRuleRequestBodyAction {
        this['category'] = category;
        return this;
    }
}