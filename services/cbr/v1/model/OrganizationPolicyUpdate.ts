import { PolicyTriggerReq } from './PolicyTriggerReq';
import { PolicyoODCreate } from './PolicyoODCreate';


export class OrganizationPolicyUpdate {
    public name?: string;
    public description?: string;
    private 'policy_name'?: string;
    private 'policy_enabled'?: boolean;
    private 'policy_operation_definition'?: PolicyoODCreate;
    private 'policy_trigger'?: PolicyTriggerReq;
    private 'effective_scope'?: string;
    public constructor() { 
    }
    public withName(name: string): OrganizationPolicyUpdate {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): OrganizationPolicyUpdate {
        this['description'] = description;
        return this;
    }
    public withPolicyName(policyName: string): OrganizationPolicyUpdate {
        this['policy_name'] = policyName;
        return this;
    }
    public set policyName(policyName: string  | undefined) {
        this['policy_name'] = policyName;
    }
    public get policyName(): string | undefined {
        return this['policy_name'];
    }
    public withPolicyEnabled(policyEnabled: boolean): OrganizationPolicyUpdate {
        this['policy_enabled'] = policyEnabled;
        return this;
    }
    public set policyEnabled(policyEnabled: boolean  | undefined) {
        this['policy_enabled'] = policyEnabled;
    }
    public get policyEnabled(): boolean | undefined {
        return this['policy_enabled'];
    }
    public withPolicyOperationDefinition(policyOperationDefinition: PolicyoODCreate): OrganizationPolicyUpdate {
        this['policy_operation_definition'] = policyOperationDefinition;
        return this;
    }
    public set policyOperationDefinition(policyOperationDefinition: PolicyoODCreate  | undefined) {
        this['policy_operation_definition'] = policyOperationDefinition;
    }
    public get policyOperationDefinition(): PolicyoODCreate | undefined {
        return this['policy_operation_definition'];
    }
    public withPolicyTrigger(policyTrigger: PolicyTriggerReq): OrganizationPolicyUpdate {
        this['policy_trigger'] = policyTrigger;
        return this;
    }
    public set policyTrigger(policyTrigger: PolicyTriggerReq  | undefined) {
        this['policy_trigger'] = policyTrigger;
    }
    public get policyTrigger(): PolicyTriggerReq | undefined {
        return this['policy_trigger'];
    }
    public withEffectiveScope(effectiveScope: string): OrganizationPolicyUpdate {
        this['effective_scope'] = effectiveScope;
        return this;
    }
    public set effectiveScope(effectiveScope: string  | undefined) {
        this['effective_scope'] = effectiveScope;
    }
    public get effectiveScope(): string | undefined {
        return this['effective_scope'];
    }
}