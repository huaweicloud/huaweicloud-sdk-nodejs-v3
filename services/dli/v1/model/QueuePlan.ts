

export class QueuePlan {
    public id?: number;
    private 'plan_name'?: string;
    private 'target_cu'?: number;
    private 'start_hour'?: number;
    private 'start_minute'?: number;
    private 'repeat_day'?: Array<QueuePlanRepeatDayEnum> | Array<string>;
    private 'valid_date_begin'?: number;
    private 'valid_date_end'?: number;
    public activate?: boolean;
    private 'last_execute_time'?: number;
    public constructor(repeatDay?: Array<string>) { 
        this['repeat_day'] = repeatDay;
    }
    public withId(id: number): QueuePlan {
        this['id'] = id;
        return this;
    }
    public withPlanName(planName: string): QueuePlan {
        this['plan_name'] = planName;
        return this;
    }
    public set planName(planName: string  | undefined) {
        this['plan_name'] = planName;
    }
    public get planName(): string | undefined {
        return this['plan_name'];
    }
    public withTargetCu(targetCu: number): QueuePlan {
        this['target_cu'] = targetCu;
        return this;
    }
    public set targetCu(targetCu: number  | undefined) {
        this['target_cu'] = targetCu;
    }
    public get targetCu(): number | undefined {
        return this['target_cu'];
    }
    public withStartHour(startHour: number): QueuePlan {
        this['start_hour'] = startHour;
        return this;
    }
    public set startHour(startHour: number  | undefined) {
        this['start_hour'] = startHour;
    }
    public get startHour(): number | undefined {
        return this['start_hour'];
    }
    public withStartMinute(startMinute: number): QueuePlan {
        this['start_minute'] = startMinute;
        return this;
    }
    public set startMinute(startMinute: number  | undefined) {
        this['start_minute'] = startMinute;
    }
    public get startMinute(): number | undefined {
        return this['start_minute'];
    }
    public withRepeatDay(repeatDay: Array<QueuePlanRepeatDayEnum> | Array<string>): QueuePlan {
        this['repeat_day'] = repeatDay;
        return this;
    }
    public set repeatDay(repeatDay: Array<QueuePlanRepeatDayEnum> | Array<string>  | undefined) {
        this['repeat_day'] = repeatDay;
    }
    public get repeatDay(): Array<QueuePlanRepeatDayEnum> | Array<string> | undefined {
        return this['repeat_day'];
    }
    public withValidDateBegin(validDateBegin: number): QueuePlan {
        this['valid_date_begin'] = validDateBegin;
        return this;
    }
    public set validDateBegin(validDateBegin: number  | undefined) {
        this['valid_date_begin'] = validDateBegin;
    }
    public get validDateBegin(): number | undefined {
        return this['valid_date_begin'];
    }
    public withValidDateEnd(validDateEnd: number): QueuePlan {
        this['valid_date_end'] = validDateEnd;
        return this;
    }
    public set validDateEnd(validDateEnd: number  | undefined) {
        this['valid_date_end'] = validDateEnd;
    }
    public get validDateEnd(): number | undefined {
        return this['valid_date_end'];
    }
    public withActivate(activate: boolean): QueuePlan {
        this['activate'] = activate;
        return this;
    }
    public withLastExecuteTime(lastExecuteTime: number): QueuePlan {
        this['last_execute_time'] = lastExecuteTime;
        return this;
    }
    public set lastExecuteTime(lastExecuteTime: number  | undefined) {
        this['last_execute_time'] = lastExecuteTime;
    }
    public get lastExecuteTime(): number | undefined {
        return this['last_execute_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum QueuePlanRepeatDayEnum {
    SUNDAY = 'SUNDAY',
    MONDAY = 'MONDAY',
    TUESDAY = 'TUESDAY',
    WEDNESDAY = 'WEDNESDAY',
    THURSDAY = 'THURSDAY',
    FRIDAY = 'FRIDAY',
    SATURDAY = 'SATURDAY'
}
