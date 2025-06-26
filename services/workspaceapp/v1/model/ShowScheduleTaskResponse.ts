import { ScheduleTaskPolicy } from './ScheduleTaskPolicy';
import { ScheduleTaskTypeEnum } from './ScheduleTaskTypeEnum';
import { ScheduledTypeEnum } from './ScheduledTypeEnum';
import { TargetInfo } from './TargetInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowScheduleTaskResponse extends SdkResponse {
    public id?: string;
    private 'task_type'?: ScheduleTaskTypeEnum;
    private 'task_name'?: string;
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
    private 'target_infos'?: Array<TargetInfo>;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowScheduleTaskResponse {
        this['id'] = id;
        return this;
    }
    public withTaskType(taskType: ScheduleTaskTypeEnum): ShowScheduleTaskResponse {
        this['task_type'] = taskType;
        return this;
    }
    public set taskType(taskType: ScheduleTaskTypeEnum  | undefined) {
        this['task_type'] = taskType;
    }
    public get taskType(): ScheduleTaskTypeEnum | undefined {
        return this['task_type'];
    }
    public withTaskName(taskName: string): ShowScheduleTaskResponse {
        this['task_name'] = taskName;
        return this;
    }
    public set taskName(taskName: string  | undefined) {
        this['task_name'] = taskName;
    }
    public get taskName(): string | undefined {
        return this['task_name'];
    }
    public withScheduleTaskPolicy(scheduleTaskPolicy: ScheduleTaskPolicy): ShowScheduleTaskResponse {
        this['schedule_task_policy'] = scheduleTaskPolicy;
        return this;
    }
    public set scheduleTaskPolicy(scheduleTaskPolicy: ScheduleTaskPolicy  | undefined) {
        this['schedule_task_policy'] = scheduleTaskPolicy;
    }
    public get scheduleTaskPolicy(): ScheduleTaskPolicy | undefined {
        return this['schedule_task_policy'];
    }
    public withScheduledType(scheduledType: ScheduledTypeEnum): ShowScheduleTaskResponse {
        this['scheduled_type'] = scheduledType;
        return this;
    }
    public set scheduledType(scheduledType: ScheduledTypeEnum  | undefined) {
        this['scheduled_type'] = scheduledType;
    }
    public get scheduledType(): ScheduledTypeEnum | undefined {
        return this['scheduled_type'];
    }
    public withDayInterval(dayInterval: number): ShowScheduleTaskResponse {
        this['day_interval'] = dayInterval;
        return this;
    }
    public set dayInterval(dayInterval: number  | undefined) {
        this['day_interval'] = dayInterval;
    }
    public get dayInterval(): number | undefined {
        return this['day_interval'];
    }
    public withWeekList(weekList: string): ShowScheduleTaskResponse {
        this['week_list'] = weekList;
        return this;
    }
    public set weekList(weekList: string  | undefined) {
        this['week_list'] = weekList;
    }
    public get weekList(): string | undefined {
        return this['week_list'];
    }
    public withMonthList(monthList: string): ShowScheduleTaskResponse {
        this['month_list'] = monthList;
        return this;
    }
    public set monthList(monthList: string  | undefined) {
        this['month_list'] = monthList;
    }
    public get monthList(): string | undefined {
        return this['month_list'];
    }
    public withDateList(dateList: string): ShowScheduleTaskResponse {
        this['date_list'] = dateList;
        return this;
    }
    public set dateList(dateList: string  | undefined) {
        this['date_list'] = dateList;
    }
    public get dateList(): string | undefined {
        return this['date_list'];
    }
    public withTimeZone(timeZone: string): ShowScheduleTaskResponse {
        this['time_zone'] = timeZone;
        return this;
    }
    public set timeZone(timeZone: string  | undefined) {
        this['time_zone'] = timeZone;
    }
    public get timeZone(): string | undefined {
        return this['time_zone'];
    }
    public withScheduledDate(scheduledDate: string): ShowScheduleTaskResponse {
        this['scheduled_date'] = scheduledDate;
        return this;
    }
    public set scheduledDate(scheduledDate: string  | undefined) {
        this['scheduled_date'] = scheduledDate;
    }
    public get scheduledDate(): string | undefined {
        return this['scheduled_date'];
    }
    public withScheduledTime(scheduledTime: string): ShowScheduleTaskResponse {
        this['scheduled_time'] = scheduledTime;
        return this;
    }
    public set scheduledTime(scheduledTime: string  | undefined) {
        this['scheduled_time'] = scheduledTime;
    }
    public get scheduledTime(): string | undefined {
        return this['scheduled_time'];
    }
    public withExpireTime(expireTime: Date): ShowScheduleTaskResponse {
        this['expire_time'] = expireTime;
        return this;
    }
    public set expireTime(expireTime: Date  | undefined) {
        this['expire_time'] = expireTime;
    }
    public get expireTime(): Date | undefined {
        return this['expire_time'];
    }
    public withDescription(description: string): ShowScheduleTaskResponse {
        this['description'] = description;
        return this;
    }
    public withTargetInfos(targetInfos: Array<TargetInfo>): ShowScheduleTaskResponse {
        this['target_infos'] = targetInfos;
        return this;
    }
    public set targetInfos(targetInfos: Array<TargetInfo>  | undefined) {
        this['target_infos'] = targetInfos;
    }
    public get targetInfos(): Array<TargetInfo> | undefined {
        return this['target_infos'];
    }
}