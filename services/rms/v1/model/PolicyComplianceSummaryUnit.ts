

export class PolicyComplianceSummaryUnit {
    private 'compliant_count'?: number;
    private 'non_compliant_count'?: number;
    public constructor() { 
    }
    public withCompliantCount(compliantCount: number): PolicyComplianceSummaryUnit {
        this['compliant_count'] = compliantCount;
        return this;
    }
    public set compliantCount(compliantCount: number  | undefined) {
        this['compliant_count'] = compliantCount;
    }
    public get compliantCount(): number | undefined {
        return this['compliant_count'];
    }
    public withNonCompliantCount(nonCompliantCount: number): PolicyComplianceSummaryUnit {
        this['non_compliant_count'] = nonCompliantCount;
        return this;
    }
    public set nonCompliantCount(nonCompliantCount: number  | undefined) {
        this['non_compliant_count'] = nonCompliantCount;
    }
    public get nonCompliantCount(): number | undefined {
        return this['non_compliant_count'];
    }
}