
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowOperationalDataCurrentMonthUsingResponse extends SdkResponse {
    private 'alert_success_rate'?: number;
    private 'running_tasks'?: number;
    private 'total_alerts'?: number;
    private 'total_days'?: number;
    private 'total_runs'?: number;
    private 'total_tasks'?: number;
    private 'work_item_count'?: number;
    public constructor() { 
        super();
    }
    public withAlertSuccessRate(alertSuccessRate: number): ShowOperationalDataCurrentMonthUsingResponse {
        this['alert_success_rate'] = alertSuccessRate;
        return this;
    }
    public set alertSuccessRate(alertSuccessRate: number  | undefined) {
        this['alert_success_rate'] = alertSuccessRate;
    }
    public get alertSuccessRate(): number | undefined {
        return this['alert_success_rate'];
    }
    public withRunningTasks(runningTasks: number): ShowOperationalDataCurrentMonthUsingResponse {
        this['running_tasks'] = runningTasks;
        return this;
    }
    public set runningTasks(runningTasks: number  | undefined) {
        this['running_tasks'] = runningTasks;
    }
    public get runningTasks(): number | undefined {
        return this['running_tasks'];
    }
    public withTotalAlerts(totalAlerts: number): ShowOperationalDataCurrentMonthUsingResponse {
        this['total_alerts'] = totalAlerts;
        return this;
    }
    public set totalAlerts(totalAlerts: number  | undefined) {
        this['total_alerts'] = totalAlerts;
    }
    public get totalAlerts(): number | undefined {
        return this['total_alerts'];
    }
    public withTotalDays(totalDays: number): ShowOperationalDataCurrentMonthUsingResponse {
        this['total_days'] = totalDays;
        return this;
    }
    public set totalDays(totalDays: number  | undefined) {
        this['total_days'] = totalDays;
    }
    public get totalDays(): number | undefined {
        return this['total_days'];
    }
    public withTotalRuns(totalRuns: number): ShowOperationalDataCurrentMonthUsingResponse {
        this['total_runs'] = totalRuns;
        return this;
    }
    public set totalRuns(totalRuns: number  | undefined) {
        this['total_runs'] = totalRuns;
    }
    public get totalRuns(): number | undefined {
        return this['total_runs'];
    }
    public withTotalTasks(totalTasks: number): ShowOperationalDataCurrentMonthUsingResponse {
        this['total_tasks'] = totalTasks;
        return this;
    }
    public set totalTasks(totalTasks: number  | undefined) {
        this['total_tasks'] = totalTasks;
    }
    public get totalTasks(): number | undefined {
        return this['total_tasks'];
    }
    public withWorkItemCount(workItemCount: number): ShowOperationalDataCurrentMonthUsingResponse {
        this['work_item_count'] = workItemCount;
        return this;
    }
    public set workItemCount(workItemCount: number  | undefined) {
        this['work_item_count'] = workItemCount;
    }
    public get workItemCount(): number | undefined {
        return this['work_item_count'];
    }
}