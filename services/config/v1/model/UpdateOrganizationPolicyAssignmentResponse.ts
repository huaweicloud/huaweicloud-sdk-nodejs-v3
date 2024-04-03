import { PolicyFilterDefinition } from './PolicyFilterDefinition';
import { PolicyParameterValue } from './PolicyParameterValue';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateOrganizationPolicyAssignmentResponse extends SdkResponse {
    private 'owner_id'?: string;
    private 'organization_id'?: string;
    private 'organization_policy_assignment_urn'?: string;
    private 'organization_policy_assignment_id'?: string;
    private 'organization_policy_assignment_name'?: string;
    public description?: string;
    public period?: string;
    private 'policy_filter'?: PolicyFilterDefinition;
    public parameters?: { [key: string]: PolicyParameterValue; };
    private 'policy_definition_id'?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    public constructor() { 
        super();
    }
    public withOwnerId(ownerId: string): UpdateOrganizationPolicyAssignmentResponse {
        this['owner_id'] = ownerId;
        return this;
    }
    public set ownerId(ownerId: string  | undefined) {
        this['owner_id'] = ownerId;
    }
    public get ownerId(): string | undefined {
        return this['owner_id'];
    }
    public withOrganizationId(organizationId: string): UpdateOrganizationPolicyAssignmentResponse {
        this['organization_id'] = organizationId;
        return this;
    }
    public set organizationId(organizationId: string  | undefined) {
        this['organization_id'] = organizationId;
    }
    public get organizationId(): string | undefined {
        return this['organization_id'];
    }
    public withOrganizationPolicyAssignmentUrn(organizationPolicyAssignmentUrn: string): UpdateOrganizationPolicyAssignmentResponse {
        this['organization_policy_assignment_urn'] = organizationPolicyAssignmentUrn;
        return this;
    }
    public set organizationPolicyAssignmentUrn(organizationPolicyAssignmentUrn: string  | undefined) {
        this['organization_policy_assignment_urn'] = organizationPolicyAssignmentUrn;
    }
    public get organizationPolicyAssignmentUrn(): string | undefined {
        return this['organization_policy_assignment_urn'];
    }
    public withOrganizationPolicyAssignmentId(organizationPolicyAssignmentId: string): UpdateOrganizationPolicyAssignmentResponse {
        this['organization_policy_assignment_id'] = organizationPolicyAssignmentId;
        return this;
    }
    public set organizationPolicyAssignmentId(organizationPolicyAssignmentId: string  | undefined) {
        this['organization_policy_assignment_id'] = organizationPolicyAssignmentId;
    }
    public get organizationPolicyAssignmentId(): string | undefined {
        return this['organization_policy_assignment_id'];
    }
    public withOrganizationPolicyAssignmentName(organizationPolicyAssignmentName: string): UpdateOrganizationPolicyAssignmentResponse {
        this['organization_policy_assignment_name'] = organizationPolicyAssignmentName;
        return this;
    }
    public set organizationPolicyAssignmentName(organizationPolicyAssignmentName: string  | undefined) {
        this['organization_policy_assignment_name'] = organizationPolicyAssignmentName;
    }
    public get organizationPolicyAssignmentName(): string | undefined {
        return this['organization_policy_assignment_name'];
    }
    public withDescription(description: string): UpdateOrganizationPolicyAssignmentResponse {
        this['description'] = description;
        return this;
    }
    public withPeriod(period: string): UpdateOrganizationPolicyAssignmentResponse {
        this['period'] = period;
        return this;
    }
    public withPolicyFilter(policyFilter: PolicyFilterDefinition): UpdateOrganizationPolicyAssignmentResponse {
        this['policy_filter'] = policyFilter;
        return this;
    }
    public set policyFilter(policyFilter: PolicyFilterDefinition  | undefined) {
        this['policy_filter'] = policyFilter;
    }
    public get policyFilter(): PolicyFilterDefinition | undefined {
        return this['policy_filter'];
    }
    public withParameters(parameters: { [key: string]: PolicyParameterValue; }): UpdateOrganizationPolicyAssignmentResponse {
        this['parameters'] = parameters;
        return this;
    }
    public withPolicyDefinitionId(policyDefinitionId: string): UpdateOrganizationPolicyAssignmentResponse {
        this['policy_definition_id'] = policyDefinitionId;
        return this;
    }
    public set policyDefinitionId(policyDefinitionId: string  | undefined) {
        this['policy_definition_id'] = policyDefinitionId;
    }
    public get policyDefinitionId(): string | undefined {
        return this['policy_definition_id'];
    }
    public withCreatedAt(createdAt: string): UpdateOrganizationPolicyAssignmentResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): UpdateOrganizationPolicyAssignmentResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
}