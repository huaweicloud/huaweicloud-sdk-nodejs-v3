import { ScheduledTaskConfig } from './ScheduledTaskConfig';


export class ListFutureExecutionsReq {
    private 'scheduled_type'?: ListFutureExecutionsReqScheduledTypeEnum | string;
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
    public constructor() { 
    }
    public withScheduledType(scheduledType: ListFutureExecutionsReqScheduledTypeEnum | string): ListFutureExecutionsReq {
        this['scheduled_type'] = scheduledType;
        return this;
    }
    public set scheduledType(scheduledType: ListFutureExecutionsReqScheduledTypeEnum | string  | undefined) {
        this['scheduled_type'] = scheduledType;
    }
    public get scheduledType(): ListFutureExecutionsReqScheduledTypeEnum | string | undefined {
        return this['scheduled_type'];
    }
    public withDayInterval(dayInterval: number): ListFutureExecutionsReq {
        this['day_interval'] = dayInterval;
        return this;
    }
    public set dayInterval(dayInterval: number  | undefined) {
        this['day_interval'] = dayInterval;
    }
    public get dayInterval(): number | undefined {
        return this['day_interval'];
    }
    public withWeekList(weekList: string): ListFutureExecutionsReq {
        this['week_list'] = weekList;
        return this;
    }
    public set weekList(weekList: string  | undefined) {
        this['week_list'] = weekList;
    }
    public get weekList(): string | undefined {
        return this['week_list'];
    }
    public withMonthList(monthList: string): ListFutureExecutionsReq {
        this['month_list'] = monthList;
        return this;
    }
    public set monthList(monthList: string  | undefined) {
        this['month_list'] = monthList;
    }
    public get monthList(): string | undefined {
        return this['month_list'];
    }
    public withDateList(dateList: string): ListFutureExecutionsReq {
        this['date_list'] = dateList;
        return this;
    }
    public set dateList(dateList: string  | undefined) {
        this['date_list'] = dateList;
    }
    public get dateList(): string | undefined {
        return this['date_list'];
    }
    public withScheduledDate(scheduledDate: string): ListFutureExecutionsReq {
        this['scheduled_date'] = scheduledDate;
        return this;
    }
    public set scheduledDate(scheduledDate: string  | undefined) {
        this['scheduled_date'] = scheduledDate;
    }
    public get scheduledDate(): string | undefined {
        return this['scheduled_date'];
    }
    public withScheduledTime(scheduledTime: string): ListFutureExecutionsReq {
        this['scheduled_time'] = scheduledTime;
        return this;
    }
    public set scheduledTime(scheduledTime: string  | undefined) {
        this['scheduled_time'] = scheduledTime;
    }
    public get scheduledTime(): string | undefined {
        return this['scheduled_time'];
    }
    public withExpireTime(expireTime: string): ListFutureExecutionsReq {
        this['expire_time'] = expireTime;
        return this;
    }
    public set expireTime(expireTime: string  | undefined) {
        this['expire_time'] = expireTime;
    }
    public get expireTime(): string | undefined {
        return this['expire_time'];
    }
    public withGrayCount(grayCount: number): ListFutureExecutionsReq {
        this['gray_count'] = grayCount;
        return this;
    }
    public set grayCount(grayCount: number  | undefined) {
        this['gray_count'] = grayCount;
    }
    public get grayCount(): number | undefined {
        return this['gray_count'];
    }
    public withGrayDesktopIds(grayDesktopIds: Array<string>): ListFutureExecutionsReq {
        this['gray_desktop_ids'] = grayDesktopIds;
        return this;
    }
    public set grayDesktopIds(grayDesktopIds: Array<string>  | undefined) {
        this['gray_desktop_ids'] = grayDesktopIds;
    }
    public get grayDesktopIds(): Array<string> | undefined {
        return this['gray_desktop_ids'];
    }
    public withGrayFailThreshold(grayFailThreshold: number): ListFutureExecutionsReq {
        this['gray_fail_threshold'] = grayFailThreshold;
        return this;
    }
    public set grayFailThreshold(grayFailThreshold: number  | undefined) {
        this['gray_fail_threshold'] = grayFailThreshold;
    }
    public get grayFailThreshold(): number | undefined {
        return this['gray_fail_threshold'];
    }
    public withLifeCycleType(lifeCycleType: string): ListFutureExecutionsReq {
        this['life_cycle_type'] = lifeCycleType;
        return this;
    }
    public set lifeCycleType(lifeCycleType: string  | undefined) {
        this['life_cycle_type'] = lifeCycleType;
    }
    public get lifeCycleType(): string | undefined {
        return this['life_cycle_type'];
    }
    public withTimeZone(timeZone: string): ListFutureExecutionsReq {
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

/**
    * @export
    * @enum {string}
    */
export enum ListFutureExecutionsReqScheduledTypeEnum {
    FIXED_TIME = 'FIXED_TIME',
    DAY = 'DAY',
    WEEK = 'WEEK',
    MONTH = 'MONTH',
    LIFE_CYCLE = 'LIFE_CYCLE'
}
