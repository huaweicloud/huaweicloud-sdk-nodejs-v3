import { RunningRecord } from './RunningRecord';
import { TaskStatuses } from './TaskStatuses';


export class Status {
    public phase?: string;
    private 'secondary_phase'?: string;
    public duration?: number;
    private 'node_count_metrics'?: Array<Array<number>>;
    public tasks?: Array<string>;
    private 'start_time'?: number;
    private 'task_statuses'?: Array<TaskStatuses>;
    private 'running_records'?: Array<RunningRecord>;
    public constructor() { 
    }
    public withPhase(phase: string): Status {
        this['phase'] = phase;
        return this;
    }
    public withSecondaryPhase(secondaryPhase: string): Status {
        this['secondary_phase'] = secondaryPhase;
        return this;
    }
    public set secondaryPhase(secondaryPhase: string  | undefined) {
        this['secondary_phase'] = secondaryPhase;
    }
    public get secondaryPhase(): string | undefined {
        return this['secondary_phase'];
    }
    public withDuration(duration: number): Status {
        this['duration'] = duration;
        return this;
    }
    public withNodeCountMetrics(nodeCountMetrics: Array<Array<number>>): Status {
        this['node_count_metrics'] = nodeCountMetrics;
        return this;
    }
    public set nodeCountMetrics(nodeCountMetrics: Array<Array<number>>  | undefined) {
        this['node_count_metrics'] = nodeCountMetrics;
    }
    public get nodeCountMetrics(): Array<Array<number>> | undefined {
        return this['node_count_metrics'];
    }
    public withTasks(tasks: Array<string>): Status {
        this['tasks'] = tasks;
        return this;
    }
    public withStartTime(startTime: number): Status {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withTaskStatuses(taskStatuses: Array<TaskStatuses>): Status {
        this['task_statuses'] = taskStatuses;
        return this;
    }
    public set taskStatuses(taskStatuses: Array<TaskStatuses>  | undefined) {
        this['task_statuses'] = taskStatuses;
    }
    public get taskStatuses(): Array<TaskStatuses> | undefined {
        return this['task_statuses'];
    }
    public withRunningRecords(runningRecords: Array<RunningRecord>): Status {
        this['running_records'] = runningRecords;
        return this;
    }
    public set runningRecords(runningRecords: Array<RunningRecord>  | undefined) {
        this['running_records'] = runningRecords;
    }
    public get runningRecords(): Array<RunningRecord> | undefined {
        return this['running_records'];
    }
}