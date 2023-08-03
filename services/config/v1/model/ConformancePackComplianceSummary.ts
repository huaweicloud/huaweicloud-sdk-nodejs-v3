

export class ConformancePackComplianceSummary {
    public id?: string;
    public name?: string;
    public compliance?: string;
    public constructor() { 
    }
    public withId(id: string): ConformancePackComplianceSummary {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ConformancePackComplianceSummary {
        this['name'] = name;
        return this;
    }
    public withCompliance(compliance: string): ConformancePackComplianceSummary {
        this['compliance'] = compliance;
        return this;
    }
}