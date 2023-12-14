

export class CreateSqlAlarmRuleFrequency {
    public type?: CreateSqlAlarmRuleFrequencyTypeEnum | string;
    private 'cron_expr'?: string;
    private 'hour_of_day'?: number;
    private 'day_of_week'?: number;
    private 'fixed_rate'?: number;
    private 'fixed_rate_unit'?: CreateSqlAlarmRuleFrequencyFixedRateUnitEnum | string;
    public constructor(type?: string) { 
        this['type'] = type;
    }
    public withType(type: CreateSqlAlarmRuleFrequencyTypeEnum | string): CreateSqlAlarmRuleFrequency {
        this['type'] = type;
        return this;
    }
    public withCronExpr(cronExpr: string): CreateSqlAlarmRuleFrequency {
        this['cron_expr'] = cronExpr;
        return this;
    }
    public set cronExpr(cronExpr: string  | undefined) {
        this['cron_expr'] = cronExpr;
    }
    public get cronExpr(): string | undefined {
        return this['cron_expr'];
    }
    public withHourOfDay(hourOfDay: number): CreateSqlAlarmRuleFrequency {
        this['hour_of_day'] = hourOfDay;
        return this;
    }
    public set hourOfDay(hourOfDay: number  | undefined) {
        this['hour_of_day'] = hourOfDay;
    }
    public get hourOfDay(): number | undefined {
        return this['hour_of_day'];
    }
    public withDayOfWeek(dayOfWeek: number): CreateSqlAlarmRuleFrequency {
        this['day_of_week'] = dayOfWeek;
        return this;
    }
    public set dayOfWeek(dayOfWeek: number  | undefined) {
        this['day_of_week'] = dayOfWeek;
    }
    public get dayOfWeek(): number | undefined {
        return this['day_of_week'];
    }
    public withFixedRate(fixedRate: number): CreateSqlAlarmRuleFrequency {
        this['fixed_rate'] = fixedRate;
        return this;
    }
    public set fixedRate(fixedRate: number  | undefined) {
        this['fixed_rate'] = fixedRate;
    }
    public get fixedRate(): number | undefined {
        return this['fixed_rate'];
    }
    public withFixedRateUnit(fixedRateUnit: CreateSqlAlarmRuleFrequencyFixedRateUnitEnum | string): CreateSqlAlarmRuleFrequency {
        this['fixed_rate_unit'] = fixedRateUnit;
        return this;
    }
    public set fixedRateUnit(fixedRateUnit: CreateSqlAlarmRuleFrequencyFixedRateUnitEnum | string  | undefined) {
        this['fixed_rate_unit'] = fixedRateUnit;
    }
    public get fixedRateUnit(): CreateSqlAlarmRuleFrequencyFixedRateUnitEnum | string | undefined {
        return this['fixed_rate_unit'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateSqlAlarmRuleFrequencyTypeEnum {
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
export enum CreateSqlAlarmRuleFrequencyFixedRateUnitEnum {
    MINUTE = 'minute',
    HOUR = 'hour'
}
