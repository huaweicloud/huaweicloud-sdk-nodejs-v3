

export class StatisticSeverityV2 {
    public critical?: number;
    public major?: number;
    public minor?: number;
    public suggestion?: number;
    public constructor() { 
    }
    public withCritical(critical: number): StatisticSeverityV2 {
        this['critical'] = critical;
        return this;
    }
    public withMajor(major: number): StatisticSeverityV2 {
        this['major'] = major;
        return this;
    }
    public withMinor(minor: number): StatisticSeverityV2 {
        this['minor'] = minor;
        return this;
    }
    public withSuggestion(suggestion: number): StatisticSeverityV2 {
        this['suggestion'] = suggestion;
        return this;
    }
}