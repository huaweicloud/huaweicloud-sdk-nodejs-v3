

export class Metadata {
    private 'event_type'?: string;
    private 'event_id'?: string;
    private 'event_severity'?: string;
    private 'event_name'?: string;
    private 'resource_type'?: string;
    private 'resource_id'?: string;
    private 'resource_provider'?: string;
    private 'lts_alarm_type'?: string;
    private 'log_group_name'?: string;
    private 'log_stream_name'?: string;
    public constructor(eventType?: string, eventId?: string, eventSeverity?: string, eventName?: string, resourceType?: string, resourceId?: string, resourceProvider?: string, ltsAlarmType?: string) { 
        this['event_type'] = eventType;
        this['event_id'] = eventId;
        this['event_severity'] = eventSeverity;
        this['event_name'] = eventName;
        this['resource_type'] = resourceType;
        this['resource_id'] = resourceId;
        this['resource_provider'] = resourceProvider;
        this['lts_alarm_type'] = ltsAlarmType;
    }
    public withEventType(eventType: string): Metadata {
        this['event_type'] = eventType;
        return this;
    }
    public set eventType(eventType: string  | undefined) {
        this['event_type'] = eventType;
    }
    public get eventType(): string | undefined {
        return this['event_type'];
    }
    public withEventId(eventId: string): Metadata {
        this['event_id'] = eventId;
        return this;
    }
    public set eventId(eventId: string  | undefined) {
        this['event_id'] = eventId;
    }
    public get eventId(): string | undefined {
        return this['event_id'];
    }
    public withEventSeverity(eventSeverity: string): Metadata {
        this['event_severity'] = eventSeverity;
        return this;
    }
    public set eventSeverity(eventSeverity: string  | undefined) {
        this['event_severity'] = eventSeverity;
    }
    public get eventSeverity(): string | undefined {
        return this['event_severity'];
    }
    public withEventName(eventName: string): Metadata {
        this['event_name'] = eventName;
        return this;
    }
    public set eventName(eventName: string  | undefined) {
        this['event_name'] = eventName;
    }
    public get eventName(): string | undefined {
        return this['event_name'];
    }
    public withResourceType(resourceType: string): Metadata {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withResourceId(resourceId: string): Metadata {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withResourceProvider(resourceProvider: string): Metadata {
        this['resource_provider'] = resourceProvider;
        return this;
    }
    public set resourceProvider(resourceProvider: string  | undefined) {
        this['resource_provider'] = resourceProvider;
    }
    public get resourceProvider(): string | undefined {
        return this['resource_provider'];
    }
    public withLtsAlarmType(ltsAlarmType: string): Metadata {
        this['lts_alarm_type'] = ltsAlarmType;
        return this;
    }
    public set ltsAlarmType(ltsAlarmType: string  | undefined) {
        this['lts_alarm_type'] = ltsAlarmType;
    }
    public get ltsAlarmType(): string | undefined {
        return this['lts_alarm_type'];
    }
    public withLogGroupName(logGroupName: string): Metadata {
        this['log_group_name'] = logGroupName;
        return this;
    }
    public set logGroupName(logGroupName: string  | undefined) {
        this['log_group_name'] = logGroupName;
    }
    public get logGroupName(): string | undefined {
        return this['log_group_name'];
    }
    public withLogStreamName(logStreamName: string): Metadata {
        this['log_stream_name'] = logStreamName;
        return this;
    }
    public set logStreamName(logStreamName: string  | undefined) {
        this['log_stream_name'] = logStreamName;
    }
    public get logStreamName(): string | undefined {
        return this['log_stream_name'];
    }
}