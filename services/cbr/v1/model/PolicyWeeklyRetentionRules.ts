

export class PolicyWeeklyRetentionRules {
    private 'days_of_week'?: Array<PolicyWeeklyRetentionRulesDaysOfWeekEnum> | Array<string>;
    private 'retention_duration_periods'?: number;
    public constructor() { 
    }
    public withDaysOfWeek(daysOfWeek: Array<PolicyWeeklyRetentionRulesDaysOfWeekEnum> | Array<string>): PolicyWeeklyRetentionRules {
        this['days_of_week'] = daysOfWeek;
        return this;
    }
    public set daysOfWeek(daysOfWeek: Array<PolicyWeeklyRetentionRulesDaysOfWeekEnum> | Array<string>  | undefined) {
        this['days_of_week'] = daysOfWeek;
    }
    public get daysOfWeek(): Array<PolicyWeeklyRetentionRulesDaysOfWeekEnum> | Array<string> | undefined {
        return this['days_of_week'];
    }
    public withRetentionDurationPeriods(retentionDurationPeriods: number): PolicyWeeklyRetentionRules {
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
export enum PolicyWeeklyRetentionRulesDaysOfWeekEnum {
    MO = 'MO',
    TU = 'TU',
    WE = 'WE',
    TH = 'TH',
    FR = 'FR',
    SA = 'SA',
    SU = 'SU'
}
