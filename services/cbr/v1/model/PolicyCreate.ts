import { PolicyTriggerReq } from './PolicyTriggerReq';
import { PolicyoODCreate } from './PolicyoODCreate';


export class PolicyCreate {
    public enabled?: boolean;
    public name: string;
    private 'operation_definition': PolicyoODCreate | undefined;
    private 'operation_type': PolicyCreateOperationTypeEnum | undefined;
    public trigger: PolicyTriggerReq;
    public constructor(name?: any, operationDefinition?: any, operationType?: any, trigger?: any) { 
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
    public set operationDefinition(operationDefinition: PolicyoODCreate | undefined) {
        this['operation_definition'] = operationDefinition;
    }
    public get operationDefinition() {
        return this['operation_definition'];
    }
    public withOperationType(operationType: PolicyCreateOperationTypeEnum): PolicyCreate {
        this['operation_type'] = operationType;
        return this;
    }
    public set operationType(operationType: PolicyCreateOperationTypeEnum | undefined) {
        this['operation_type'] = operationType;
    }
    public get operationType() {
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
