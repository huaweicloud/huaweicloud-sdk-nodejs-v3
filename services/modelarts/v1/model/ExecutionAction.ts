import { DataRequirement } from './DataRequirement';
import { ExecutionActionPolicy } from './ExecutionActionPolicy';
import { WorkflowParameter } from './WorkflowParameter';


export class ExecutionAction {
    private 'action_name'?: ExecutionActionActionNameEnum | string;
    public policies?: ExecutionActionPolicy;
    public parameters?: Array<WorkflowParameter>;
    private 'data_requirements'?: Array<DataRequirement>;
    public constructor(actionName?: string) { 
        this['action_name'] = actionName;
    }
    public withActionName(actionName: ExecutionActionActionNameEnum | string): ExecutionAction {
        this['action_name'] = actionName;
        return this;
    }
    public set actionName(actionName: ExecutionActionActionNameEnum | string  | undefined) {
        this['action_name'] = actionName;
    }
    public get actionName(): ExecutionActionActionNameEnum | string | undefined {
        return this['action_name'];
    }
    public withPolicies(policies: ExecutionActionPolicy): ExecutionAction {
        this['policies'] = policies;
        return this;
    }
    public withParameters(parameters: Array<WorkflowParameter>): ExecutionAction {
        this['parameters'] = parameters;
        return this;
    }
    public withDataRequirements(dataRequirements: Array<DataRequirement>): ExecutionAction {
        this['data_requirements'] = dataRequirements;
        return this;
    }
    public set dataRequirements(dataRequirements: Array<DataRequirement>  | undefined) {
        this['data_requirements'] = dataRequirements;
    }
    public get dataRequirements(): Array<DataRequirement> | undefined {
        return this['data_requirements'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ExecutionActionActionNameEnum {
    STOP = 'stop'
}
