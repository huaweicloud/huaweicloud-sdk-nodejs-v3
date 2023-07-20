import { PolicyComplianceSummaryUnit } from './PolicyComplianceSummaryUnit';


export class Compliance {
    private 'compliance_state'?: string;
    private 'resource_details'?: PolicyComplianceSummaryUnit;
    public constructor() { 
    }
    public withComplianceState(complianceState: string): Compliance {
        this['compliance_state'] = complianceState;
        return this;
    }
    public set complianceState(complianceState: string  | undefined) {
        this['compliance_state'] = complianceState;
    }
    public get complianceState(): string | undefined {
        return this['compliance_state'];
    }
    public withResourceDetails(resourceDetails: PolicyComplianceSummaryUnit): Compliance {
        this['resource_details'] = resourceDetails;
        return this;
    }
    public set resourceDetails(resourceDetails: PolicyComplianceSummaryUnit  | undefined) {
        this['resource_details'] = resourceDetails;
    }
    public get resourceDetails(): PolicyComplianceSummaryUnit | undefined {
        return this['resource_details'];
    }
}