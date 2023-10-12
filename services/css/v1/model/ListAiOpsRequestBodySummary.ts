

export class ListAiOpsRequestBodySummary {
    public high?: number;
    public medium?: number;
    public suggestion?: number;
    public constructor() { 
    }
    public withHigh(high: number): ListAiOpsRequestBodySummary {
        this['high'] = high;
        return this;
    }
    public withMedium(medium: number): ListAiOpsRequestBodySummary {
        this['medium'] = medium;
        return this;
    }
    public withSuggestion(suggestion: number): ListAiOpsRequestBodySummary {
        this['suggestion'] = suggestion;
        return this;
    }
}