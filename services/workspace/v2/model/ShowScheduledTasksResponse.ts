import { ApplyObject } from './ApplyObject';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowScheduledTasksResponse extends SdkResponse {
    public id?: string;
    private 'task_type'?: string;
    private 'task_name'?: string;
    private 'force_execute'?: boolean;
    private 'scheduled_type'?: string;
    private 'life_cycle_type'?: string;
    private 'day_interval'?: number;
    private 'week_list'?: string;
    private 'month_list'?: string;
    private 'date_list'?: string;
    private 'scheduled_date'?: string;
    private 'scheduled_time'?: string;
    private 'expire_time'?: string;
    public description?: string;
    private 'extra_params'?: string;
    private 'apply_objects'?: Array<ApplyObject>;
    private 'gray_count'?: number;
    private 'gray_desktop_ids'?: Array<string>;
    private 'gray_fail_threshold'?: number;
    private 'time_zone'?: string;
    private 'wait_time'?: number;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowScheduledTasksResponse {
        this['id'] = id;
        return this;
    }
    public withTaskType(taskType: string): ShowScheduledTasksResponse {
        this['task_type'] = taskType;
        return this;
    }
    public set taskType(taskType: string  | undefined) {
        this['task_type'] = taskType;
    }
    public get taskType(): string | undefined {
        return this['task_type'];
    }
    public withTaskName(taskName: string): ShowScheduledTasksResponse {
        this['task_name'] = taskName;
        return this;
    }
    public set taskName(taskName: string  | undefined) {
        this['task_name'] = taskName;
    }
    public get taskName(): string | undefined {
        return this['task_name'];
    }
    public withForceExecute(forceExecute: boolean): ShowScheduledTasksResponse {
        this['force_execute'] = forceExecute;
        return this;
    }
    public set forceExecute(forceExecute: boolean  | undefined) {
        this['force_execute'] = forceExecute;
    }
    public get forceExecute(): boolean | undefined {
        return this['force_execute'];
    }
    public withScheduledType(scheduledType: string): ShowScheduledTasksResponse {
        this['scheduled_type'] = scheduledType;
        return this;
    }
    public set scheduledType(scheduledType: string  | undefined) {
        this['scheduled_type'] = scheduledType;
    }
    public get scheduledType(): string | undefined {
        return this['scheduled_type'];
    }
    public withLifeCycleType(lifeCycleType: string): ShowScheduledTasksResponse {
        this['life_cycle_type'] = lifeCycleType;
        return this;
    }
    public set lifeCycleType(lifeCycleType: string  | undefined) {
        this['life_cycle_type'] = lifeCycleType;
    }
    public get lifeCycleType(): string | undefined {
        return this['life_cycle_type'];
    }
    public withDayInterval(dayInterval: number): ShowScheduledTasksResponse {
        this['day_interval'] = dayInterval;
        return this;
    }
    public set dayInterval(dayInterval: number  | undefined) {
        this['day_interval'] = dayInterval;
    }
    public get dayInterval(): number | undefined {
        return this['day_interval'];
    }
    public withWeekList(weekList: string): ShowScheduledTasksResponse {
        this['week_list'] = weekList;
        return this;
    }
    public set weekList(weekList: string  | undefined) {
        this['week_list'] = weekList;
    }
    public get weekList(): string | undefined {
        return this['week_list'];
    }
    public withMonthList(monthList: string): ShowScheduledTasksResponse {
        this['month_list'] = monthList;
        return this;
    }
    public set monthList(monthList: string  | undefined) {
        this['month_list'] = monthList;
    }
    public get monthList(): string | undefined {
        return this['month_list'];
    }
    public withDateList(dateList: string): ShowScheduledTasksResponse {
        this['date_list'] = dateList;
        return this;
    }
    public set dateList(dateList: string  | undefined) {
        this['date_list'] = dateList;
    }
    public get dateList(): string | undefined {
        return this['date_list'];
    }
    public withScheduledDate(scheduledDate: string): ShowScheduledTasksResponse {
        this['scheduled_date'] = scheduledDate;
        return this;
    }
    public set scheduledDate(scheduledDate: string  | undefined) {
        this['scheduled_date'] = scheduledDate;
    }
    public get scheduledDate(): string | undefined {
        return this['scheduled_date'];
    }
    public withScheduledTime(scheduledTime: string): ShowScheduledTasksResponse {
        this['scheduled_time'] = scheduledTime;
        return this;
    }
    public set scheduledTime(scheduledTime: string  | undefined) {
        this['scheduled_time'] = scheduledTime;
    }
    public get scheduledTime(): string | undefined {
        return this['scheduled_time'];
    }
    public withExpireTime(expireTime: string): ShowScheduledTasksResponse {
        this['expire_time'] = expireTime;
        return this;
    }
    public set expireTime(expireTime: string  | undefined) {
        this['expire_time'] = expireTime;
    }
    public get expireTime(): string | undefined {
        return this['expire_time'];
    }
    public withDescription(description: string): ShowScheduledTasksResponse {
        this['description'] = description;
        return this;
    }
    public withExtraParams(extraParams: string): ShowScheduledTasksResponse {
        this['extra_params'] = extraParams;
        return this;
    }
    public set extraParams(extraParams: string  | undefined) {
        this['extra_params'] = extraParams;
    }
    public get extraParams(): string | undefined {
        return this['extra_params'];
    }
    public withApplyObjects(applyObjects: Array<ApplyObject>): ShowScheduledTasksResponse {
        this['apply_objects'] = applyObjects;
        return this;
    }
    public set applyObjects(applyObjects: Array<ApplyObject>  | undefined) {
        this['apply_objects'] = applyObjects;
    }
    public get applyObjects(): Array<ApplyObject> | undefined {
        return this['apply_objects'];
    }
    public withGrayCount(grayCount: number): ShowScheduledTasksResponse {
        this['gray_count'] = grayCount;
        return this;
    }
    public set grayCount(grayCount: number  | undefined) {
        this['gray_count'] = grayCount;
    }
    public get grayCount(): number | undefined {
        return this['gray_count'];
    }
    public withGrayDesktopIds(grayDesktopIds: Array<string>): ShowScheduledTasksResponse {
        this['gray_desktop_ids'] = grayDesktopIds;
        return this;
    }
    public set grayDesktopIds(grayDesktopIds: Array<string>  | undefined) {
        this['gray_desktop_ids'] = grayDesktopIds;
    }
    public get grayDesktopIds(): Array<string> | undefined {
        return this['gray_desktop_ids'];
    }
    public withGrayFailThreshold(grayFailThreshold: number): ShowScheduledTasksResponse {
        this['gray_fail_threshold'] = grayFailThreshold;
        return this;
    }
    public set grayFailThreshold(grayFailThreshold: number  | undefined) {
        this['gray_fail_threshold'] = grayFailThreshold;
    }
    public get grayFailThreshold(): number | undefined {
        return this['gray_fail_threshold'];
    }
    public withTimeZone(timeZone: string): ShowScheduledTasksResponse {
        this['time_zone'] = timeZone;
        return this;
    }
    public set timeZone(timeZone: string  | undefined) {
        this['time_zone'] = timeZone;
    }
    public get timeZone(): string | undefined {
        return this['time_zone'];
    }
    public withWaitTime(waitTime: number): ShowScheduledTasksResponse {
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