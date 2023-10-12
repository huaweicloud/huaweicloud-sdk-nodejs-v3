

export class AIOpsRiskInfo {
    public riskType?: string;
    public level?: string;
    public desc?: string;
    public suggestion?: string;
    public constructor() { 
    }
    public withRiskType(riskType: string): AIOpsRiskInfo {
        this['riskType'] = riskType;
        return this;
    }
    public withLevel(level: string): AIOpsRiskInfo {
        this['level'] = level;
        return this;
    }
    public withDesc(desc: string): AIOpsRiskInfo {
        this['desc'] = desc;
        return this;
    }
    public withSuggestion(suggestion: string): AIOpsRiskInfo {
        this['suggestion'] = suggestion;
        return this;
    }
}