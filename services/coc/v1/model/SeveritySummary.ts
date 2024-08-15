

export class SeveritySummary {
    private 'critical_count'?: number;
    private 'high_count'?: number;
    private 'informational_count'?: number;
    private 'low_count'?: number;
    private 'medium_count'?: number;
    private 'unspecified_count'?: number;
    public constructor() { 
    }
    public withCriticalCount(criticalCount: number): SeveritySummary {
        this['critical_count'] = criticalCount;
        return this;
    }
    public set criticalCount(criticalCount: number  | undefined) {
        this['critical_count'] = criticalCount;
    }
    public get criticalCount(): number | undefined {
        return this['critical_count'];
    }
    public withHighCount(highCount: number): SeveritySummary {
        this['high_count'] = highCount;
        return this;
    }
    public set highCount(highCount: number  | undefined) {
        this['high_count'] = highCount;
    }
    public get highCount(): number | undefined {
        return this['high_count'];
    }
    public withInformationalCount(informationalCount: number): SeveritySummary {
        this['informational_count'] = informationalCount;
        return this;
    }
    public set informationalCount(informationalCount: number  | undefined) {
        this['informational_count'] = informationalCount;
    }
    public get informationalCount(): number | undefined {
        return this['informational_count'];
    }
    public withLowCount(lowCount: number): SeveritySummary {
        this['low_count'] = lowCount;
        return this;
    }
    public set lowCount(lowCount: number  | undefined) {
        this['low_count'] = lowCount;
    }
    public get lowCount(): number | undefined {
        return this['low_count'];
    }
    public withMediumCount(mediumCount: number): SeveritySummary {
        this['medium_count'] = mediumCount;
        return this;
    }
    public set mediumCount(mediumCount: number  | undefined) {
        this['medium_count'] = mediumCount;
    }
    public get mediumCount(): number | undefined {
        return this['medium_count'];
    }
    public withUnspecifiedCount(unspecifiedCount: number): SeveritySummary {
        this['unspecified_count'] = unspecifiedCount;
        return this;
    }
    public set unspecifiedCount(unspecifiedCount: number  | undefined) {
        this['unspecified_count'] = unspecifiedCount;
    }
    public get unspecifiedCount(): number | undefined {
        return this['unspecified_count'];
    }
}