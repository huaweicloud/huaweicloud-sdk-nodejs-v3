import { DailyDto } from './DailyDto';
import { ScheduleTask } from './ScheduleTask';


export class UpdateScheduleReqDTO {
    public name?: string;
    public enabled?: boolean;
    private 'start_time'?: number;
    private 'end_time'?: number;
    public priority?: number;
    public daily?: DailyDto;
    public tasks?: Array<ScheduleTask>;
    public constructor(name?: string, enabled?: boolean, endTime?: number, priority?: number, tasks?: Array<ScheduleTask>) { 
        this['name'] = name;
        this['enabled'] = enabled;
        this['end_time'] = endTime;
        this['priority'] = priority;
        this['tasks'] = tasks;
    }
    public withName(name: string): UpdateScheduleReqDTO {
        this['name'] = name;
        return this;
    }
    public withEnabled(enabled: boolean): UpdateScheduleReqDTO {
        this['enabled'] = enabled;
        return this;
    }
    public withStartTime(startTime: number): UpdateScheduleReqDTO {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): UpdateScheduleReqDTO {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withPriority(priority: number): UpdateScheduleReqDTO {
        this['priority'] = priority;
        return this;
    }
    public withDaily(daily: DailyDto): UpdateScheduleReqDTO {
        this['daily'] = daily;
        return this;
    }
    public withTasks(tasks: Array<ScheduleTask>): UpdateScheduleReqDTO {
        this['tasks'] = tasks;
        return this;
    }
}