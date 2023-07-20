

export class SetQueuePlanReq {
    private 'plan_name'?: string;
    private 'target_cu'?: number;
    private 'start_hour'?: number;
    private 'start_minute'?: number;
    private 'repeat_day'?: Array<SetQueuePlanReqRepeatDayEnum> | Array<string>;
    private 'valid_date_begin'?: number;
    private 'valid_date_end'?: number;
    public activate?: boolean;
    public constructor(planName?: string, targetCu?: number, startHour?: number, startMinute?: number, repeatDay?: Array<string>) { 
        this['plan_name'] = planName;
        this['target_cu'] = targetCu;
        this['start_hour'] = startHour;
        this['start_minute'] = startMinute;
        this['repeat_day'] = repeatDay;
    }
    public withPlanName(planName: string): SetQueuePlanReq {
        this['plan_name'] = planName;
        return this;
    }
    public set planName(planName: string  | undefined) {
        this['plan_name'] = planName;
    }
    public get planName(): string | undefined {
        return this['plan_name'];
    }
    public withTargetCu(targetCu: number): SetQueuePlanReq {
        this['target_cu'] = targetCu;
        return this;
    }
    public set targetCu(targetCu: number  | undefined) {
        this['target_cu'] = targetCu;
    }
    public get targetCu(): number | undefined {
        return this['target_cu'];
    }
    public withStartHour(startHour: number): SetQueuePlanReq {
        this['start_hour'] = startHour;
        return this;
    }
    public set startHour(startHour: number  | undefined) {
        this['start_hour'] = startHour;
    }
    public get startHour(): number | undefined {
        return this['start_hour'];
    }
    public withStartMinute(startMinute: number): SetQueuePlanReq {
        this['start_minute'] = startMinute;
        return this;
    }
    public set startMinute(startMinute: number  | undefined) {
        this['start_minute'] = startMinute;
    }
    public get startMinute(): number | undefined {
        return this['start_minute'];
    }
    public withRepeatDay(repeatDay: Array<SetQueuePlanReqRepeatDayEnum> | Array<string>): SetQueuePlanReq {
        this['repeat_day'] = repeatDay;
        return this;
    }
    public set repeatDay(repeatDay: Array<SetQueuePlanReqRepeatDayEnum> | Array<string>  | undefined) {
        this['repeat_day'] = repeatDay;
    }
    public get repeatDay(): Array<SetQueuePlanReqRepeatDayEnum> | Array<string> | undefined {
        return this['repeat_day'];
    }
    public withValidDateBegin(validDateBegin: number): SetQueuePlanReq {
        this['valid_date_begin'] = validDateBegin;
        return this;
    }
    public set validDateBegin(validDateBegin: number  | undefined) {
        this['valid_date_begin'] = validDateBegin;
    }
    public get validDateBegin(): number | undefined {
        return this['valid_date_begin'];
    }
    public withValidDateEnd(validDateEnd: number): SetQueuePlanReq {
        this['valid_date_end'] = validDateEnd;
        return this;
    }
    public set validDateEnd(validDateEnd: number  | undefined) {
        this['valid_date_end'] = validDateEnd;
    }
    public get validDateEnd(): number | undefined {
        return this['valid_date_end'];
    }
    public withActivate(activate: boolean): SetQueuePlanReq {
        this['activate'] = activate;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SetQueuePlanReqRepeatDayEnum {
    SUNDAY = 'SUNDAY',
    MONDAY = 'MONDAY',
    TUESDAY = 'TUESDAY',
    WEDNESDAY = 'WEDNESDAY',
    THURSDAY = 'THURSDAY',
    FRIDAY = 'FRIDAY',
    SATURDAY = 'SATURDAY'
}
