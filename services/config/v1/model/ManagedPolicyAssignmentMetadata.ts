import { PolicyFilterDefinition } from './PolicyFilterDefinition';
import { PolicyParameterValue } from './PolicyParameterValue';


export class ManagedPolicyAssignmentMetadata {
    public description?: string;
    public period?: ManagedPolicyAssignmentMetadataPeriodEnum | string;
    public parameters?: { [key: string]: PolicyParameterValue; };
    private 'policy_filter'?: PolicyFilterDefinition;
    private 'policy_definition_id'?: string;
    public constructor(policyDefinitionId?: string) { 
        this['policy_definition_id'] = policyDefinitionId;
    }
    public withDescription(description: string): ManagedPolicyAssignmentMetadata {
        this['description'] = description;
        return this;
    }
    public withPeriod(period: ManagedPolicyAssignmentMetadataPeriodEnum | string): ManagedPolicyAssignmentMetadata {
        this['period'] = period;
        return this;
    }
    public withParameters(parameters: { [key: string]: PolicyParameterValue; }): ManagedPolicyAssignmentMetadata {
        this['parameters'] = parameters;
        return this;
    }
    public withPolicyFilter(policyFilter: PolicyFilterDefinition): ManagedPolicyAssignmentMetadata {
        this['policy_filter'] = policyFilter;
        return this;
    }
    public set policyFilter(policyFilter: PolicyFilterDefinition  | undefined) {
        this['policy_filter'] = policyFilter;
    }
    public get policyFilter(): PolicyFilterDefinition | undefined {
        return this['policy_filter'];
    }
    public withPolicyDefinitionId(policyDefinitionId: string): ManagedPolicyAssignmentMetadata {
        this['policy_definition_id'] = policyDefinitionId;
        return this;
    }
    public set policyDefinitionId(policyDefinitionId: string  | undefined) {
        this['policy_definition_id'] = policyDefinitionId;
    }
    public get policyDefinitionId(): string | undefined {
        return this['policy_definition_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ManagedPolicyAssignmentMetadataPeriodEnum {
    ONE_HOUR = 'One_Hour',
    THREE_HOURS = 'Three_Hours',
    SIX_HOURS = 'Six_Hours',
    TWELVE_HOURS = 'Twelve_Hours',
    TWENTYFOUR_HOURS = 'TwentyFour_Hours'
}
