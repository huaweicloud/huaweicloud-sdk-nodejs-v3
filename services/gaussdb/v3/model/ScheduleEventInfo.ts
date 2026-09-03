import { EventEntity } from './EventEntity';
import { ExecuteWindow } from './ExecuteWindow';


export class ScheduleEventInfo {
    public id?: string;
    public category?: string;
    public impact?: string;
    public status?: string;
    public reason?: string;
    public level?: string;
    private 'instance_id'?: string;
    private 'instance_name'?: string;
    private 'db_type'?: string;
    private 'created_time'?: string;
    private 'updated_time'?: string;
    public type?: string;
    private 'extend_info'?: string;
    private 'execute_time'?: string;
    private 'execution_time_window'?: ExecuteWindow;
    private 'event_entities'?: Array<EventEntity>;
    public constructor() { 
    }
    public withId(id: string): ScheduleEventInfo {
        this['id'] = id;
        return this;
    }
    public withCategory(category: string): ScheduleEventInfo {
        this['category'] = category;
        return this;
    }
    public withImpact(impact: string): ScheduleEventInfo {
        this['impact'] = impact;
        return this;
    }
    public withStatus(status: string): ScheduleEventInfo {
        this['status'] = status;
        return this;
    }
    public withReason(reason: string): ScheduleEventInfo {
        this['reason'] = reason;
        return this;
    }
    public withLevel(level: string): ScheduleEventInfo {
        this['level'] = level;
        return this;
    }
    public withInstanceId(instanceId: string): ScheduleEventInfo {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceName(instanceName: string): ScheduleEventInfo {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withDbType(dbType: string): ScheduleEventInfo {
        this['db_type'] = dbType;
        return this;
    }
    public set dbType(dbType: string  | undefined) {
        this['db_type'] = dbType;
    }
    public get dbType(): string | undefined {
        return this['db_type'];
    }
    public withCreatedTime(createdTime: string): ScheduleEventInfo {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: string  | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime(): string | undefined {
        return this['created_time'];
    }
    public withUpdatedTime(updatedTime: string): ScheduleEventInfo {
        this['updated_time'] = updatedTime;
        return this;
    }
    public set updatedTime(updatedTime: string  | undefined) {
        this['updated_time'] = updatedTime;
    }
    public get updatedTime(): string | undefined {
        return this['updated_time'];
    }
    public withType(type: string): ScheduleEventInfo {
        this['type'] = type;
        return this;
    }
    public withExtendInfo(extendInfo: string): ScheduleEventInfo {
        this['extend_info'] = extendInfo;
        return this;
    }
    public set extendInfo(extendInfo: string  | undefined) {
        this['extend_info'] = extendInfo;
    }
    public get extendInfo(): string | undefined {
        return this['extend_info'];
    }
    public withExecuteTime(executeTime: string): ScheduleEventInfo {
        this['execute_time'] = executeTime;
        return this;
    }
    public set executeTime(executeTime: string  | undefined) {
        this['execute_time'] = executeTime;
    }
    public get executeTime(): string | undefined {
        return this['execute_time'];
    }
    public withExecutionTimeWindow(executionTimeWindow: ExecuteWindow): ScheduleEventInfo {
        this['execution_time_window'] = executionTimeWindow;
        return this;
    }
    public set executionTimeWindow(executionTimeWindow: ExecuteWindow  | undefined) {
        this['execution_time_window'] = executionTimeWindow;
    }
    public get executionTimeWindow(): ExecuteWindow | undefined {
        return this['execution_time_window'];
    }
    public withEventEntities(eventEntities: Array<EventEntity>): ScheduleEventInfo {
        this['event_entities'] = eventEntities;
        return this;
    }
    public set eventEntities(eventEntities: Array<EventEntity>  | undefined) {
        this['event_entities'] = eventEntities;
    }
    public get eventEntities(): Array<EventEntity> | undefined {
        return this['event_entities'];
    }
}