import { PolicyAssociateVault } from './PolicyAssociateVault';
import { PolicyTriggerResp } from './PolicyTriggerResp';
import { PolicyoODCreate } from './PolicyoODCreate';


export class Policy {
    public enabled: boolean;
    public id: string;
    public name: string;
    private 'operation_definition': PolicyoODCreate | undefined;
    private 'operation_type': PolicyOperationTypeEnum | undefined;
    public trigger: PolicyTriggerResp;
    private 'associated_vaults'?: Array<PolicyAssociateVault> | undefined;
    public constructor(enabled?: any, id?: any, name?: any, operationDefinition?: any, operationType?: any, trigger?: any) { 
        this['enabled'] = enabled;
        this['id'] = id;
        this['name'] = name;
        this['operation_definition'] = operationDefinition;
        this['operation_type'] = operationType;
        this['trigger'] = trigger;
    }
    public withEnabled(enabled: boolean): Policy {
        this['enabled'] = enabled;
        return this;
    }
    public withId(id: string): Policy {
        this['id'] = id;
        return this;
    }
    public withName(name: string): Policy {
        this['name'] = name;
        return this;
    }
    public withOperationDefinition(operationDefinition: PolicyoODCreate): Policy {
        this['operation_definition'] = operationDefinition;
        return this;
    }
    public set operationDefinition(operationDefinition: PolicyoODCreate | undefined) {
        this['operation_definition'] = operationDefinition;
    }
    public get operationDefinition() {
        return this['operation_definition'];
    }
    public withOperationType(operationType: PolicyOperationTypeEnum): Policy {
        this['operation_type'] = operationType;
        return this;
    }
    public set operationType(operationType: PolicyOperationTypeEnum | undefined) {
        this['operation_type'] = operationType;
    }
    public get operationType() {
        return this['operation_type'];
    }
    public withTrigger(trigger: PolicyTriggerResp): Policy {
        this['trigger'] = trigger;
        return this;
    }
    public withAssociatedVaults(associatedVaults: Array<PolicyAssociateVault>): Policy {
        this['associated_vaults'] = associatedVaults;
        return this;
    }
    public set associatedVaults(associatedVaults: Array<PolicyAssociateVault> | undefined) {
        this['associated_vaults'] = associatedVaults;
    }
    public get associatedVaults() {
        return this['associated_vaults'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PolicyOperationTypeEnum {
    BACKUP = 'backup',
    REPLICATION = 'replication'
}
