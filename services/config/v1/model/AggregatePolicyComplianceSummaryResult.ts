import { PolicyComplianceSummaryUnit } from './PolicyComplianceSummaryUnit';


export class AggregatePolicyComplianceSummaryResult {
    private 'resource_details'?: PolicyComplianceSummaryUnit | undefined;
    private 'assignment_details'?: PolicyComplianceSummaryUnit | undefined;
    private 'group_name'?: string | undefined;
    public constructor() { 
    }
    public withResourceDetails(resourceDetails: PolicyComplianceSummaryUnit): AggregatePolicyComplianceSummaryResult {
        this['resource_details'] = resourceDetails;
        return this;
    }
    public set resourceDetails(resourceDetails: PolicyComplianceSummaryUnit | undefined) {
        this['resource_details'] = resourceDetails;
    }
    public get resourceDetails() {
        return this['resource_details'];
    }
    public withAssignmentDetails(assignmentDetails: PolicyComplianceSummaryUnit): AggregatePolicyComplianceSummaryResult {
        this['assignment_details'] = assignmentDetails;
        return this;
    }
    public set assignmentDetails(assignmentDetails: PolicyComplianceSummaryUnit | undefined) {
        this['assignment_details'] = assignmentDetails;
    }
    public get assignmentDetails() {
        return this['assignment_details'];
    }
    public withGroupName(groupName: string): AggregatePolicyComplianceSummaryResult {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName() {
        return this['group_name'];
    }
}