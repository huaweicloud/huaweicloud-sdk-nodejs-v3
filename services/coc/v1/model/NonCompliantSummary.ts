import { SeveritySummary } from './SeveritySummary';


export class NonCompliantSummary {
    private 'non_compliant_count'?: number;
    private 'severity_summary'?: SeveritySummary;
    public constructor() { 
    }
    public withNonCompliantCount(nonCompliantCount: number): NonCompliantSummary {
        this['non_compliant_count'] = nonCompliantCount;
        return this;
    }
    public set nonCompliantCount(nonCompliantCount: number  | undefined) {
        this['non_compliant_count'] = nonCompliantCount;
    }
    public get nonCompliantCount(): number | undefined {
        return this['non_compliant_count'];
    }
    public withSeveritySummary(severitySummary: SeveritySummary): NonCompliantSummary {
        this['severity_summary'] = severitySummary;
        return this;
    }
    public set severitySummary(severitySummary: SeveritySummary  | undefined) {
        this['severity_summary'] = severitySummary;
    }
    public get severitySummary(): SeveritySummary | undefined {
        return this['severity_summary'];
    }
}