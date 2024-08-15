import { SeveritySummary } from './SeveritySummary';


export class CompliantSummary {
    private 'compliant_count'?: number;
    private 'severity_summary'?: SeveritySummary;
    public constructor() { 
    }
    public withCompliantCount(compliantCount: number): CompliantSummary {
        this['compliant_count'] = compliantCount;
        return this;
    }
    public set compliantCount(compliantCount: number  | undefined) {
        this['compliant_count'] = compliantCount;
    }
    public get compliantCount(): number | undefined {
        return this['compliant_count'];
    }
    public withSeveritySummary(severitySummary: SeveritySummary): CompliantSummary {
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