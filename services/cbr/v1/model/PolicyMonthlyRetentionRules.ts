

export class PolicyMonthlyRetentionRules {
    private 'retention_type'?: PolicyMonthlyRetentionRulesRetentionTypeEnum | string;
    private 'retention_weeks'?: Array<PolicyMonthlyRetentionRulesRetentionWeeksEnum> | Array<string>;
    private 'days_of_week'?: Array<PolicyMonthlyRetentionRulesDaysOfWeekEnum> | Array<string>;
    private 'days_of_month'?: Array<number>;
    private 'retention_duration_periods'?: number;
    public constructor() { 
    }
    public withRetentionType(retentionType: PolicyMonthlyRetentionRulesRetentionTypeEnum | string): PolicyMonthlyRetentionRules {
        this['retention_type'] = retentionType;
        return this;
    }
    public set retentionType(retentionType: PolicyMonthlyRetentionRulesRetentionTypeEnum | string  | undefined) {
        this['retention_type'] = retentionType;
    }
    public get retentionType(): PolicyMonthlyRetentionRulesRetentionTypeEnum | string | undefined {
        return this['retention_type'];
    }
    public withRetentionWeeks(retentionWeeks: Array<PolicyMonthlyRetentionRulesRetentionWeeksEnum> | Array<string>): PolicyMonthlyRetentionRules {
        this['retention_weeks'] = retentionWeeks;
        return this;
    }
    public set retentionWeeks(retentionWeeks: Array<PolicyMonthlyRetentionRulesRetentionWeeksEnum> | Array<string>  | undefined) {
        this['retention_weeks'] = retentionWeeks;
    }
    public get retentionWeeks(): Array<PolicyMonthlyRetentionRulesRetentionWeeksEnum> | Array<string> | undefined {
        return this['retention_weeks'];
    }
    public withDaysOfWeek(daysOfWeek: Array<PolicyMonthlyRetentionRulesDaysOfWeekEnum> | Array<string>): PolicyMonthlyRetentionRules {
        this['days_of_week'] = daysOfWeek;
        return this;
    }
    public set daysOfWeek(daysOfWeek: Array<PolicyMonthlyRetentionRulesDaysOfWeekEnum> | Array<string>  | undefined) {
        this['days_of_week'] = daysOfWeek;
    }
    public get daysOfWeek(): Array<PolicyMonthlyRetentionRulesDaysOfWeekEnum> | Array<string> | undefined {
        return this['days_of_week'];
    }
    public withDaysOfMonth(daysOfMonth: Array<number>): PolicyMonthlyRetentionRules {
        this['days_of_month'] = daysOfMonth;
        return this;
    }
    public set daysOfMonth(daysOfMonth: Array<number>  | undefined) {
        this['days_of_month'] = daysOfMonth;
    }
    public get daysOfMonth(): Array<number> | undefined {
        return this['days_of_month'];
    }
    public withRetentionDurationPeriods(retentionDurationPeriods: number): PolicyMonthlyRetentionRules {
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
export enum PolicyMonthlyRetentionRulesRetentionTypeEnum {
    WEEKLY = 'WEEKLY',
    MONTHLY = 'MONTHLY'
}
/**
    * @export
    * @enum {string}
    */
export enum PolicyMonthlyRetentionRulesRetentionWeeksEnum {
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
export enum PolicyMonthlyRetentionRulesDaysOfWeekEnum {
    MO = 'MO',
    TU = 'TU',
    WE = 'WE',
    TH = 'TH',
    FR = 'FR',
    SA = 'SA',
    SU = 'SU'
}
