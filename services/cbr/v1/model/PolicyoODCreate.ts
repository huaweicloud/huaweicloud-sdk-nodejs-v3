

export class PolicyoODCreate {
    private 'day_backups'?: number | undefined;
    private 'destination_project_id'?: string | undefined;
    private 'destination_region'?: string | undefined;
    private 'enable_acceleration'?: boolean | undefined;
    private 'max_backups'?: number | undefined;
    private 'month_backups'?: number | undefined;
    private 'retention_duration_days'?: number | undefined;
    public timezone?: string;
    private 'week_backups'?: number | undefined;
    private 'year_backups'?: number | undefined;
    private 'full_backup_interval'?: number | undefined;
    public constructor() { 
    }
    public withDayBackups(dayBackups: number): PolicyoODCreate {
        this['day_backups'] = dayBackups;
        return this;
    }
    public set dayBackups(dayBackups: number | undefined) {
        this['day_backups'] = dayBackups;
    }
    public get dayBackups() {
        return this['day_backups'];
    }
    public withDestinationProjectId(destinationProjectId: string): PolicyoODCreate {
        this['destination_project_id'] = destinationProjectId;
        return this;
    }
    public set destinationProjectId(destinationProjectId: string | undefined) {
        this['destination_project_id'] = destinationProjectId;
    }
    public get destinationProjectId() {
        return this['destination_project_id'];
    }
    public withDestinationRegion(destinationRegion: string): PolicyoODCreate {
        this['destination_region'] = destinationRegion;
        return this;
    }
    public set destinationRegion(destinationRegion: string | undefined) {
        this['destination_region'] = destinationRegion;
    }
    public get destinationRegion() {
        return this['destination_region'];
    }
    public withEnableAcceleration(enableAcceleration: boolean): PolicyoODCreate {
        this['enable_acceleration'] = enableAcceleration;
        return this;
    }
    public set enableAcceleration(enableAcceleration: boolean | undefined) {
        this['enable_acceleration'] = enableAcceleration;
    }
    public get enableAcceleration() {
        return this['enable_acceleration'];
    }
    public withMaxBackups(maxBackups: number): PolicyoODCreate {
        this['max_backups'] = maxBackups;
        return this;
    }
    public set maxBackups(maxBackups: number | undefined) {
        this['max_backups'] = maxBackups;
    }
    public get maxBackups() {
        return this['max_backups'];
    }
    public withMonthBackups(monthBackups: number): PolicyoODCreate {
        this['month_backups'] = monthBackups;
        return this;
    }
    public set monthBackups(monthBackups: number | undefined) {
        this['month_backups'] = monthBackups;
    }
    public get monthBackups() {
        return this['month_backups'];
    }
    public withRetentionDurationDays(retentionDurationDays: number): PolicyoODCreate {
        this['retention_duration_days'] = retentionDurationDays;
        return this;
    }
    public set retentionDurationDays(retentionDurationDays: number | undefined) {
        this['retention_duration_days'] = retentionDurationDays;
    }
    public get retentionDurationDays() {
        return this['retention_duration_days'];
    }
    public withTimezone(timezone: string): PolicyoODCreate {
        this['timezone'] = timezone;
        return this;
    }
    public withWeekBackups(weekBackups: number): PolicyoODCreate {
        this['week_backups'] = weekBackups;
        return this;
    }
    public set weekBackups(weekBackups: number | undefined) {
        this['week_backups'] = weekBackups;
    }
    public get weekBackups() {
        return this['week_backups'];
    }
    public withYearBackups(yearBackups: number): PolicyoODCreate {
        this['year_backups'] = yearBackups;
        return this;
    }
    public set yearBackups(yearBackups: number | undefined) {
        this['year_backups'] = yearBackups;
    }
    public get yearBackups() {
        return this['year_backups'];
    }
    public withFullBackupInterval(fullBackupInterval: number): PolicyoODCreate {
        this['full_backup_interval'] = fullBackupInterval;
        return this;
    }
    public set fullBackupInterval(fullBackupInterval: number | undefined) {
        this['full_backup_interval'] = fullBackupInterval;
    }
    public get fullBackupInterval() {
        return this['full_backup_interval'];
    }
}