import { ManagedPolicyAssignmentMetadata } from './ManagedPolicyAssignmentMetadata';


export class OrganizationPolicyAssignmentRequest {
    private 'excluded_accounts'?: Array<string> | undefined;
    private 'organization_policy_assignment_name': string | undefined;
    private 'managed_policy_assignment_metadata'?: ManagedPolicyAssignmentMetadata | undefined;
    public constructor(organizationPolicyAssignmentName?: any) { 
        this['organization_policy_assignment_name'] = organizationPolicyAssignmentName;
    }
    public withExcludedAccounts(excludedAccounts: Array<string>): OrganizationPolicyAssignmentRequest {
        this['excluded_accounts'] = excludedAccounts;
        return this;
    }
    public set excludedAccounts(excludedAccounts: Array<string> | undefined) {
        this['excluded_accounts'] = excludedAccounts;
    }
    public get excludedAccounts() {
        return this['excluded_accounts'];
    }
    public withOrganizationPolicyAssignmentName(organizationPolicyAssignmentName: string): OrganizationPolicyAssignmentRequest {
        this['organization_policy_assignment_name'] = organizationPolicyAssignmentName;
        return this;
    }
    public set organizationPolicyAssignmentName(organizationPolicyAssignmentName: string | undefined) {
        this['organization_policy_assignment_name'] = organizationPolicyAssignmentName;
    }
    public get organizationPolicyAssignmentName() {
        return this['organization_policy_assignment_name'];
    }
    public withManagedPolicyAssignmentMetadata(managedPolicyAssignmentMetadata: ManagedPolicyAssignmentMetadata): OrganizationPolicyAssignmentRequest {
        this['managed_policy_assignment_metadata'] = managedPolicyAssignmentMetadata;
        return this;
    }
    public set managedPolicyAssignmentMetadata(managedPolicyAssignmentMetadata: ManagedPolicyAssignmentMetadata | undefined) {
        this['managed_policy_assignment_metadata'] = managedPolicyAssignmentMetadata;
    }
    public get managedPolicyAssignmentMetadata() {
        return this['managed_policy_assignment_metadata'];
    }
}