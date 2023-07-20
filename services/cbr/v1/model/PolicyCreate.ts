import { PolicyTriggerReq } from './PolicyTriggerReq';
import { PolicyoODCreate } from './PolicyoODCreate';


export class PolicyCreate {
    public enabled?: boolean;
    public name?: string;
    private 'operation_definition'?: PolicyoODCreate;
    private 'operation_type'?: PolicyCreateOperationTypeEnum | string;
    public trigger?: PolicyTriggerReq;
    public constructor(name?: string, operationDefinition?: PolicyoODCreate, operationType?: string, trigger?: PolicyTriggerReq) { 
        this['name'] = name;
        this['operation_definition'] = operationDefinition;
        this['operation_type'] = operationType;
        this['trigger'] = trigger;
    }
    public withEnabled(enabled: boolean): PolicyCreate {
        this['enabled'] = enabled;
        return this;
    }
    public withName(name: string): PolicyCreate {
        this['name'] = name;
        return this;
    }
    public withOperationDefinition(operationDefinition: PolicyoODCreate): PolicyCreate {
        this['operation_definition'] = operationDefinition;
        return this;
    }
    public set operationDefinition(operationDefinition: PolicyoODCreate  | undefined) {
        this['operation_definition'] = operationDefinition;
    }
    public get operationDefinition(): PolicyoODCreate | undefined {
        return this['operation_definition'];
    }
    public withOperationType(operationType: PolicyCreateOperationTypeEnum | string): PolicyCreate {
        this['operation_type'] = operationType;
        return this;
    }
    public set operationType(operationType: PolicyCreateOperationTypeEnum | string  | undefined) {
        this['operation_type'] = operationType;
    }
    public get operationType(): PolicyCreateOperationTypeEnum | string | undefined {
        return this['operation_type'];
    }
    public withTrigger(trigger: PolicyTriggerReq): PolicyCreate {
        this['trigger'] = trigger;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PolicyCreateOperationTypeEnum {
    BACKUP = 'backup',
    REPLICATION = 'replication'
}
