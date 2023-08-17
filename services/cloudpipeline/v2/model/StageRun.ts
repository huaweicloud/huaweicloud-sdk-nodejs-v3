import { JobRun } from './JobRun';
import { StepRun } from './StepRun';


export class StageRun {
    public id?: string;
    public category?: string;
    public name?: string;
    public identifier?: string;
    private 'run_always'?: boolean;
    public parallel?: string;
    private 'is_select'?: boolean;
    public sequence?: number;
    private 'depends_on'?: Array<string>;
    public condition?: string;
    public status?: string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    public pre?: Array<StepRun>;
    public post?: Array<StepRun>;
    public jobs?: Array<JobRun>;
    public constructor() { 
    }
    public withId(id: string): StageRun {
        this['id'] = id;
        return this;
    }
    public withCategory(category: string): StageRun {
        this['category'] = category;
        return this;
    }
    public withName(name: string): StageRun {
        this['name'] = name;
        return this;
    }
    public withIdentifier(identifier: string): StageRun {
        this['identifier'] = identifier;
        return this;
    }
    public withRunAlways(runAlways: boolean): StageRun {
        this['run_always'] = runAlways;
        return this;
    }
    public set runAlways(runAlways: boolean  | undefined) {
        this['run_always'] = runAlways;
    }
    public get runAlways(): boolean | undefined {
        return this['run_always'];
    }
    public withParallel(parallel: string): StageRun {
        this['parallel'] = parallel;
        return this;
    }
    public withIsSelect(isSelect: boolean): StageRun {
        this['is_select'] = isSelect;
        return this;
    }
    public set isSelect(isSelect: boolean  | undefined) {
        this['is_select'] = isSelect;
    }
    public get isSelect(): boolean | undefined {
        return this['is_select'];
    }
    public withSequence(sequence: number): StageRun {
        this['sequence'] = sequence;
        return this;
    }
    public withDependsOn(dependsOn: Array<string>): StageRun {
        this['depends_on'] = dependsOn;
        return this;
    }
    public set dependsOn(dependsOn: Array<string>  | undefined) {
        this['depends_on'] = dependsOn;
    }
    public get dependsOn(): Array<string> | undefined {
        return this['depends_on'];
    }
    public withCondition(condition: string): StageRun {
        this['condition'] = condition;
        return this;
    }
    public withStatus(status: string): StageRun {
        this['status'] = status;
        return this;
    }
    public withStartTime(startTime: number): StageRun {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): StageRun {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withPre(pre: Array<StepRun>): StageRun {
        this['pre'] = pre;
        return this;
    }
    public withPost(post: Array<StepRun>): StageRun {
        this['post'] = post;
        return this;
    }
    public withJobs(jobs: Array<JobRun>): StageRun {
        this['jobs'] = jobs;
        return this;
    }
}