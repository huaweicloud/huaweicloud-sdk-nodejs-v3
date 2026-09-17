import { DateInfo } from './DateInfo';
import { TableInfoOpen } from './TableInfoOpen';


export class TaskInfo {
    private 'task_name'?: string;
    public description?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'white_list'?: Array<DateInfo>;
    public type?: string;
    private 'vacuum_mode'?: string;
    private 'vacuum_target'?: string;
    private 'vacuum_threshold'?: string;
    private 'vacuum_retrieving_space'?: string;
    private 'vacuum_priority'?: string;
    private 'time_zone'?: string;
    public priority?: Array<TableInfoOpen>;
    public category?: string;
    public constructor() { 
    }
    public withTaskName(taskName: string): TaskInfo {
        this['task_name'] = taskName;
        return this;
    }
    public set taskName(taskName: string  | undefined) {
        this['task_name'] = taskName;
    }
    public get taskName(): string | undefined {
        return this['task_name'];
    }
    public withDescription(description: string): TaskInfo {
        this['description'] = description;
        return this;
    }
    public withStartTime(startTime: string): TaskInfo {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): TaskInfo {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withWhiteList(whiteList: Array<DateInfo>): TaskInfo {
        this['white_list'] = whiteList;
        return this;
    }
    public set whiteList(whiteList: Array<DateInfo>  | undefined) {
        this['white_list'] = whiteList;
    }
    public get whiteList(): Array<DateInfo> | undefined {
        return this['white_list'];
    }
    public withType(type: string): TaskInfo {
        this['type'] = type;
        return this;
    }
    public withVacuumMode(vacuumMode: string): TaskInfo {
        this['vacuum_mode'] = vacuumMode;
        return this;
    }
    public set vacuumMode(vacuumMode: string  | undefined) {
        this['vacuum_mode'] = vacuumMode;
    }
    public get vacuumMode(): string | undefined {
        return this['vacuum_mode'];
    }
    public withVacuumTarget(vacuumTarget: string): TaskInfo {
        this['vacuum_target'] = vacuumTarget;
        return this;
    }
    public set vacuumTarget(vacuumTarget: string  | undefined) {
        this['vacuum_target'] = vacuumTarget;
    }
    public get vacuumTarget(): string | undefined {
        return this['vacuum_target'];
    }
    public withVacuumThreshold(vacuumThreshold: string): TaskInfo {
        this['vacuum_threshold'] = vacuumThreshold;
        return this;
    }
    public set vacuumThreshold(vacuumThreshold: string  | undefined) {
        this['vacuum_threshold'] = vacuumThreshold;
    }
    public get vacuumThreshold(): string | undefined {
        return this['vacuum_threshold'];
    }
    public withVacuumRetrievingSpace(vacuumRetrievingSpace: string): TaskInfo {
        this['vacuum_retrieving_space'] = vacuumRetrievingSpace;
        return this;
    }
    public set vacuumRetrievingSpace(vacuumRetrievingSpace: string  | undefined) {
        this['vacuum_retrieving_space'] = vacuumRetrievingSpace;
    }
    public get vacuumRetrievingSpace(): string | undefined {
        return this['vacuum_retrieving_space'];
    }
    public withVacuumPriority(vacuumPriority: string): TaskInfo {
        this['vacuum_priority'] = vacuumPriority;
        return this;
    }
    public set vacuumPriority(vacuumPriority: string  | undefined) {
        this['vacuum_priority'] = vacuumPriority;
    }
    public get vacuumPriority(): string | undefined {
        return this['vacuum_priority'];
    }
    public withTimeZone(timeZone: string): TaskInfo {
        this['time_zone'] = timeZone;
        return this;
    }
    public set timeZone(timeZone: string  | undefined) {
        this['time_zone'] = timeZone;
    }
    public get timeZone(): string | undefined {
        return this['time_zone'];
    }
    public withPriority(priority: Array<TableInfoOpen>): TaskInfo {
        this['priority'] = priority;
        return this;
    }
    public withCategory(category: string): TaskInfo {
        this['category'] = category;
        return this;
    }
}