

export class MaintenanceWindow {
    private 'weekly_period'?: string;
    private 'start_time'?: string;
    private 'duration_hours'?: number;
    private 'upgrade_scope'?: string;
    public constructor(weeklyPeriod?: string, startTime?: string, durationHours?: number) { 
        this['weekly_period'] = weeklyPeriod;
        this['start_time'] = startTime;
        this['duration_hours'] = durationHours;
    }
    public withWeeklyPeriod(weeklyPeriod: string): MaintenanceWindow {
        this['weekly_period'] = weeklyPeriod;
        return this;
    }
    public set weeklyPeriod(weeklyPeriod: string  | undefined) {
        this['weekly_period'] = weeklyPeriod;
    }
    public get weeklyPeriod(): string | undefined {
        return this['weekly_period'];
    }
    public withStartTime(startTime: string): MaintenanceWindow {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withDurationHours(durationHours: number): MaintenanceWindow {
        this['duration_hours'] = durationHours;
        return this;
    }
    public set durationHours(durationHours: number  | undefined) {
        this['duration_hours'] = durationHours;
    }
    public get durationHours(): number | undefined {
        return this['duration_hours'];
    }
    public withUpgradeScope(upgradeScope: string): MaintenanceWindow {
        this['upgrade_scope'] = upgradeScope;
        return this;
    }
    public set upgradeScope(upgradeScope: string  | undefined) {
        this['upgrade_scope'] = upgradeScope;
    }
    public get upgradeScope(): string | undefined {
        return this['upgrade_scope'];
    }
}