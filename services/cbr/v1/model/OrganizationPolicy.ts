import { PolicyTriggerReq } from './PolicyTriggerReq';
import { PolicyoODCreate } from './PolicyoODCreate';


export class OrganizationPolicy {
    public id?: string;
    public name?: string;
    public description?: string;
    private 'operation_type'?: OrganizationPolicyOperationTypeEnum | string;
    private 'domain_id'?: string;
    private 'policy_name'?: string;
    private 'policy_enabled'?: boolean;
    private 'policy_operation_definition'?: PolicyoODCreate;
    private 'policy_trigger'?: PolicyTriggerReq;
    public status?: string;
    private 'domain_name'?: string;
    private 'effective_scope'?: string;
    public constructor(id?: string, name?: string, operationType?: string, domainId?: string, policyName?: string, policyEnabled?: boolean, policyOperationDefinition?: PolicyoODCreate, policyTrigger?: PolicyTriggerReq, status?: string) { 
        this['id'] = id;
        this['name'] = name;
        this['operation_type'] = operationType;
        this['domain_id'] = domainId;
        this['policy_name'] = policyName;
        this['policy_enabled'] = policyEnabled;
        this['policy_operation_definition'] = policyOperationDefinition;
        this['policy_trigger'] = policyTrigger;
        this['status'] = status;
    }
    public withId(id: string): OrganizationPolicy {
        this['id'] = id;
        return this;
    }
    public withName(name: string): OrganizationPolicy {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): OrganizationPolicy {
        this['description'] = description;
        return this;
    }
    public withOperationType(operationType: OrganizationPolicyOperationTypeEnum | string): OrganizationPolicy {
        this['operation_type'] = operationType;
        return this;
    }
    public set operationType(operationType: OrganizationPolicyOperationTypeEnum | string  | undefined) {
        this['operation_type'] = operationType;
    }
    public get operationType(): OrganizationPolicyOperationTypeEnum | string | undefined {
        return this['operation_type'];
    }
    public withDomainId(domainId: string): OrganizationPolicy {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withPolicyName(policyName: string): OrganizationPolicy {
        this['policy_name'] = policyName;
        return this;
    }
    public set policyName(policyName: string  | undefined) {
        this['policy_name'] = policyName;
    }
    public get policyName(): string | undefined {
        return this['policy_name'];
    }
    public withPolicyEnabled(policyEnabled: boolean): OrganizationPolicy {
        this['policy_enabled'] = policyEnabled;
        return this;
    }
    public set policyEnabled(policyEnabled: boolean  | undefined) {
        this['policy_enabled'] = policyEnabled;
    }
    public get policyEnabled(): boolean | undefined {
        return this['policy_enabled'];
    }
    public withPolicyOperationDefinition(policyOperationDefinition: PolicyoODCreate): OrganizationPolicy {
        this['policy_operation_definition'] = policyOperationDefinition;
        return this;
    }
    public set policyOperationDefinition(policyOperationDefinition: PolicyoODCreate  | undefined) {
        this['policy_operation_definition'] = policyOperationDefinition;
    }
    public get policyOperationDefinition(): PolicyoODCreate | undefined {
        return this['policy_operation_definition'];
    }
    public withPolicyTrigger(policyTrigger: PolicyTriggerReq): OrganizationPolicy {
        this['policy_trigger'] = policyTrigger;
        return this;
    }
    public set policyTrigger(policyTrigger: PolicyTriggerReq  | undefined) {
        this['policy_trigger'] = policyTrigger;
    }
    public get policyTrigger(): PolicyTriggerReq | undefined {
        return this['policy_trigger'];
    }
    public withStatus(status: string): OrganizationPolicy {
        this['status'] = status;
        return this;
    }
    public withDomainName(domainName: string): OrganizationPolicy {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withEffectiveScope(effectiveScope: string): OrganizationPolicy {
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
export enum OrganizationPolicyOperationTypeEnum {
    BACKUP = 'backup',
    REPLICATION = 'replication'
}
