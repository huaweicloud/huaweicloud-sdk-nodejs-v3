import { PolicyFilterDefinition } from './PolicyFilterDefinition';
import { PolicyFilterDefinitionV2 } from './PolicyFilterDefinitionV2';
import { PolicyParameterValue } from './PolicyParameterValue';


export class CustomPolicyAssignmentMetadata {
    public description?: string;
    public period?: CustomPolicyAssignmentMetadataPeriodEnum | string;
    public parameters?: { [key: string]: PolicyParameterValue; };
    private 'policy_filter'?: PolicyFilterDefinition;
    private 'policy_filter_v2'?: PolicyFilterDefinitionV2;
    private 'function_urn'?: string;
    public constructor(functionUrn?: string) { 
        this['function_urn'] = functionUrn;
    }
    public withDescription(description: string): CustomPolicyAssignmentMetadata {
        this['description'] = description;
        return this;
    }
    public withPeriod(period: CustomPolicyAssignmentMetadataPeriodEnum | string): CustomPolicyAssignmentMetadata {
        this['period'] = period;
        return this;
    }
    public withParameters(parameters: { [key: string]: PolicyParameterValue; }): CustomPolicyAssignmentMetadata {
        this['parameters'] = parameters;
        return this;
    }
    public withPolicyFilter(policyFilter: PolicyFilterDefinition): CustomPolicyAssignmentMetadata {
        this['policy_filter'] = policyFilter;
        return this;
    }
    public set policyFilter(policyFilter: PolicyFilterDefinition  | undefined) {
        this['policy_filter'] = policyFilter;
    }
    public get policyFilter(): PolicyFilterDefinition | undefined {
        return this['policy_filter'];
    }
    public withPolicyFilterV2(policyFilterV2: PolicyFilterDefinitionV2): CustomPolicyAssignmentMetadata {
        this['policy_filter_v2'] = policyFilterV2;
        return this;
    }
    public set policyFilterV2(policyFilterV2: PolicyFilterDefinitionV2  | undefined) {
        this['policy_filter_v2'] = policyFilterV2;
    }
    public get policyFilterV2(): PolicyFilterDefinitionV2 | undefined {
        return this['policy_filter_v2'];
    }
    public withFunctionUrn(functionUrn: string): CustomPolicyAssignmentMetadata {
        this['function_urn'] = functionUrn;
        return this;
    }
    public set functionUrn(functionUrn: string  | undefined) {
        this['function_urn'] = functionUrn;
    }
    public get functionUrn(): string | undefined {
        return this['function_urn'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CustomPolicyAssignmentMetadataPeriodEnum {
    ONE_HOUR = 'One_Hour',
    THREE_HOURS = 'Three_Hours',
    SIX_HOURS = 'Six_Hours',
    TWELVE_HOURS = 'Twelve_Hours',
    TWENTYFOUR_HOURS = 'TwentyFour_Hours'
}
