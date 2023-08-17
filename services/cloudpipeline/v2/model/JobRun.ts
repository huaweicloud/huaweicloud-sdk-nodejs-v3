import { StepRun } from './StepRun';


export class JobRun {
    public id?: string;
    public category?: string;
    public sequence?: number;
    public async?: string;
    public name?: string;
    public identifier?: string;
    private 'depends_on'?: Array<string>;
    public condition?: string;
    public resource?: string;
    private 'is_select'?: boolean;
    public timeout?: string;
    private 'last_dispatch_id'?: string;
    public status?: string;
    public message?: string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    public steps?: Array<StepRun>;
    public constructor() { 
    }
    public withId(id: string): JobRun {
        this['id'] = id;
        return this;
    }
    public withCategory(category: string): JobRun {
        this['category'] = category;
        return this;
    }
    public withSequence(sequence: number): JobRun {
        this['sequence'] = sequence;
        return this;
    }
    public withAsync(async: string): JobRun {
        this['async'] = async;
        return this;
    }
    public withName(name: string): JobRun {
        this['name'] = name;
        return this;
    }
    public withIdentifier(identifier: string): JobRun {
        this['identifier'] = identifier;
        return this;
    }
    public withDependsOn(dependsOn: Array<string>): JobRun {
        this['depends_on'] = dependsOn;
        return this;
    }
    public set dependsOn(dependsOn: Array<string>  | undefined) {
        this['depends_on'] = dependsOn;
    }
    public get dependsOn(): Array<string> | undefined {
        return this['depends_on'];
    }
    public withCondition(condition: string): JobRun {
        this['condition'] = condition;
        return this;
    }
    public withResource(resource: string): JobRun {
        this['resource'] = resource;
        return this;
    }
    public withIsSelect(isSelect: boolean): JobRun {
        this['is_select'] = isSelect;
        return this;
    }
    public set isSelect(isSelect: boolean  | undefined) {
        this['is_select'] = isSelect;
    }
    public get isSelect(): boolean | undefined {
        return this['is_select'];
    }
    public withTimeout(timeout: string): JobRun {
        this['timeout'] = timeout;
        return this;
    }
    public withLastDispatchId(lastDispatchId: string): JobRun {
        this['last_dispatch_id'] = lastDispatchId;
        return this;
    }
    public set lastDispatchId(lastDispatchId: string  | undefined) {
        this['last_dispatch_id'] = lastDispatchId;
    }
    public get lastDispatchId(): string | undefined {
        return this['last_dispatch_id'];
    }
    public withStatus(status: string): JobRun {
        this['status'] = status;
        return this;
    }
    public withMessage(message: string): JobRun {
        this['message'] = message;
        return this;
    }
    public withStartTime(startTime: number): JobRun {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): JobRun {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withSteps(steps: Array<StepRun>): JobRun {
        this['steps'] = steps;
        return this;
    }
}