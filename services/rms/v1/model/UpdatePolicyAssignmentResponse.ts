import { CustomPolicy } from './CustomPolicy';
import { PolicyFilterDefinition } from './PolicyFilterDefinition';
import { PolicyParameterValue } from './PolicyParameterValue';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdatePolicyAssignmentResponse extends SdkResponse {
    private 'policy_assignment_type'?: UpdatePolicyAssignmentResponsePolicyAssignmentTypeEnum | undefined;
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
    public constructor() { 
        super();
    }
    public withPolicyAssignmentType(policyAssignmentType: UpdatePolicyAssignmentResponsePolicyAssignmentTypeEnum): UpdatePolicyAssignmentResponse {
        this['policy_assignment_type'] = policyAssignmentType;
        return this;
    }
    public set policyAssignmentType(policyAssignmentType: UpdatePolicyAssignmentResponsePolicyAssignmentTypeEnum | undefined) {
        this['policy_assignment_type'] = policyAssignmentType;
    }
    public get policyAssignmentType() {
        return this['policy_assignment_type'];
    }
    public withId(id: string): UpdatePolicyAssignmentResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): UpdatePolicyAssignmentResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdatePolicyAssignmentResponse {
        this['description'] = description;
        return this;
    }
    public withPolicyFilter(policyFilter: PolicyFilterDefinition): UpdatePolicyAssignmentResponse {
        this['policy_filter'] = policyFilter;
        return this;
    }
    public set policyFilter(policyFilter: PolicyFilterDefinition | undefined) {
        this['policy_filter'] = policyFilter;
    }
    public get policyFilter() {
        return this['policy_filter'];
    }
    public withPeriod(period: string): UpdatePolicyAssignmentResponse {
        this['period'] = period;
        return this;
    }
    public withState(state: string): UpdatePolicyAssignmentResponse {
        this['state'] = state;
        return this;
    }
    public withCreated(created: string): UpdatePolicyAssignmentResponse {
        this['created'] = created;
        return this;
    }
    public withUpdated(updated: string): UpdatePolicyAssignmentResponse {
        this['updated'] = updated;
        return this;
    }
    public withPolicyDefinitionId(policyDefinitionId: string): UpdatePolicyAssignmentResponse {
        this['policy_definition_id'] = policyDefinitionId;
        return this;
    }
    public set policyDefinitionId(policyDefinitionId: string | undefined) {
        this['policy_definition_id'] = policyDefinitionId;
    }
    public get policyDefinitionId() {
        return this['policy_definition_id'];
    }
    public withCustomPolicy(customPolicy: CustomPolicy): UpdatePolicyAssignmentResponse {
        this['custom_policy'] = customPolicy;
        return this;
    }
    public set customPolicy(customPolicy: CustomPolicy | undefined) {
        this['custom_policy'] = customPolicy;
    }
    public get customPolicy() {
        return this['custom_policy'];
    }
    public withParameters(parameters: { [key: string]: PolicyParameterValue; }): UpdatePolicyAssignmentResponse {
        this['parameters'] = parameters;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdatePolicyAssignmentResponsePolicyAssignmentTypeEnum {
    BUILTIN = 'builtin',
    CUSTOM = 'custom'
}
