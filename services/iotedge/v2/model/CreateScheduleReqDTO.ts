import { DailyDto } from './DailyDto';
import { ScheduleTask } from './ScheduleTask';


export class CreateScheduleReqDTO {
    private 'schedule_id'?: string;
    public name?: string;
    private 'cycle_type'?: string;
    public enabled?: boolean;
    private 'start_time'?: number;
    private 'end_time'?: number;
    public priority?: number;
    public daily?: DailyDto;
    public tasks?: Array<ScheduleTask>;
    public constructor(name?: string, cycleType?: string, enabled?: boolean, endTime?: number, priority?: number, tasks?: Array<ScheduleTask>) { 
        this['name'] = name;
        this['cycle_type'] = cycleType;
        this['enabled'] = enabled;
        this['end_time'] = endTime;
        this['priority'] = priority;
        this['tasks'] = tasks;
    }
    public withScheduleId(scheduleId: string): CreateScheduleReqDTO {
        this['schedule_id'] = scheduleId;
        return this;
    }
    public set scheduleId(scheduleId: string  | undefined) {
        this['schedule_id'] = scheduleId;
    }
    public get scheduleId(): string | undefined {
        return this['schedule_id'];
    }
    public withName(name: string): CreateScheduleReqDTO {
        this['name'] = name;
        return this;
    }
    public withCycleType(cycleType: string): CreateScheduleReqDTO {
        this['cycle_type'] = cycleType;
        return this;
    }
    public set cycleType(cycleType: string  | undefined) {
        this['cycle_type'] = cycleType;
    }
    public get cycleType(): string | undefined {
        return this['cycle_type'];
    }
    public withEnabled(enabled: boolean): CreateScheduleReqDTO {
        this['enabled'] = enabled;
        return this;
    }
    public withStartTime(startTime: number): CreateScheduleReqDTO {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): CreateScheduleReqDTO {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withPriority(priority: number): CreateScheduleReqDTO {
        this['priority'] = priority;
        return this;
    }
    public withDaily(daily: DailyDto): CreateScheduleReqDTO {
        this['daily'] = daily;
        return this;
    }
    public withTasks(tasks: Array<ScheduleTask>): CreateScheduleReqDTO {
        this['tasks'] = tasks;
        return this;
    }
}