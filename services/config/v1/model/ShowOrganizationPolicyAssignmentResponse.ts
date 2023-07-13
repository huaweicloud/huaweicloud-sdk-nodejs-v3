import { PolicyFilterDefinition } from './PolicyFilterDefinition';
import { PolicyParameterValue } from './PolicyParameterValue';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowOrganizationPolicyAssignmentResponse extends SdkResponse {
    private 'owner_id'?: string | undefined;
    private 'organization_id'?: string | undefined;
    private 'organization_policy_assignment_urn'?: string | undefined;
    private 'organization_policy_assignment_id'?: string | undefined;
    private 'organization_policy_assignment_name'?: string | undefined;
    private 'excluded_accounts'?: Array<string> | undefined;
    public description?: string;
    public period?: string;
    private 'policy_filter'?: PolicyFilterDefinition | undefined;
    public parameters?: { [key: string]: PolicyParameterValue; };
    private 'policy_definition_id'?: string | undefined;
    private 'created_at'?: string | undefined;
    private 'updated_at'?: string | undefined;
    public constructor() { 
        super();
    }
    public withOwnerId(ownerId: string): ShowOrganizationPolicyAssignmentResponse {
        this['owner_id'] = ownerId;
        return this;
    }
    public set ownerId(ownerId: string | undefined) {
        this['owner_id'] = ownerId;
    }
    public get ownerId() {
        return this['owner_id'];
    }
    public withOrganizationId(organizationId: string): ShowOrganizationPolicyAssignmentResponse {
        this['organization_id'] = organizationId;
        return this;
    }
    public set organizationId(organizationId: string | undefined) {
        this['organization_id'] = organizationId;
    }
    public get organizationId() {
        return this['organization_id'];
    }
    public withOrganizationPolicyAssignmentUrn(organizationPolicyAssignmentUrn: string): ShowOrganizationPolicyAssignmentResponse {
        this['organization_policy_assignment_urn'] = organizationPolicyAssignmentUrn;
        return this;
    }
    public set organizationPolicyAssignmentUrn(organizationPolicyAssignmentUrn: string | undefined) {
        this['organization_policy_assignment_urn'] = organizationPolicyAssignmentUrn;
    }
    public get organizationPolicyAssignmentUrn() {
        return this['organization_policy_assignment_urn'];
    }
    public withOrganizationPolicyAssignmentId(organizationPolicyAssignmentId: string): ShowOrganizationPolicyAssignmentResponse {
        this['organization_policy_assignment_id'] = organizationPolicyAssignmentId;
        return this;
    }
    public set organizationPolicyAssignmentId(organizationPolicyAssignmentId: string | undefined) {
        this['organization_policy_assignment_id'] = organizationPolicyAssignmentId;
    }
    public get organizationPolicyAssignmentId() {
        return this['organization_policy_assignment_id'];
    }
    public withOrganizationPolicyAssignmentName(organizationPolicyAssignmentName: string): ShowOrganizationPolicyAssignmentResponse {
        this['organization_policy_assignment_name'] = organizationPolicyAssignmentName;
        return this;
    }
    public set organizationPolicyAssignmentName(organizationPolicyAssignmentName: string | undefined) {
        this['organization_policy_assignment_name'] = organizationPolicyAssignmentName;
    }
    public get organizationPolicyAssignmentName() {
        return this['organization_policy_assignment_name'];
    }
    public withExcludedAccounts(excludedAccounts: Array<string>): ShowOrganizationPolicyAssignmentResponse {
        this['excluded_accounts'] = excludedAccounts;
        return this;
    }
    public set excludedAccounts(excludedAccounts: Array<string> | undefined) {
        this['excluded_accounts'] = excludedAccounts;
    }
    public get excludedAccounts() {
        return this['excluded_accounts'];
    }
    public withDescription(description: string): ShowOrganizationPolicyAssignmentResponse {
        this['description'] = description;
        return this;
    }
    public withPeriod(period: string): ShowOrganizationPolicyAssignmentResponse {
        this['period'] = period;
        return this;
    }
    public withPolicyFilter(policyFilter: PolicyFilterDefinition): ShowOrganizationPolicyAssignmentResponse {
        this['policy_filter'] = policyFilter;
        return this;
    }
    public set policyFilter(policyFilter: PolicyFilterDefinition | undefined) {
        this['policy_filter'] = policyFilter;
    }
    public get policyFilter() {
        return this['policy_filter'];
    }
    public withParameters(parameters: { [key: string]: PolicyParameterValue; }): ShowOrganizationPolicyAssignmentResponse {
        this['parameters'] = parameters;
        return this;
    }
    public withPolicyDefinitionId(policyDefinitionId: string): ShowOrganizationPolicyAssignmentResponse {
        this['policy_definition_id'] = policyDefinitionId;
        return this;
    }
    public set policyDefinitionId(policyDefinitionId: string | undefined) {
        this['policy_definition_id'] = policyDefinitionId;
    }
    public get policyDefinitionId() {
        return this['policy_definition_id'];
    }
    public withCreatedAt(createdAt: string): ShowOrganizationPolicyAssignmentResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): ShowOrganizationPolicyAssignmentResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt() {
        return this['updated_at'];
    }
}