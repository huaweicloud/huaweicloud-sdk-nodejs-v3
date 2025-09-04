import { DailyDto } from './DailyDto';
import { ScheduleTask } from './ScheduleTask';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateScheduleResponse extends SdkResponse {
    private 'schedule_id'?: string;
    private 'node_id'?: string;
    public name?: string;
    private 'cycle_type'?: string;
    public enabled?: boolean;
    private 'start_time'?: number;
    private 'end_time'?: number;
    public priority?: number;
    public daily?: DailyDto;
    public tasks?: Array<ScheduleTask>;
    public constructor() { 
        super();
    }
    public withScheduleId(scheduleId: string): CreateScheduleResponse {
        this['schedule_id'] = scheduleId;
        return this;
    }
    public set scheduleId(scheduleId: string  | undefined) {
        this['schedule_id'] = scheduleId;
    }
    public get scheduleId(): string | undefined {
        return this['schedule_id'];
    }
    public withNodeId(nodeId: string): CreateScheduleResponse {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withName(name: string): CreateScheduleResponse {
        this['name'] = name;
        return this;
    }
    public withCycleType(cycleType: string): CreateScheduleResponse {
        this['cycle_type'] = cycleType;
        return this;
    }
    public set cycleType(cycleType: string  | undefined) {
        this['cycle_type'] = cycleType;
    }
    public get cycleType(): string | undefined {
        return this['cycle_type'];
    }
    public withEnabled(enabled: boolean): CreateScheduleResponse {
        this['enabled'] = enabled;
        return this;
    }
    public withStartTime(startTime: number): CreateScheduleResponse {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): CreateScheduleResponse {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withPriority(priority: number): CreateScheduleResponse {
        this['priority'] = priority;
        return this;
    }
    public withDaily(daily: DailyDto): CreateScheduleResponse {
        this['daily'] = daily;
        return this;
    }
    public withTasks(tasks: Array<ScheduleTask>): CreateScheduleResponse {
        this['tasks'] = tasks;
        return this;
    }
}