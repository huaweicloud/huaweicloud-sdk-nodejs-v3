import { ApplyObject } from './ApplyObject';
import { ScheduledTaskConfig } from './ScheduledTaskConfig';


export class UpdateScheduledTasksReq {
    private 'scheduled_type'?: UpdateScheduledTasksReqScheduledTypeEnum | string;
    private 'day_interval'?: number;
    private 'week_list'?: string;
    private 'month_list'?: string;
    private 'date_list'?: string;
    private 'scheduled_date'?: string;
    private 'scheduled_time'?: string;
    private 'expire_time'?: string;
    private 'gray_count'?: number;
    private 'gray_desktop_ids'?: Array<string>;
    private 'gray_fail_threshold'?: number;
    private 'life_cycle_type'?: string;
    private 'time_zone'?: string;
    private 'task_name'?: string;
    private 'force_execute'?: boolean;
    public description?: string;
    public enable?: boolean;
    private 'extra_params'?: string;
    private 'apply_objects'?: Array<ApplyObject>;
    public priority?: number;
    private 'is_gray'?: boolean;
    private 'wait_time'?: number;
    public constructor() { 
    }
    public withScheduledType(scheduledType: UpdateScheduledTasksReqScheduledTypeEnum | string): UpdateScheduledTasksReq {
        this['scheduled_type'] = scheduledType;
        return this;
    }
    public set scheduledType(scheduledType: UpdateScheduledTasksReqScheduledTypeEnum | string  | undefined) {
        this['scheduled_type'] = scheduledType;
    }
    public get scheduledType(): UpdateScheduledTasksReqScheduledTypeEnum | string | undefined {
        return this['scheduled_type'];
    }
    public withDayInterval(dayInterval: number): UpdateScheduledTasksReq {
        this['day_interval'] = dayInterval;
        return this;
    }
    public set dayInterval(dayInterval: number  | undefined) {
        this['day_interval'] = dayInterval;
    }
    public get dayInterval(): number | undefined {
        return this['day_interval'];
    }
    public withWeekList(weekList: string): UpdateScheduledTasksReq {
        this['week_list'] = weekList;
        return this;
    }
    public set weekList(weekList: string  | undefined) {
        this['week_list'] = weekList;
    }
    public get weekList(): string | undefined {
        return this['week_list'];
    }
    public withMonthList(monthList: string): UpdateScheduledTasksReq {
        this['month_list'] = monthList;
        return this;
    }
    public set monthList(monthList: string  | undefined) {
        this['month_list'] = monthList;
    }
    public get monthList(): string | undefined {
        return this['month_list'];
    }
    public withDateList(dateList: string): UpdateScheduledTasksReq {
        this['date_list'] = dateList;
        return this;
    }
    public set dateList(dateList: string  | undefined) {
        this['date_list'] = dateList;
    }
    public get dateList(): string | undefined {
        return this['date_list'];
    }
    public withScheduledDate(scheduledDate: string): UpdateScheduledTasksReq {
        this['scheduled_date'] = scheduledDate;
        return this;
    }
    public set scheduledDate(scheduledDate: string  | undefined) {
        this['scheduled_date'] = scheduledDate;
    }
    public get scheduledDate(): string | undefined {
        return this['scheduled_date'];
    }
    public withScheduledTime(scheduledTime: string): UpdateScheduledTasksReq {
        this['scheduled_time'] = scheduledTime;
        return this;
    }
    public set scheduledTime(scheduledTime: string  | undefined) {
        this['scheduled_time'] = scheduledTime;
    }
    public get scheduledTime(): string | undefined {
        return this['scheduled_time'];
    }
    public withExpireTime(expireTime: string): UpdateScheduledTasksReq {
        this['expire_time'] = expireTime;
        return this;
    }
    public set expireTime(expireTime: string  | undefined) {
        this['expire_time'] = expireTime;
    }
    public get expireTime(): string | undefined {
        return this['expire_time'];
    }
    public withGrayCount(grayCount: number): UpdateScheduledTasksReq {
        this['gray_count'] = grayCount;
        return this;
    }
    public set grayCount(grayCount: number  | undefined) {
        this['gray_count'] = grayCount;
    }
    public get grayCount(): number | undefined {
        return this['gray_count'];
    }
    public withGrayDesktopIds(grayDesktopIds: Array<string>): UpdateScheduledTasksReq {
        this['gray_desktop_ids'] = grayDesktopIds;
        return this;
    }
    public set grayDesktopIds(grayDesktopIds: Array<string>  | undefined) {
        this['gray_desktop_ids'] = grayDesktopIds;
    }
    public get grayDesktopIds(): Array<string> | undefined {
        return this['gray_desktop_ids'];
    }
    public withGrayFailThreshold(grayFailThreshold: number): UpdateScheduledTasksReq {
        this['gray_fail_threshold'] = grayFailThreshold;
        return this;
    }
    public set grayFailThreshold(grayFailThreshold: number  | undefined) {
        this['gray_fail_threshold'] = grayFailThreshold;
    }
    public get grayFailThreshold(): number | undefined {
        return this['gray_fail_threshold'];
    }
    public withLifeCycleType(lifeCycleType: string): UpdateScheduledTasksReq {
        this['life_cycle_type'] = lifeCycleType;
        return this;
    }
    public set lifeCycleType(lifeCycleType: string  | undefined) {
        this['life_cycle_type'] = lifeCycleType;
    }
    public get lifeCycleType(): string | undefined {
        return this['life_cycle_type'];
    }
    public withTimeZone(timeZone: string): UpdateScheduledTasksReq {
        this['time_zone'] = timeZone;
        return this;
    }
    public set timeZone(timeZone: string  | undefined) {
        this['time_zone'] = timeZone;
    }
    public get timeZone(): string | undefined {
        return this['time_zone'];
    }
    public withTaskName(taskName: string): UpdateScheduledTasksReq {
        this['task_name'] = taskName;
        return this;
    }
    public set taskName(taskName: string  | undefined) {
        this['task_name'] = taskName;
    }
    public get taskName(): string | undefined {
        return this['task_name'];
    }
    public withForceExecute(forceExecute: boolean): UpdateScheduledTasksReq {
        this['force_execute'] = forceExecute;
        return this;
    }
    public set forceExecute(forceExecute: boolean  | undefined) {
        this['force_execute'] = forceExecute;
    }
    public get forceExecute(): boolean | undefined {
        return this['force_execute'];
    }
    public withDescription(description: string): UpdateScheduledTasksReq {
        this['description'] = description;
        return this;
    }
    public withEnable(enable: boolean): UpdateScheduledTasksReq {
        this['enable'] = enable;
        return this;
    }
    public withExtraParams(extraParams: string): UpdateScheduledTasksReq {
        this['extra_params'] = extraParams;
        return this;
    }
    public set extraParams(extraParams: string  | undefined) {
        this['extra_params'] = extraParams;
    }
    public get extraParams(): string | undefined {
        return this['extra_params'];
    }
    public withApplyObjects(applyObjects: Array<ApplyObject>): UpdateScheduledTasksReq {
        this['apply_objects'] = applyObjects;
        return this;
    }
    public set applyObjects(applyObjects: Array<ApplyObject>  | undefined) {
        this['apply_objects'] = applyObjects;
    }
    public get applyObjects(): Array<ApplyObject> | undefined {
        return this['apply_objects'];
    }
    public withPriority(priority: number): UpdateScheduledTasksReq {
        this['priority'] = priority;
        return this;
    }
    public withIsGray(isGray: boolean): UpdateScheduledTasksReq {
        this['is_gray'] = isGray;
        return this;
    }
    public set isGray(isGray: boolean  | undefined) {
        this['is_gray'] = isGray;
    }
    public get isGray(): boolean | undefined {
        return this['is_gray'];
    }
    public withWaitTime(waitTime: number): UpdateScheduledTasksReq {
        this['wait_time'] = waitTime;
        return this;
    }
    public set waitTime(waitTime: number  | undefined) {
        this['wait_time'] = waitTime;
    }
    public get waitTime(): number | undefined {
        return this['wait_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateScheduledTasksReqScheduledTypeEnum {
    FIXED_TIME = 'FIXED_TIME',
    DAY = 'DAY',
    WEEK = 'WEEK',
    MONTH = 'MONTH',
    LIFE_CYCLE = 'LIFE_CYCLE'
}
