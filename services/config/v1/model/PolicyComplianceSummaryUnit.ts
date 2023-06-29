

export class PolicyComplianceSummaryUnit {
    private 'compliant_count'?: number | undefined;
    private 'non_compliant_count'?: number | undefined;
    public constructor() { 
    }
    public withCompliantCount(compliantCount: number): PolicyComplianceSummaryUnit {
        this['compliant_count'] = compliantCount;
        return this;
    }
    public set compliantCount(compliantCount: number | undefined) {
        this['compliant_count'] = compliantCount;
    }
    public get compliantCount() {
        return this['compliant_count'];
    }
    public withNonCompliantCount(nonCompliantCount: number): PolicyComplianceSummaryUnit {
        this['non_compliant_count'] = nonCompliantCount;
        return this;
    }
    public set nonCompliantCount(nonCompliantCount: number | undefined) {
        this['non_compliant_count'] = nonCompliantCount;
    }
    public get nonCompliantCount() {
        return this['non_compliant_count'];
    }
}