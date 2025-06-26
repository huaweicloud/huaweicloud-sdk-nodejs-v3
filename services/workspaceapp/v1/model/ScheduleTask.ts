import { ScheduleTaskPolicy } from './ScheduleTaskPolicy';
import { ScheduleTaskStatus } from './ScheduleTaskStatus';
import { ScheduleTaskTypeEnum } from './ScheduleTaskTypeEnum';
import { ScheduledTypeEnum } from './ScheduledTypeEnum';


export class ScheduleTask {
    public id?: string;
    private 'task_name'?: string;
    private 'last_status'?: ScheduleTaskStatus;
    private 'task_type'?: ScheduleTaskTypeEnum;
    private 'task_cron'?: string;
    private 'next_execution_time'?: string;
    private 'schedule_task_policy'?: ScheduleTaskPolicy;
    private 'scheduled_type'?: ScheduledTypeEnum;
    private 'day_interval'?: number;
    private 'week_list'?: string;
    private 'month_list'?: string;
    private 'date_list'?: string;
    private 'time_zone'?: string;
    private 'scheduled_date'?: string;
    private 'scheduled_time'?: string;
    private 'expire_time'?: Date;
    public description?: string;
    private 'is_enable'?: boolean;
    private 'create_time'?: Date;
    private 'update_time'?: Date;
    public constructor() { 
    }
    public withId(id: string): ScheduleTask {
        this['id'] = id;
        return this;
    }
    public withTaskName(taskName: string): ScheduleTask {
        this['task_name'] = taskName;
        return this;
    }
    public set taskName(taskName: string  | undefined) {
        this['task_name'] = taskName;
    }
    public get taskName(): string | undefined {
        return this['task_name'];
    }
    public withLastStatus(lastStatus: ScheduleTaskStatus): ScheduleTask {
        this['last_status'] = lastStatus;
        return this;
    }
    public set lastStatus(lastStatus: ScheduleTaskStatus  | undefined) {
        this['last_status'] = lastStatus;
    }
    public get lastStatus(): ScheduleTaskStatus | undefined {
        return this['last_status'];
    }
    public withTaskType(taskType: ScheduleTaskTypeEnum): ScheduleTask {
        this['task_type'] = taskType;
        return this;
    }
    public set taskType(taskType: ScheduleTaskTypeEnum  | undefined) {
        this['task_type'] = taskType;
    }
    public get taskType(): ScheduleTaskTypeEnum | undefined {
        return this['task_type'];
    }
    public withTaskCron(taskCron: string): ScheduleTask {
        this['task_cron'] = taskCron;
        return this;
    }
    public set taskCron(taskCron: string  | undefined) {
        this['task_cron'] = taskCron;
    }
    public get taskCron(): string | undefined {
        return this['task_cron'];
    }
    public withNextExecutionTime(nextExecutionTime: string): ScheduleTask {
        this['next_execution_time'] = nextExecutionTime;
        return this;
    }
    public set nextExecutionTime(nextExecutionTime: string  | undefined) {
        this['next_execution_time'] = nextExecutionTime;
    }
    public get nextExecutionTime(): string | undefined {
        return this['next_execution_time'];
    }
    public withScheduleTaskPolicy(scheduleTaskPolicy: ScheduleTaskPolicy): ScheduleTask {
        this['schedule_task_policy'] = scheduleTaskPolicy;
        return this;
    }
    public set scheduleTaskPolicy(scheduleTaskPolicy: ScheduleTaskPolicy  | undefined) {
        this['schedule_task_policy'] = scheduleTaskPolicy;
    }
    public get scheduleTaskPolicy(): ScheduleTaskPolicy | undefined {
        return this['schedule_task_policy'];
    }
    public withScheduledType(scheduledType: ScheduledTypeEnum): ScheduleTask {
        this['scheduled_type'] = scheduledType;
        return this;
    }
    public set scheduledType(scheduledType: ScheduledTypeEnum  | undefined) {
        this['scheduled_type'] = scheduledType;
    }
    public get scheduledType(): ScheduledTypeEnum | undefined {
        return this['scheduled_type'];
    }
    public withDayInterval(dayInterval: number): ScheduleTask {
        this['day_interval'] = dayInterval;
        return this;
    }
    public set dayInterval(dayInterval: number  | undefined) {
        this['day_interval'] = dayInterval;
    }
    public get dayInterval(): number | undefined {
        return this['day_interval'];
    }
    public withWeekList(weekList: string): ScheduleTask {
        this['week_list'] = weekList;
        return this;
    }
    public set weekList(weekList: string  | undefined) {
        this['week_list'] = weekList;
    }
    public get weekList(): string | undefined {
        return this['week_list'];
    }
    public withMonthList(monthList: string): ScheduleTask {
        this['month_list'] = monthList;
        return this;
    }
    public set monthList(monthList: string  | undefined) {
        this['month_list'] = monthList;
    }
    public get monthList(): string | undefined {
        return this['month_list'];
    }
    public withDateList(dateList: string): ScheduleTask {
        this['date_list'] = dateList;
        return this;
    }
    public set dateList(dateList: string  | undefined) {
        this['date_list'] = dateList;
    }
    public get dateList(): string | undefined {
        return this['date_list'];
    }
    public withTimeZone(timeZone: string): ScheduleTask {
        this['time_zone'] = timeZone;
        return this;
    }
    public set timeZone(timeZone: string  | undefined) {
        this['time_zone'] = timeZone;
    }
    public get timeZone(): string | undefined {
        return this['time_zone'];
    }
    public withScheduledDate(scheduledDate: string): ScheduleTask {
        this['scheduled_date'] = scheduledDate;
        return this;
    }
    public set scheduledDate(scheduledDate: string  | undefined) {
        this['scheduled_date'] = scheduledDate;
    }
    public get scheduledDate(): string | undefined {
        return this['scheduled_date'];
    }
    public withScheduledTime(scheduledTime: string): ScheduleTask {
        this['scheduled_time'] = scheduledTime;
        return this;
    }
    public set scheduledTime(scheduledTime: string  | undefined) {
        this['scheduled_time'] = scheduledTime;
    }
    public get scheduledTime(): string | undefined {
        return this['scheduled_time'];
    }
    public withExpireTime(expireTime: Date): ScheduleTask {
        this['expire_time'] = expireTime;
        return this;
    }
    public set expireTime(expireTime: Date  | undefined) {
        this['expire_time'] = expireTime;
    }
    public get expireTime(): Date | undefined {
        return this['expire_time'];
    }
    public withDescription(description: string): ScheduleTask {
        this['description'] = description;
        return this;
    }
    public withIsEnable(isEnable: boolean): ScheduleTask {
        this['is_enable'] = isEnable;
        return this;
    }
    public set isEnable(isEnable: boolean  | undefined) {
        this['is_enable'] = isEnable;
    }
    public get isEnable(): boolean | undefined {
        return this['is_enable'];
    }
    public withCreateTime(createTime: Date): ScheduleTask {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: Date): ScheduleTask {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
}