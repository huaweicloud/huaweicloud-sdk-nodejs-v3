import { CustomPolicy } from './CustomPolicy';
import { PolicyFilterDefinition } from './PolicyFilterDefinition';
import { PolicyFilterDefinitionV2 } from './PolicyFilterDefinitionV2';
import { PolicyParameterValue } from './PolicyParameterValue';
import { ResourceTag } from './ResourceTag';


export class PolicyAssignment {
    private 'policy_assignment_type'?: PolicyAssignmentPolicyAssignmentTypeEnum | string;
    public id?: string;
    public name?: string;
    public description?: string;
    private 'policy_filter'?: PolicyFilterDefinition;
    private 'policy_filter_v2'?: PolicyFilterDefinitionV2;
    public period?: string;
    public state?: string;
    public created?: string;
    public updated?: string;
    private 'policy_definition_id'?: string;
    private 'custom_policy'?: CustomPolicy;
    public parameters?: { [key: string]: PolicyParameterValue; };
    public tags?: Array<ResourceTag>;
    private 'created_by'?: string;
    private 'target_type'?: string;
    private 'target_id'?: string;
    public constructor() { 
    }
    public withPolicyAssignmentType(policyAssignmentType: PolicyAssignmentPolicyAssignmentTypeEnum | string): PolicyAssignment {
        this['policy_assignment_type'] = policyAssignmentType;
        return this;
    }
    public set policyAssignmentType(policyAssignmentType: PolicyAssignmentPolicyAssignmentTypeEnum | string  | undefined) {
        this['policy_assignment_type'] = policyAssignmentType;
    }
    public get policyAssignmentType(): PolicyAssignmentPolicyAssignmentTypeEnum | string | undefined {
        return this['policy_assignment_type'];
    }
    public withId(id: string): PolicyAssignment {
        this['id'] = id;
        return this;
    }
    public withName(name: string): PolicyAssignment {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): PolicyAssignment {
        this['description'] = description;
        return this;
    }
    public withPolicyFilter(policyFilter: PolicyFilterDefinition): PolicyAssignment {
        this['policy_filter'] = policyFilter;
        return this;
    }
    public set policyFilter(policyFilter: PolicyFilterDefinition  | undefined) {
        this['policy_filter'] = policyFilter;
    }
    public get policyFilter(): PolicyFilterDefinition | undefined {
        return this['policy_filter'];
    }
    public withPolicyFilterV2(policyFilterV2: PolicyFilterDefinitionV2): PolicyAssignment {
        this['policy_filter_v2'] = policyFilterV2;
        return this;
    }
    public set policyFilterV2(policyFilterV2: PolicyFilterDefinitionV2  | undefined) {
        this['policy_filter_v2'] = policyFilterV2;
    }
    public get policyFilterV2(): PolicyFilterDefinitionV2 | undefined {
        return this['policy_filter_v2'];
    }
    public withPeriod(period: string): PolicyAssignment {
        this['period'] = period;
        return this;
    }
    public withState(state: string): PolicyAssignment {
        this['state'] = state;
        return this;
    }
    public withCreated(created: string): PolicyAssignment {
        this['created'] = created;
        return this;
    }
    public withUpdated(updated: string): PolicyAssignment {
        this['updated'] = updated;
        return this;
    }
    public withPolicyDefinitionId(policyDefinitionId: string): PolicyAssignment {
        this['policy_definition_id'] = policyDefinitionId;
        return this;
    }
    public set policyDefinitionId(policyDefinitionId: string  | undefined) {
        this['policy_definition_id'] = policyDefinitionId;
    }
    public get policyDefinitionId(): string | undefined {
        return this['policy_definition_id'];
    }
    public withCustomPolicy(customPolicy: CustomPolicy): PolicyAssignment {
        this['custom_policy'] = customPolicy;
        return this;
    }
    public set customPolicy(customPolicy: CustomPolicy  | undefined) {
        this['custom_policy'] = customPolicy;
    }
    public get customPolicy(): CustomPolicy | undefined {
        return this['custom_policy'];
    }
    public withParameters(parameters: { [key: string]: PolicyParameterValue; }): PolicyAssignment {
        this['parameters'] = parameters;
        return this;
    }
    public withTags(tags: Array<ResourceTag>): PolicyAssignment {
        this['tags'] = tags;
        return this;
    }
    public withCreatedBy(createdBy: string): PolicyAssignment {
        this['created_by'] = createdBy;
        return this;
    }
    public set createdBy(createdBy: string  | undefined) {
        this['created_by'] = createdBy;
    }
    public get createdBy(): string | undefined {
        return this['created_by'];
    }
    public withTargetType(targetType: string): PolicyAssignment {
        this['target_type'] = targetType;
        return this;
    }
    public set targetType(targetType: string  | undefined) {
        this['target_type'] = targetType;
    }
    public get targetType(): string | undefined {
        return this['target_type'];
    }
    public withTargetId(targetId: string): PolicyAssignment {
        this['target_id'] = targetId;
        return this;
    }
    public set targetId(targetId: string  | undefined) {
        this['target_id'] = targetId;
    }
    public get targetId(): string | undefined {
        return this['target_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PolicyAssignmentPolicyAssignmentTypeEnum {
    BUILTIN = 'builtin',
    CUSTOM = 'custom'
}
