import { ExcutionStepInputs } from './ExcutionStepInputs';


export class ExcutionStep {
    private 'execution_step_id'?: string;
    public action?: string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    public message?: string;
    public name?: string;
    public status?: string;
    public inputs?: Array<ExcutionStepInputs>;
    public outputs?: Array<ExcutionStepInputs>;
    public properties?: { [key: string]: string; };
    public constructor() { 
    }
    public withExecutionStepId(executionStepId: string): ExcutionStep {
        this['execution_step_id'] = executionStepId;
        return this;
    }
    public set executionStepId(executionStepId: string  | undefined) {
        this['execution_step_id'] = executionStepId;
    }
    public get executionStepId(): string | undefined {
        return this['execution_step_id'];
    }
    public withAction(action: string): ExcutionStep {
        this['action'] = action;
        return this;
    }
    public withStartTime(startTime: number): ExcutionStep {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ExcutionStep {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withMessage(message: string): ExcutionStep {
        this['message'] = message;
        return this;
    }
    public withName(name: string): ExcutionStep {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): ExcutionStep {
        this['status'] = status;
        return this;
    }
    public withInputs(inputs: Array<ExcutionStepInputs>): ExcutionStep {
        this['inputs'] = inputs;
        return this;
    }
    public withOutputs(outputs: Array<ExcutionStepInputs>): ExcutionStep {
        this['outputs'] = outputs;
        return this;
    }
    public withProperties(properties: { [key: string]: string; }): ExcutionStep {
        this['properties'] = properties;
        return this;
    }
}