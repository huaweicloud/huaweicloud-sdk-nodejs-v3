import { CustomPolicy } from './CustomPolicy';
import { PolicyFilterDefinition } from './PolicyFilterDefinition';
import { PolicyParameterValue } from './PolicyParameterValue';


export class PolicyAssignmentRequestBody {
    private 'policy_assignment_type'?: PolicyAssignmentRequestBodyPolicyAssignmentTypeEnum | undefined;
    public name: string;
    public description?: string;
    public period?: PolicyAssignmentRequestBodyPeriodEnum;
    private 'policy_filter'?: PolicyFilterDefinition | undefined;
    private 'custom_policy'?: CustomPolicy | undefined;
    private 'policy_definition_id'?: string | undefined;
    public parameters?: { [key: string]: PolicyParameterValue; };
    public constructor(name?: any) { 
        this['name'] = name;
    }
    public withPolicyAssignmentType(policyAssignmentType: PolicyAssignmentRequestBodyPolicyAssignmentTypeEnum): PolicyAssignmentRequestBody {
        this['policy_assignment_type'] = policyAssignmentType;
        return this;
    }
    public set policyAssignmentType(policyAssignmentType: PolicyAssignmentRequestBodyPolicyAssignmentTypeEnum | undefined) {
        this['policy_assignment_type'] = policyAssignmentType;
    }
    public get policyAssignmentType() {
        return this['policy_assignment_type'];
    }
    public withName(name: string): PolicyAssignmentRequestBody {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): PolicyAssignmentRequestBody {
        this['description'] = description;
        return this;
    }
    public withPeriod(period: PolicyAssignmentRequestBodyPeriodEnum): PolicyAssignmentRequestBody {
        this['period'] = period;
        return this;
    }
    public withPolicyFilter(policyFilter: PolicyFilterDefinition): PolicyAssignmentRequestBody {
        this['policy_filter'] = policyFilter;
        return this;
    }
    public set policyFilter(policyFilter: PolicyFilterDefinition | undefined) {
        this['policy_filter'] = policyFilter;
    }
    public get policyFilter() {
        return this['policy_filter'];
    }
    public withCustomPolicy(customPolicy: CustomPolicy): PolicyAssignmentRequestBody {
        this['custom_policy'] = customPolicy;
        return this;
    }
    public set customPolicy(customPolicy: CustomPolicy | undefined) {
        this['custom_policy'] = customPolicy;
    }
    public get customPolicy() {
        return this['custom_policy'];
    }
    public withPolicyDefinitionId(policyDefinitionId: string): PolicyAssignmentRequestBody {
        this['policy_definition_id'] = policyDefinitionId;
        return this;
    }
    public set policyDefinitionId(policyDefinitionId: string | undefined) {
        this['policy_definition_id'] = policyDefinitionId;
    }
    public get policyDefinitionId() {
        return this['policy_definition_id'];
    }
    public withParameters(parameters: { [key: string]: PolicyParameterValue; }): PolicyAssignmentRequestBody {
        this['parameters'] = parameters;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PolicyAssignmentRequestBodyPolicyAssignmentTypeEnum {
    BUILTIN = 'builtin',
    CUSTOM = 'custom'
}
/**
    * @export
    * @enum {string}
    */
export enum PolicyAssignmentRequestBodyPeriodEnum {
    ONE_HOUR = 'One_Hour',
    THREE_HOURS = 'Three_Hours',
    SIX_HOURS = 'Six_Hours',
    TWELVE_HOURS = 'Twelve_Hours',
    TWENTYFOUR_HOURS = 'TwentyFour_Hours'
}
