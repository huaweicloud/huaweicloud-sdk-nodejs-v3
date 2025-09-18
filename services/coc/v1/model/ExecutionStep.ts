import { ExecutionStepInputs } from './ExecutionStepInputs';


export class ExecutionStep {
    private 'execution_step_id'?: string;
    public action?: string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    public message?: string;
    public name?: string;
    public status?: string;
    public inputs?: Array<ExecutionStepInputs>;
    public outputs?: Array<ExecutionStepInputs>;
    public properties?: { [key: string]: string; };
    public constructor() { 
    }
    public withExecutionStepId(executionStepId: string): ExecutionStep {
        this['execution_step_id'] = executionStepId;
        return this;
    }
    public set executionStepId(executionStepId: string  | undefined) {
        this['execution_step_id'] = executionStepId;
    }
    public get executionStepId(): string | undefined {
        return this['execution_step_id'];
    }
    public withAction(action: string): ExecutionStep {
        this['action'] = action;
        return this;
    }
    public withStartTime(startTime: number): ExecutionStep {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ExecutionStep {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withMessage(message: string): ExecutionStep {
        this['message'] = message;
        return this;
    }
    public withName(name: string): ExecutionStep {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): ExecutionStep {
        this['status'] = status;
        return this;
    }
    public withInputs(inputs: Array<ExecutionStepInputs>): ExecutionStep {
        this['inputs'] = inputs;
        return this;
    }
    public withOutputs(outputs: Array<ExecutionStepInputs>): ExecutionStep {
        this['outputs'] = outputs;
        return this;
    }
    public withProperties(properties: { [key: string]: string; }): ExecutionStep {
        this['properties'] = properties;
        return this;
    }
}