

export class Frequency {
    public type: FrequencyTypeEnum;
    private 'cron_expr'?: string | undefined;
    private 'hour_of_day'?: number | undefined;
    private 'day_of_week'?: number | undefined;
    private 'fixed_rate'?: number | undefined;
    private 'fixed_rate_unit'?: FrequencyFixedRateUnitEnum | undefined;
    public constructor(type?: any) { 
        this['type'] = type;
    }
    public withType(type: FrequencyTypeEnum): Frequency {
        this['type'] = type;
        return this;
    }
    public withCronExpr(cronExpr: string): Frequency {
        this['cron_expr'] = cronExpr;
        return this;
    }
    public set cronExpr(cronExpr: string | undefined) {
        this['cron_expr'] = cronExpr;
    }
    public get cronExpr() {
        return this['cron_expr'];
    }
    public withHourOfDay(hourOfDay: number): Frequency {
        this['hour_of_day'] = hourOfDay;
        return this;
    }
    public set hourOfDay(hourOfDay: number | undefined) {
        this['hour_of_day'] = hourOfDay;
    }
    public get hourOfDay() {
        return this['hour_of_day'];
    }
    public withDayOfWeek(dayOfWeek: number): Frequency {
        this['day_of_week'] = dayOfWeek;
        return this;
    }
    public set dayOfWeek(dayOfWeek: number | undefined) {
        this['day_of_week'] = dayOfWeek;
    }
    public get dayOfWeek() {
        return this['day_of_week'];
    }
    public withFixedRate(fixedRate: number): Frequency {
        this['fixed_rate'] = fixedRate;
        return this;
    }
    public set fixedRate(fixedRate: number | undefined) {
        this['fixed_rate'] = fixedRate;
    }
    public get fixedRate() {
        return this['fixed_rate'];
    }
    public withFixedRateUnit(fixedRateUnit: FrequencyFixedRateUnitEnum): Frequency {
        this['fixed_rate_unit'] = fixedRateUnit;
        return this;
    }
    public set fixedRateUnit(fixedRateUnit: FrequencyFixedRateUnitEnum | undefined) {
        this['fixed_rate_unit'] = fixedRateUnit;
    }
    public get fixedRateUnit() {
        return this['fixed_rate_unit'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum FrequencyTypeEnum {
    CRON = 'CRON',
    HOURLY = 'HOURLY',
    DAILY = 'DAILY',
    WEEKLY = 'WEEKLY',
    FIXED_RATE = 'FIXED_RATE'
}
/**
    * @export
    * @enum {string}
    */
export enum FrequencyFixedRateUnitEnum {
    MINUTE = 'minute',
    HOUR = 'hour'
}
