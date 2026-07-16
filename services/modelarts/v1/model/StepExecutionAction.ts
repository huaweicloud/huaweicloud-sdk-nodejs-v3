import { DataRequirement } from './DataRequirement';
import { WorkflowParameter } from './WorkflowParameter';


export class StepExecutionAction {
    private 'action_name'?: StepExecutionActionActionNameEnum | string;
    private 'data_requirements'?: Array<DataRequirement>;
    public parameters?: Array<WorkflowParameter>;
    public constructor(actionName?: string) { 
        this['action_name'] = actionName;
    }
    public withActionName(actionName: StepExecutionActionActionNameEnum | string): StepExecutionAction {
        this['action_name'] = actionName;
        return this;
    }
    public set actionName(actionName: StepExecutionActionActionNameEnum | string  | undefined) {
        this['action_name'] = actionName;
    }
    public get actionName(): StepExecutionActionActionNameEnum | string | undefined {
        return this['action_name'];
    }
    public withDataRequirements(dataRequirements: Array<DataRequirement>): StepExecutionAction {
        this['data_requirements'] = dataRequirements;
        return this;
    }
    public set dataRequirements(dataRequirements: Array<DataRequirement>  | undefined) {
        this['data_requirements'] = dataRequirements;
    }
    public get dataRequirements(): Array<DataRequirement> | undefined {
        return this['data_requirements'];
    }
    public withParameters(parameters: Array<WorkflowParameter>): StepExecutionAction {
        this['parameters'] = parameters;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum StepExecutionActionActionNameEnum {
    RETRY = 'retry：重试',
    STOP = 'stop：停止',
    CONTINUE = 'continue：停止'
}
