import { CustomPolicy } from './CustomPolicy';
import { PolicyFilterDefinition } from './PolicyFilterDefinition';
import { PolicyParameterValue } from './PolicyParameterValue';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPolicyAssignmentResponse extends SdkResponse {
    private 'policy_assignment_type'?: ShowPolicyAssignmentResponsePolicyAssignmentTypeEnum | undefined;
    public id?: string;
    public name?: string;
    public description?: string;
    private 'policy_filter'?: PolicyFilterDefinition | undefined;
    public period?: string;
    public state?: string;
    public created?: string;
    public updated?: string;
    private 'policy_definition_id'?: string | undefined;
    private 'custom_policy'?: CustomPolicy | undefined;
    public parameters?: { [key: string]: PolicyParameterValue; };
    private 'created_by'?: string | undefined;
    public constructor() { 
        super();
    }
    public withPolicyAssignmentType(policyAssignmentType: ShowPolicyAssignmentResponsePolicyAssignmentTypeEnum): ShowPolicyAssignmentResponse {
        this['policy_assignment_type'] = policyAssignmentType;
        return this;
    }
    public set policyAssignmentType(policyAssignmentType: ShowPolicyAssignmentResponsePolicyAssignmentTypeEnum | undefined) {
        this['policy_assignment_type'] = policyAssignmentType;
    }
    public get policyAssignmentType() {
        return this['policy_assignment_type'];
    }
    public withId(id: string): ShowPolicyAssignmentResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShowPolicyAssignmentResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ShowPolicyAssignmentResponse {
        this['description'] = description;
        return this;
    }
    public withPolicyFilter(policyFilter: PolicyFilterDefinition): ShowPolicyAssignmentResponse {
        this['policy_filter'] = policyFilter;
        return this;
    }
    public set policyFilter(policyFilter: PolicyFilterDefinition | undefined) {
        this['policy_filter'] = policyFilter;
    }
    public get policyFilter() {
        return this['policy_filter'];
    }
    public withPeriod(period: string): ShowPolicyAssignmentResponse {
        this['period'] = period;
        return this;
    }
    public withState(state: string): ShowPolicyAssignmentResponse {
        this['state'] = state;
        return this;
    }
    public withCreated(created: string): ShowPolicyAssignmentResponse {
        this['created'] = created;
        return this;
    }
    public withUpdated(updated: string): ShowPolicyAssignmentResponse {
        this['updated'] = updated;
        return this;
    }
    public withPolicyDefinitionId(policyDefinitionId: string): ShowPolicyAssignmentResponse {
        this['policy_definition_id'] = policyDefinitionId;
        return this;
    }
    public set policyDefinitionId(policyDefinitionId: string | undefined) {
        this['policy_definition_id'] = policyDefinitionId;
    }
    public get policyDefinitionId() {
        return this['policy_definition_id'];
    }
    public withCustomPolicy(customPolicy: CustomPolicy): ShowPolicyAssignmentResponse {
        this['custom_policy'] = customPolicy;
        return this;
    }
    public set customPolicy(customPolicy: CustomPolicy | undefined) {
        this['custom_policy'] = customPolicy;
    }
    public get customPolicy() {
        return this['custom_policy'];
    }
    public withParameters(parameters: { [key: string]: PolicyParameterValue; }): ShowPolicyAssignmentResponse {
        this['parameters'] = parameters;
        return this;
    }
    public withCreatedBy(createdBy: string): ShowPolicyAssignmentResponse {
        this['created_by'] = createdBy;
        return this;
    }
    public set createdBy(createdBy: string | undefined) {
        this['created_by'] = createdBy;
    }
    public get createdBy() {
        return this['created_by'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowPolicyAssignmentResponsePolicyAssignmentTypeEnum {
    BUILTIN = 'builtin',
    CUSTOM = 'custom'
}
