
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAutopilotMaintenanceWindowResponse extends SdkResponse {
    private 'weekly_period'?: string;
    private 'start_time'?: string;
    private 'duration_hours'?: number;
    private 'upgrade_scope'?: string;
    public constructor() { 
        super();
    }
    public withWeeklyPeriod(weeklyPeriod: string): ShowAutopilotMaintenanceWindowResponse {
        this['weekly_period'] = weeklyPeriod;
        return this;
    }
    public set weeklyPeriod(weeklyPeriod: string  | undefined) {
        this['weekly_period'] = weeklyPeriod;
    }
    public get weeklyPeriod(): string | undefined {
        return this['weekly_period'];
    }
    public withStartTime(startTime: string): ShowAutopilotMaintenanceWindowResponse {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withDurationHours(durationHours: number): ShowAutopilotMaintenanceWindowResponse {
        this['duration_hours'] = durationHours;
        return this;
    }
    public set durationHours(durationHours: number  | undefined) {
        this['duration_hours'] = durationHours;
    }
    public get durationHours(): number | undefined {
        return this['duration_hours'];
    }
    public withUpgradeScope(upgradeScope: string): ShowAutopilotMaintenanceWindowResponse {
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