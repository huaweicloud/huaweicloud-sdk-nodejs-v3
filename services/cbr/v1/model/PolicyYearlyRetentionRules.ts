

export class PolicyYearlyRetentionRules {
    private 'retention_type'?: PolicyYearlyRetentionRulesRetentionTypeEnum | string;
    private 'retention_months'?: Array<PolicyYearlyRetentionRulesRetentionMonthsEnum> | Array<string>;
    private 'retention_weeks'?: Array<PolicyYearlyRetentionRulesRetentionWeeksEnum> | Array<string>;
    private 'days_of_month'?: Array<number>;
    private 'days_of_week'?: Array<PolicyYearlyRetentionRulesDaysOfWeekEnum> | Array<string>;
    private 'retention_duration_periods'?: number;
    public constructor() { 
    }
    public withRetentionType(retentionType: PolicyYearlyRetentionRulesRetentionTypeEnum | string): PolicyYearlyRetentionRules {
        this['retention_type'] = retentionType;
        return this;
    }
    public set retentionType(retentionType: PolicyYearlyRetentionRulesRetentionTypeEnum | string  | undefined) {
        this['retention_type'] = retentionType;
    }
    public get retentionType(): PolicyYearlyRetentionRulesRetentionTypeEnum | string | undefined {
        return this['retention_type'];
    }
    public withRetentionMonths(retentionMonths: Array<PolicyYearlyRetentionRulesRetentionMonthsEnum> | Array<string>): PolicyYearlyRetentionRules {
        this['retention_months'] = retentionMonths;
        return this;
    }
    public set retentionMonths(retentionMonths: Array<PolicyYearlyRetentionRulesRetentionMonthsEnum> | Array<string>  | undefined) {
        this['retention_months'] = retentionMonths;
    }
    public get retentionMonths(): Array<PolicyYearlyRetentionRulesRetentionMonthsEnum> | Array<string> | undefined {
        return this['retention_months'];
    }
    public withRetentionWeeks(retentionWeeks: Array<PolicyYearlyRetentionRulesRetentionWeeksEnum> | Array<string>): PolicyYearlyRetentionRules {
        this['retention_weeks'] = retentionWeeks;
        return this;
    }
    public set retentionWeeks(retentionWeeks: Array<PolicyYearlyRetentionRulesRetentionWeeksEnum> | Array<string>  | undefined) {
        this['retention_weeks'] = retentionWeeks;
    }
    public get retentionWeeks(): Array<PolicyYearlyRetentionRulesRetentionWeeksEnum> | Array<string> | undefined {
        return this['retention_weeks'];
    }
    public withDaysOfMonth(daysOfMonth: Array<number>): PolicyYearlyRetentionRules {
        this['days_of_month'] = daysOfMonth;
        return this;
    }
    public set daysOfMonth(daysOfMonth: Array<number>  | undefined) {
        this['days_of_month'] = daysOfMonth;
    }
    public get daysOfMonth(): Array<number> | undefined {
        return this['days_of_month'];
    }
    public withDaysOfWeek(daysOfWeek: Array<PolicyYearlyRetentionRulesDaysOfWeekEnum> | Array<string>): PolicyYearlyRetentionRules {
        this['days_of_week'] = daysOfWeek;
        return this;
    }
    public set daysOfWeek(daysOfWeek: Array<PolicyYearlyRetentionRulesDaysOfWeekEnum> | Array<string>  | undefined) {
        this['days_of_week'] = daysOfWeek;
    }
    public get daysOfWeek(): Array<PolicyYearlyRetentionRulesDaysOfWeekEnum> | Array<string> | undefined {
        return this['days_of_week'];
    }
    public withRetentionDurationPeriods(retentionDurationPeriods: number): PolicyYearlyRetentionRules {
        this['retention_duration_periods'] = retentionDurationPeriods;
        return this;
    }
    public set retentionDurationPeriods(retentionDurationPeriods: number  | undefined) {
        this['retention_duration_periods'] = retentionDurationPeriods;
    }
    public get retentionDurationPeriods(): number | undefined {
        return this['retention_duration_periods'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PolicyYearlyRetentionRulesRetentionTypeEnum {
    WEEKLYMONTHLY = 'WEEKLY，MONTHLY'
}
/**
    * @export
    * @enum {string}
    */
export enum PolicyYearlyRetentionRulesRetentionMonthsEnum {
    JANUARY = 'JANUARY',
    FEBRUARY = 'FEBRUARY',
    MARCH = 'MARCH',
    APRIL = 'APRIL',
    MAY = 'MAY',
    JUNE = 'JUNE',
    JULY = 'JULY',
    AUGUST = 'AUGUST',
    SEPTEMBER = 'SEPTEMBER',
    OCTOBER = 'OCTOBER',
    NOVEMBER = 'NOVEMBER',
    DECEMBER = 'DECEMBER'
}
/**
    * @export
    * @enum {string}
    */
export enum PolicyYearlyRetentionRulesRetentionWeeksEnum {
    FIRST = 'FIRST',
    SECOND = 'SECOND',
    THIRD = 'THIRD',
    FOURTH = 'FOURTH',
    LAST = 'LAST'
}
/**
    * @export
    * @enum {string}
    */
export enum PolicyYearlyRetentionRulesDaysOfWeekEnum {
    MO = 'MO',
    TU = 'TU',
    WE = 'WE',
    TH = 'TH',
    FR = 'FR',
    SA = 'SA',
    SU = 'SU'
}
