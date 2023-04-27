

export class Metadata {
    private 'event_type': string | undefined;
    private 'event_id': string | undefined;
    private 'event_severity': string | undefined;
    private 'event_name': string | undefined;
    private 'resource_type': string | undefined;
    private 'resource_id': string | undefined;
    private 'resource_provider': string | undefined;
    private 'lts_alarm_type': string | undefined;
    public constructor(eventType?: any, eventId?: any, eventSeverity?: any, eventName?: any, resourceType?: any, resourceId?: any, resourceProvider?: any, ltsAlarmType?: any) { 
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
    public set eventType(eventType: string | undefined) {
        this['event_type'] = eventType;
    }
    public get eventType() {
        return this['event_type'];
    }
    public withEventId(eventId: string): Metadata {
        this['event_id'] = eventId;
        return this;
    }
    public set eventId(eventId: string | undefined) {
        this['event_id'] = eventId;
    }
    public get eventId() {
        return this['event_id'];
    }
    public withEventSeverity(eventSeverity: string): Metadata {
        this['event_severity'] = eventSeverity;
        return this;
    }
    public set eventSeverity(eventSeverity: string | undefined) {
        this['event_severity'] = eventSeverity;
    }
    public get eventSeverity() {
        return this['event_severity'];
    }
    public withEventName(eventName: string): Metadata {
        this['event_name'] = eventName;
        return this;
    }
    public set eventName(eventName: string | undefined) {
        this['event_name'] = eventName;
    }
    public get eventName() {
        return this['event_name'];
    }
    public withResourceType(resourceType: string): Metadata {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType() {
        return this['resource_type'];
    }
    public withResourceId(resourceId: string): Metadata {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId() {
        return this['resource_id'];
    }
    public withResourceProvider(resourceProvider: string): Metadata {
        this['resource_provider'] = resourceProvider;
        return this;
    }
    public set resourceProvider(resourceProvider: string | undefined) {
        this['resource_provider'] = resourceProvider;
    }
    public get resourceProvider() {
        return this['resource_provider'];
    }
    public withLtsAlarmType(ltsAlarmType: string): Metadata {
        this['lts_alarm_type'] = ltsAlarmType;
        return this;
    }
    public set ltsAlarmType(ltsAlarmType: string | undefined) {
        this['lts_alarm_type'] = ltsAlarmType;
    }
    public get ltsAlarmType() {
        return this['lts_alarm_type'];
    }
}