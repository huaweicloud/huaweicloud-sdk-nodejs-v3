import { PolicyDefinitionDefaultResourceTypes } from './PolicyDefinitionDefaultResourceTypes';
import { PolicyParameterDefinition } from './PolicyParameterDefinition';


export class PolicyDefinition {
    public id?: string;
    public name?: string;
    private 'display_name'?: string;
    private 'policy_type'?: string;
    public description?: string;
    private 'policy_rule_type'?: string;
    private 'policy_rule'?: object;
    private 'trigger_type'?: string;
    public keywords?: Array<string>;
    private 'default_resource_types'?: Array<PolicyDefinitionDefaultResourceTypes>;
    public parameters?: { [key: string]: PolicyParameterDefinition; };
    public constructor() { 
    }
    public withId(id: string): PolicyDefinition {
        this['id'] = id;
        return this;
    }
    public withName(name: string): PolicyDefinition {
        this['name'] = name;
        return this;
    }
    public withDisplayName(displayName: string): PolicyDefinition {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withPolicyType(policyType: string): PolicyDefinition {
        this['policy_type'] = policyType;
        return this;
    }
    public set policyType(policyType: string  | undefined) {
        this['policy_type'] = policyType;
    }
    public get policyType(): string | undefined {
        return this['policy_type'];
    }
    public withDescription(description: string): PolicyDefinition {
        this['description'] = description;
        return this;
    }
    public withPolicyRuleType(policyRuleType: string): PolicyDefinition {
        this['policy_rule_type'] = policyRuleType;
        return this;
    }
    public set policyRuleType(policyRuleType: string  | undefined) {
        this['policy_rule_type'] = policyRuleType;
    }
    public get policyRuleType(): string | undefined {
        return this['policy_rule_type'];
    }
    public withPolicyRule(policyRule: object): PolicyDefinition {
        this['policy_rule'] = policyRule;
        return this;
    }
    public set policyRule(policyRule: object  | undefined) {
        this['policy_rule'] = policyRule;
    }
    public get policyRule(): object | undefined {
        return this['policy_rule'];
    }
    public withTriggerType(triggerType: string): PolicyDefinition {
        this['trigger_type'] = triggerType;
        return this;
    }
    public set triggerType(triggerType: string  | undefined) {
        this['trigger_type'] = triggerType;
    }
    public get triggerType(): string | undefined {
        return this['trigger_type'];
    }
    public withKeywords(keywords: Array<string>): PolicyDefinition {
        this['keywords'] = keywords;
        return this;
    }
    public withDefaultResourceTypes(defaultResourceTypes: Array<PolicyDefinitionDefaultResourceTypes>): PolicyDefinition {
        this['default_resource_types'] = defaultResourceTypes;
        return this;
    }
    public set defaultResourceTypes(defaultResourceTypes: Array<PolicyDefinitionDefaultResourceTypes>  | undefined) {
        this['default_resource_types'] = defaultResourceTypes;
    }
    public get defaultResourceTypes(): Array<PolicyDefinitionDefaultResourceTypes> | undefined {
        return this['default_resource_types'];
    }
    public withParameters(parameters: { [key: string]: PolicyParameterDefinition; }): PolicyDefinition {
        this['parameters'] = parameters;
        return this;
    }
}