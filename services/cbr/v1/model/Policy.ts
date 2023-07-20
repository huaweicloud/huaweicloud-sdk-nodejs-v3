import { PolicyAssociateVault } from './PolicyAssociateVault';
import { PolicyTriggerResp } from './PolicyTriggerResp';
import { PolicyoODCreate } from './PolicyoODCreate';


export class Policy {
    public enabled?: boolean;
    public id?: string;
    public name?: string;
    private 'operation_definition'?: PolicyoODCreate;
    private 'operation_type'?: PolicyOperationTypeEnum | string;
    public trigger?: PolicyTriggerResp;
    private 'associated_vaults'?: Array<PolicyAssociateVault>;
    public constructor(enabled?: boolean, id?: string, name?: string, operationDefinition?: PolicyoODCreate, operationType?: string, trigger?: PolicyTriggerResp) { 
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
    public set operationDefinition(operationDefinition: PolicyoODCreate  | undefined) {
        this['operation_definition'] = operationDefinition;
    }
    public get operationDefinition(): PolicyoODCreate | undefined {
        return this['operation_definition'];
    }
    public withOperationType(operationType: PolicyOperationTypeEnum | string): Policy {
        this['operation_type'] = operationType;
        return this;
    }
    public set operationType(operationType: PolicyOperationTypeEnum | string  | undefined) {
        this['operation_type'] = operationType;
    }
    public get operationType(): PolicyOperationTypeEnum | string | undefined {
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
    public set associatedVaults(associatedVaults: Array<PolicyAssociateVault>  | undefined) {
        this['associated_vaults'] = associatedVaults;
    }
    public get associatedVaults(): Array<PolicyAssociateVault> | undefined {
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
