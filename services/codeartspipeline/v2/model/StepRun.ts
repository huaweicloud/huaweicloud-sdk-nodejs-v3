import { StepRunInputs } from './StepRunInputs';


export class StepRun {
    public name?: string;
    public task?: string;
    private 'business_type'?: string;
    public inputs?: Array<StepRunInputs>;
    public sequence?: number;
    private 'official_task_version'?: string;
    public identifier?: string;
    private 'multi_step_editable'?: number;
    public id?: string;
    private 'endpoint_ids'?: Array<string>;
    private 'last_dispatch_id'?: string;
    public status?: string;
    public message?: string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    public constructor() { 
    }
    public withName(name: string): StepRun {
        this['name'] = name;
        return this;
    }
    public withTask(task: string): StepRun {
        this['task'] = task;
        return this;
    }
    public withBusinessType(businessType: string): StepRun {
        this['business_type'] = businessType;
        return this;
    }
    public set businessType(businessType: string  | undefined) {
        this['business_type'] = businessType;
    }
    public get businessType(): string | undefined {
        return this['business_type'];
    }
    public withInputs(inputs: Array<StepRunInputs>): StepRun {
        this['inputs'] = inputs;
        return this;
    }
    public withSequence(sequence: number): StepRun {
        this['sequence'] = sequence;
        return this;
    }
    public withOfficialTaskVersion(officialTaskVersion: string): StepRun {
        this['official_task_version'] = officialTaskVersion;
        return this;
    }
    public set officialTaskVersion(officialTaskVersion: string  | undefined) {
        this['official_task_version'] = officialTaskVersion;
    }
    public get officialTaskVersion(): string | undefined {
        return this['official_task_version'];
    }
    public withIdentifier(identifier: string): StepRun {
        this['identifier'] = identifier;
        return this;
    }
    public withMultiStepEditable(multiStepEditable: number): StepRun {
        this['multi_step_editable'] = multiStepEditable;
        return this;
    }
    public set multiStepEditable(multiStepEditable: number  | undefined) {
        this['multi_step_editable'] = multiStepEditable;
    }
    public get multiStepEditable(): number | undefined {
        return this['multi_step_editable'];
    }
    public withId(id: string): StepRun {
        this['id'] = id;
        return this;
    }
    public withEndpointIds(endpointIds: Array<string>): StepRun {
        this['endpoint_ids'] = endpointIds;
        return this;
    }
    public set endpointIds(endpointIds: Array<string>  | undefined) {
        this['endpoint_ids'] = endpointIds;
    }
    public get endpointIds(): Array<string> | undefined {
        return this['endpoint_ids'];
    }
    public withLastDispatchId(lastDispatchId: string): StepRun {
        this['last_dispatch_id'] = lastDispatchId;
        return this;
    }
    public set lastDispatchId(lastDispatchId: string  | undefined) {
        this['last_dispatch_id'] = lastDispatchId;
    }
    public get lastDispatchId(): string | undefined {
        return this['last_dispatch_id'];
    }
    public withStatus(status: string): StepRun {
        this['status'] = status;
        return this;
    }
    public withMessage(message: string): StepRun {
        this['message'] = message;
        return this;
    }
    public withStartTime(startTime: number): StepRun {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): StepRun {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
}