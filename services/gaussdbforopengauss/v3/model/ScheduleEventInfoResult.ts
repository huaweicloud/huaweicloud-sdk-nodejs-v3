import { ExecuteWindowResult } from './ExecuteWindowResult';


export class ScheduleEventInfoResult {
    public id?: string;
    private 'instance_id'?: string;
    private 'instance_name'?: string;
    private 'db_type'?: string;
    private 'created_time'?: string;
    private 'update_time'?: string;
    public type?: string;
    public impact?: string;
    public status?: string;
    public reason?: string;
    private 'execution_time_window'?: ExecuteWindowResult;
    public level?: string;
    private 'execute_time'?: string;
    private 'latest_execution_time'?: string;
    public constructor(id?: string, instanceId?: string, instanceName?: string, dbType?: string, createdTime?: string, updateTime?: string, type?: string, impact?: string, status?: string, reason?: string, executionTimeWindow?: ExecuteWindowResult, level?: string) { 
        this['id'] = id;
        this['instance_id'] = instanceId;
        this['instance_name'] = instanceName;
        this['db_type'] = dbType;
        this['created_time'] = createdTime;
        this['update_time'] = updateTime;
        this['type'] = type;
        this['impact'] = impact;
        this['status'] = status;
        this['reason'] = reason;
        this['execution_time_window'] = executionTimeWindow;
        this['level'] = level;
    }
    public withId(id: string): ScheduleEventInfoResult {
        this['id'] = id;
        return this;
    }
    public withInstanceId(instanceId: string): ScheduleEventInfoResult {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceName(instanceName: string): ScheduleEventInfoResult {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withDbType(dbType: string): ScheduleEventInfoResult {
        this['db_type'] = dbType;
        return this;
    }
    public set dbType(dbType: string  | undefined) {
        this['db_type'] = dbType;
    }
    public get dbType(): string | undefined {
        return this['db_type'];
    }
    public withCreatedTime(createdTime: string): ScheduleEventInfoResult {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: string  | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime(): string | undefined {
        return this['created_time'];
    }
    public withUpdateTime(updateTime: string): ScheduleEventInfoResult {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withType(type: string): ScheduleEventInfoResult {
        this['type'] = type;
        return this;
    }
    public withImpact(impact: string): ScheduleEventInfoResult {
        this['impact'] = impact;
        return this;
    }
    public withStatus(status: string): ScheduleEventInfoResult {
        this['status'] = status;
        return this;
    }
    public withReason(reason: string): ScheduleEventInfoResult {
        this['reason'] = reason;
        return this;
    }
    public withExecutionTimeWindow(executionTimeWindow: ExecuteWindowResult): ScheduleEventInfoResult {
        this['execution_time_window'] = executionTimeWindow;
        return this;
    }
    public set executionTimeWindow(executionTimeWindow: ExecuteWindowResult  | undefined) {
        this['execution_time_window'] = executionTimeWindow;
    }
    public get executionTimeWindow(): ExecuteWindowResult | undefined {
        return this['execution_time_window'];
    }
    public withLevel(level: string): ScheduleEventInfoResult {
        this['level'] = level;
        return this;
    }
    public withExecuteTime(executeTime: string): ScheduleEventInfoResult {
        this['execute_time'] = executeTime;
        return this;
    }
    public set executeTime(executeTime: string  | undefined) {
        this['execute_time'] = executeTime;
    }
    public get executeTime(): string | undefined {
        return this['execute_time'];
    }
    public withLatestExecutionTime(latestExecutionTime: string): ScheduleEventInfoResult {
        this['latest_execution_time'] = latestExecutionTime;
        return this;
    }
    public set latestExecutionTime(latestExecutionTime: string  | undefined) {
        this['latest_execution_time'] = latestExecutionTime;
    }
    public get latestExecutionTime(): string | undefined {
        return this['latest_execution_time'];
    }
}