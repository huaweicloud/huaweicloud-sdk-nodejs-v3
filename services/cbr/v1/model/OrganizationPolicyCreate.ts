import { PolicyTriggerReq } from './PolicyTriggerReq';
import { PolicyoODCreate } from './PolicyoODCreate';


export class OrganizationPolicyCreate {
    public name?: string;
    public description?: string;
    private 'operation_type'?: OrganizationPolicyCreateOperationTypeEnum | string;
    private 'policy_name'?: string;
    private 'policy_enabled'?: boolean;
    private 'policy_operation_definition'?: PolicyoODCreate;
    private 'policy_trigger'?: PolicyTriggerReq;
    private 'effective_scope'?: string;
    public constructor(name?: string, operationType?: string, policyName?: string, policyEnabled?: boolean, policyOperationDefinition?: PolicyoODCreate, policyTrigger?: PolicyTriggerReq) { 
        this['name'] = name;
        this['operation_type'] = operationType;
        this['policy_name'] = policyName;
        this['policy_enabled'] = policyEnabled;
        this['policy_operation_definition'] = policyOperationDefinition;
        this['policy_trigger'] = policyTrigger;
    }
    public withName(name: string): OrganizationPolicyCreate {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): OrganizationPolicyCreate {
        this['description'] = description;
        return this;
    }
    public withOperationType(operationType: OrganizationPolicyCreateOperationTypeEnum | string): OrganizationPolicyCreate {
        this['operation_type'] = operationType;
        return this;
    }
    public set operationType(operationType: OrganizationPolicyCreateOperationTypeEnum | string  | undefined) {
        this['operation_type'] = operationType;
    }
    public get operationType(): OrganizationPolicyCreateOperationTypeEnum | string | undefined {
        return this['operation_type'];
    }
    public withPolicyName(policyName: string): OrganizationPolicyCreate {
        this['policy_name'] = policyName;
        return this;
    }
    public set policyName(policyName: string  | undefined) {
        this['policy_name'] = policyName;
    }
    public get policyName(): string | undefined {
        return this['policy_name'];
    }
    public withPolicyEnabled(policyEnabled: boolean): OrganizationPolicyCreate {
        this['policy_enabled'] = policyEnabled;
        return this;
    }
    public set policyEnabled(policyEnabled: boolean  | undefined) {
        this['policy_enabled'] = policyEnabled;
    }
    public get policyEnabled(): boolean | undefined {
        return this['policy_enabled'];
    }
    public withPolicyOperationDefinition(policyOperationDefinition: PolicyoODCreate): OrganizationPolicyCreate {
        this['policy_operation_definition'] = policyOperationDefinition;
        return this;
    }
    public set policyOperationDefinition(policyOperationDefinition: PolicyoODCreate  | undefined) {
        this['policy_operation_definition'] = policyOperationDefinition;
    }
    public get policyOperationDefinition(): PolicyoODCreate | undefined {
        return this['policy_operation_definition'];
    }
    public withPolicyTrigger(policyTrigger: PolicyTriggerReq): OrganizationPolicyCreate {
        this['policy_trigger'] = policyTrigger;
        return this;
    }
    public set policyTrigger(policyTrigger: PolicyTriggerReq  | undefined) {
        this['policy_trigger'] = policyTrigger;
    }
    public get policyTrigger(): PolicyTriggerReq | undefined {
        return this['policy_trigger'];
    }
    public withEffectiveScope(effectiveScope: string): OrganizationPolicyCreate {
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

/**
    * @export
    * @enum {string}
    */
export enum OrganizationPolicyCreateOperationTypeEnum {
    BACKUP = 'backup',
    REPLICATION = 'replication'
}
