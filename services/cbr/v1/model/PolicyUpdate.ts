import { PolicyTriggerReq } from './PolicyTriggerReq';
import { PolicyoODCreate } from './PolicyoODCreate';


export class PolicyUpdate {
    public enabled?: boolean;
    public name?: string;
    private 'operation_definition'?: PolicyoODCreate | undefined;
    public trigger?: PolicyTriggerReq;
    public constructor() { 
    }
    public withEnabled(enabled: boolean): PolicyUpdate {
        this['enabled'] = enabled;
        return this;
    }
    public withName(name: string): PolicyUpdate {
        this['name'] = name;
        return this;
    }
    public withOperationDefinition(operationDefinition: PolicyoODCreate): PolicyUpdate {
        this['operation_definition'] = operationDefinition;
        return this;
    }
    public set operationDefinition(operationDefinition: PolicyoODCreate | undefined) {
        this['operation_definition'] = operationDefinition;
    }
    public get operationDefinition() {
        return this['operation_definition'];
    }
    public withTrigger(trigger: PolicyTriggerReq): PolicyUpdate {
        this['trigger'] = trigger;
        return this;
    }
}