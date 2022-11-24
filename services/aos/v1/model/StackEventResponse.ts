

export class StackEventResponse {
    private 'resource_id_key'?: string | undefined;
    private 'resource_id_value'?: string | undefined;
    private 'resource_name'?: string | undefined;
    private 'resource_type'?: string | undefined;
    public time?: string;
    private 'event_type'?: StackEventResponseEventTypeEnum | undefined;
    private 'event_message'?: string | undefined;
    private 'elapsed_seconds'?: number | undefined;
    public constructor() { 
    }
    public withResourceIdKey(resourceIdKey: string): StackEventResponse {
        this['resource_id_key'] = resourceIdKey;
        return this;
    }
    public set resourceIdKey(resourceIdKey: string | undefined) {
        this['resource_id_key'] = resourceIdKey;
    }
    public get resourceIdKey() {
        return this['resource_id_key'];
    }
    public withResourceIdValue(resourceIdValue: string): StackEventResponse {
        this['resource_id_value'] = resourceIdValue;
        return this;
    }
    public set resourceIdValue(resourceIdValue: string | undefined) {
        this['resource_id_value'] = resourceIdValue;
    }
    public get resourceIdValue() {
        return this['resource_id_value'];
    }
    public withResourceName(resourceName: string): StackEventResponse {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName() {
        return this['resource_name'];
    }
    public withResourceType(resourceType: string): StackEventResponse {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType() {
        return this['resource_type'];
    }
    public withTime(time: string): StackEventResponse {
        this['time'] = time;
        return this;
    }
    public withEventType(eventType: StackEventResponseEventTypeEnum): StackEventResponse {
        this['event_type'] = eventType;
        return this;
    }
    public set eventType(eventType: StackEventResponseEventTypeEnum | undefined) {
        this['event_type'] = eventType;
    }
    public get eventType() {
        return this['event_type'];
    }
    public withEventMessage(eventMessage: string): StackEventResponse {
        this['event_message'] = eventMessage;
        return this;
    }
    public set eventMessage(eventMessage: string | undefined) {
        this['event_message'] = eventMessage;
    }
    public get eventMessage() {
        return this['event_message'];
    }
    public withElapsedSeconds(elapsedSeconds: number): StackEventResponse {
        this['elapsed_seconds'] = elapsedSeconds;
        return this;
    }
    public set elapsedSeconds(elapsedSeconds: number | undefined) {
        this['elapsed_seconds'] = elapsedSeconds;
    }
    public get elapsedSeconds() {
        return this['elapsed_seconds'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum StackEventResponseEventTypeEnum {
    LOG = 'LOG',
    ERROR = 'ERROR',
    DRIFT = 'DRIFT',
    SUMMARY = 'SUMMARY',
    CREATION_IN_PROGRESS = 'CREATION_IN_PROGRESS',
    CREATION_FAILED = 'CREATION_FAILED',
    CREATION_COMPLETE = 'CREATION_COMPLETE',
    DELETION_IN_PROGRESS = 'DELETION_IN_PROGRESS',
    DELETION_FAILED = 'DELETION_FAILED',
    DELETION_COMPLETE = 'DELETION_COMPLETE',
    DELETION_SKIPPED = 'DELETION_SKIPPED',
    UPDATE_IN_PROGRESS = 'UPDATE_IN_PROGRESS',
    UPDATE_FAILED = 'UPDATE_FAILED',
    UPDATE_COMPLETE = 'UPDATE_COMPLETE'
}
