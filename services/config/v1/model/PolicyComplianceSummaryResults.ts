import { PolicyComplianceSummaryUnit } from './PolicyComplianceSummaryUnit';


export class PolicyComplianceSummaryResults {
    private 'resource_details'?: PolicyComplianceSummaryUnit;
    private 'assignment_details'?: PolicyComplianceSummaryUnit;
    public constructor() { 
    }
    public withResourceDetails(resourceDetails: PolicyComplianceSummaryUnit): PolicyComplianceSummaryResults {
        this['resource_details'] = resourceDetails;
        return this;
    }
    public set resourceDetails(resourceDetails: PolicyComplianceSummaryUnit  | undefined) {
        this['resource_details'] = resourceDetails;
    }
    public get resourceDetails(): PolicyComplianceSummaryUnit | undefined {
        return this['resource_details'];
    }
    public withAssignmentDetails(assignmentDetails: PolicyComplianceSummaryUnit): PolicyComplianceSummaryResults {
        this['assignment_details'] = assignmentDetails;
        return this;
    }
    public set assignmentDetails(assignmentDetails: PolicyComplianceSummaryUnit  | undefined) {
        this['assignment_details'] = assignmentDetails;
    }
    public get assignmentDetails(): PolicyComplianceSummaryUnit | undefined {
        return this['assignment_details'];
    }
}