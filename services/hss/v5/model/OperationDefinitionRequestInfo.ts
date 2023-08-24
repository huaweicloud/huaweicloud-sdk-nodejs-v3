

export class OperationDefinitionRequestInfo {
    private 'day_backups'?: number;
    private 'max_backups'?: number;
    private 'month_backups'?: number;
    private 'retention_duration_days'?: number;
    public timezone?: string;
    private 'week_backups'?: number;
    private 'year_backups'?: number;
    public constructor() { 
    }
    public withDayBackups(dayBackups: number): OperationDefinitionRequestInfo {
        this['day_backups'] = dayBackups;
        return this;
    }
    public set dayBackups(dayBackups: number  | undefined) {
        this['day_backups'] = dayBackups;
    }
    public get dayBackups(): number | undefined {
        return this['day_backups'];
    }
    public withMaxBackups(maxBackups: number): OperationDefinitionRequestInfo {
        this['max_backups'] = maxBackups;
        return this;
    }
    public set maxBackups(maxBackups: number  | undefined) {
        this['max_backups'] = maxBackups;
    }
    public get maxBackups(): number | undefined {
        return this['max_backups'];
    }
    public withMonthBackups(monthBackups: number): OperationDefinitionRequestInfo {
        this['month_backups'] = monthBackups;
        return this;
    }
    public set monthBackups(monthBackups: number  | undefined) {
        this['month_backups'] = monthBackups;
    }
    public get monthBackups(): number | undefined {
        return this['month_backups'];
    }
    public withRetentionDurationDays(retentionDurationDays: number): OperationDefinitionRequestInfo {
        this['retention_duration_days'] = retentionDurationDays;
        return this;
    }
    public set retentionDurationDays(retentionDurationDays: number  | undefined) {
        this['retention_duration_days'] = retentionDurationDays;
    }
    public get retentionDurationDays(): number | undefined {
        return this['retention_duration_days'];
    }
    public withTimezone(timezone: string): OperationDefinitionRequestInfo {
        this['timezone'] = timezone;
        return this;
    }
    public withWeekBackups(weekBackups: number): OperationDefinitionRequestInfo {
        this['week_backups'] = weekBackups;
        return this;
    }
    public set weekBackups(weekBackups: number  | undefined) {
        this['week_backups'] = weekBackups;
    }
    public get weekBackups(): number | undefined {
        return this['week_backups'];
    }
    public withYearBackups(yearBackups: number): OperationDefinitionRequestInfo {
        this['year_backups'] = yearBackups;
        return this;
    }
    public set yearBackups(yearBackups: number  | undefined) {
        this['year_backups'] = yearBackups;
    }
    public get yearBackups(): number | undefined {
        return this['year_backups'];
    }
}