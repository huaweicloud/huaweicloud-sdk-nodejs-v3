

export class SummaryInfo {
    public highRisk?: number;
    public mediumRisk?: number;
    public normal?: number;
    public suggestion?: number;
    public constructor() { 
    }
    public withHighRisk(highRisk: number): SummaryInfo {
        this['highRisk'] = highRisk;
        return this;
    }
    public withMediumRisk(mediumRisk: number): SummaryInfo {
        this['mediumRisk'] = mediumRisk;
        return this;
    }
    public withNormal(normal: number): SummaryInfo {
        this['normal'] = normal;
        return this;
    }
    public withSuggestion(suggestion: number): SummaryInfo {
        this['suggestion'] = suggestion;
        return this;
    }
}