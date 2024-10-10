

export class WafCustomRuleAction {
    public category?: string;
    public constructor() { 
    }
    public withCategory(category: string): WafCustomRuleAction {
        this['category'] = category;
        return this;
    }
}