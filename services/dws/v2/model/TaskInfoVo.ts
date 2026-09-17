import { DateInfo } from './DateInfo';
import { TableInfoOpen } from './TableInfoOpen';


export class TaskInfoVo {
    public category?: string;
    public description?: string;
    public type?: string;
    private 'task_id'?: string;
    private 'task_name'?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'white_list'?: Array<DateInfo>;
    private 'vacuum_mode'?: string;
    private 'vacuum_target'?: string;
    private 'is_paused'?: number;
    private 'vacuum_threshold'?: string;
    private 'vacuum_retrieving_space'?: string;
    private 'vacuum_priority'?: Array<TableInfoOpen>;
    private 'time_zone'?: string;
    public constructor() { 
    }
    public withCategory(category: string): TaskInfoVo {
        this['category'] = category;
        return this;
    }
    public withDescription(description: string): TaskInfoVo {
        this['description'] = description;
        return this;
    }
    public withType(type: string): TaskInfoVo {
        this['type'] = type;
        return this;
    }
    public withTaskId(taskId: string): TaskInfoVo {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withTaskName(taskName: string): TaskInfoVo {
        this['task_name'] = taskName;
        return this;
    }
    public set taskName(taskName: string  | undefined) {
        this['task_name'] = taskName;
    }
    public get taskName(): string | undefined {
        return this['task_name'];
    }
    public withStartTime(startTime: string): TaskInfoVo {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): TaskInfoVo {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withWhiteList(whiteList: Array<DateInfo>): TaskInfoVo {
        this['white_list'] = whiteList;
        return this;
    }
    public set whiteList(whiteList: Array<DateInfo>  | undefined) {
        this['white_list'] = whiteList;
    }
    public get whiteList(): Array<DateInfo> | undefined {
        return this['white_list'];
    }
    public withVacuumMode(vacuumMode: string): TaskInfoVo {
        this['vacuum_mode'] = vacuumMode;
        return this;
    }
    public set vacuumMode(vacuumMode: string  | undefined) {
        this['vacuum_mode'] = vacuumMode;
    }
    public get vacuumMode(): string | undefined {
        return this['vacuum_mode'];
    }
    public withVacuumTarget(vacuumTarget: string): TaskInfoVo {
        this['vacuum_target'] = vacuumTarget;
        return this;
    }
    public set vacuumTarget(vacuumTarget: string  | undefined) {
        this['vacuum_target'] = vacuumTarget;
    }
    public get vacuumTarget(): string | undefined {
        return this['vacuum_target'];
    }
    public withIsPaused(isPaused: number): TaskInfoVo {
        this['is_paused'] = isPaused;
        return this;
    }
    public set isPaused(isPaused: number  | undefined) {
        this['is_paused'] = isPaused;
    }
    public get isPaused(): number | undefined {
        return this['is_paused'];
    }
    public withVacuumThreshold(vacuumThreshold: string): TaskInfoVo {
        this['vacuum_threshold'] = vacuumThreshold;
        return this;
    }
    public set vacuumThreshold(vacuumThreshold: string  | undefined) {
        this['vacuum_threshold'] = vacuumThreshold;
    }
    public get vacuumThreshold(): string | undefined {
        return this['vacuum_threshold'];
    }
    public withVacuumRetrievingSpace(vacuumRetrievingSpace: string): TaskInfoVo {
        this['vacuum_retrieving_space'] = vacuumRetrievingSpace;
        return this;
    }
    public set vacuumRetrievingSpace(vacuumRetrievingSpace: string  | undefined) {
        this['vacuum_retrieving_space'] = vacuumRetrievingSpace;
    }
    public get vacuumRetrievingSpace(): string | undefined {
        return this['vacuum_retrieving_space'];
    }
    public withVacuumPriority(vacuumPriority: Array<TableInfoOpen>): TaskInfoVo {
        this['vacuum_priority'] = vacuumPriority;
        return this;
    }
    public set vacuumPriority(vacuumPriority: Array<TableInfoOpen>  | undefined) {
        this['vacuum_priority'] = vacuumPriority;
    }
    public get vacuumPriority(): Array<TableInfoOpen> | undefined {
        return this['vacuum_priority'];
    }
    public withTimeZone(timeZone: string): TaskInfoVo {
        this['time_zone'] = timeZone;
        return this;
    }
    public set timeZone(timeZone: string  | undefined) {
        this['time_zone'] = timeZone;
    }
    public get timeZone(): string | undefined {
        return this['time_zone'];
    }
}