import { PolicyComplianceSummaryResults } from './PolicyComplianceSummaryResults';
import { PolicyResource } from './PolicyResource';


export class PolicyResourceComplianceSummary {
    private 'compliance_state'?: string;
    public resource?: PolicyResource;
    public results?: PolicyComplianceSummaryResults;
    public constructor() { 
    }
    public withComplianceState(complianceState: string): PolicyResourceComplianceSummary {
        this['compliance_state'] = complianceState;
        return this;
    }
    public set complianceState(complianceState: string  | undefined) {
        this['compliance_state'] = complianceState;
    }
    public get complianceState(): string | undefined {
        return this['compliance_state'];
    }
    public withResource(resource: PolicyResource): PolicyResourceComplianceSummary {
        this['resource'] = resource;
        return this;
    }
    public withResults(results: PolicyComplianceSummaryResults): PolicyResourceComplianceSummary {
        this['results'] = results;
        return this;
    }
}