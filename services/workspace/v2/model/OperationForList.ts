

export class OperationForList {
    public id?: string;
    private 'project_id'?: string;
    private 'desktop_id'?: string;
    private 'screen_record_id'?: string;
    public username?: string;
    private 'event_type'?: string;
    private 'event_level'?: string;
    private 'event_id'?: string;
    private 'event_data'?: string;
    private 'operation_time'?: string;
    private 'relative_start_time'?: number;
    public constructor() { 
    }
    public withId(id: string): OperationForList {
        this['id'] = id;
        return this;
    }
    public withProjectId(projectId: string): OperationForList {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withDesktopId(desktopId: string): OperationForList {
        this['desktop_id'] = desktopId;
        return this;
    }
    public set desktopId(desktopId: string  | undefined) {
        this['desktop_id'] = desktopId;
    }
    public get desktopId(): string | undefined {
        return this['desktop_id'];
    }
    public withScreenRecordId(screenRecordId: string): OperationForList {
        this['screen_record_id'] = screenRecordId;
        return this;
    }
    public set screenRecordId(screenRecordId: string  | undefined) {
        this['screen_record_id'] = screenRecordId;
    }
    public get screenRecordId(): string | undefined {
        return this['screen_record_id'];
    }
    public withUsername(username: string): OperationForList {
        this['username'] = username;
        return this;
    }
    public withEventType(eventType: string): OperationForList {
        this['event_type'] = eventType;
        return this;
    }
    public set eventType(eventType: string  | undefined) {
        this['event_type'] = eventType;
    }
    public get eventType(): string | undefined {
        return this['event_type'];
    }
    public withEventLevel(eventLevel: string): OperationForList {
        this['event_level'] = eventLevel;
        return this;
    }
    public set eventLevel(eventLevel: string  | undefined) {
        this['event_level'] = eventLevel;
    }
    public get eventLevel(): string | undefined {
        return this['event_level'];
    }
    public withEventId(eventId: string): OperationForList {
        this['event_id'] = eventId;
        return this;
    }
    public set eventId(eventId: string  | undefined) {
        this['event_id'] = eventId;
    }
    public get eventId(): string | undefined {
        return this['event_id'];
    }
    public withEventData(eventData: string): OperationForList {
        this['event_data'] = eventData;
        return this;
    }
    public set eventData(eventData: string  | undefined) {
        this['event_data'] = eventData;
    }
    public get eventData(): string | undefined {
        return this['event_data'];
    }
    public withOperationTime(operationTime: string): OperationForList {
        this['operation_time'] = operationTime;
        return this;
    }
    public set operationTime(operationTime: string  | undefined) {
        this['operation_time'] = operationTime;
    }
    public get operationTime(): string | undefined {
        return this['operation_time'];
    }
    public withRelativeStartTime(relativeStartTime: number): OperationForList {
        this['relative_start_time'] = relativeStartTime;
        return this;
    }
    public set relativeStartTime(relativeStartTime: number  | undefined) {
        this['relative_start_time'] = relativeStartTime;
    }
    public get relativeStartTime(): number | undefined {
        return this['relative_start_time'];
    }
}