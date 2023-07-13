import { ResourceNamePrimitiveTypeHolder } from './ResourceNamePrimitiveTypeHolder';
import { ResourceTypePrimitiveTypeHolder } from './ResourceTypePrimitiveTypeHolder';


export class StackEvent {
    private 'resource_type'?: string | undefined;
    private 'resource_name'?: string | undefined;
    private 'resource_id_key'?: string | undefined;
    private 'resource_id_value'?: string | undefined;
    private 'resource_key'?: string | undefined;
    public time?: string;
    private 'event_type'?: StackEventEventTypeEnum | undefined;
    private 'event_message'?: string | undefined;
    private 'elapsed_seconds'?: number | undefined;
    public constructor() { 
    }
    public withResourceType(resourceType: string): StackEvent {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType() {
        return this['resource_type'];
    }
    public withResourceName(resourceName: string): StackEvent {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName() {
        return this['resource_name'];
    }
    public withResourceIdKey(resourceIdKey: string): StackEvent {
        this['resource_id_key'] = resourceIdKey;
        return this;
    }
    public set resourceIdKey(resourceIdKey: string | undefined) {
        this['resource_id_key'] = resourceIdKey;
    }
    public get resourceIdKey() {
        return this['resource_id_key'];
    }
    public withResourceIdValue(resourceIdValue: string): StackEvent {
        this['resource_id_value'] = resourceIdValue;
        return this;
    }
    public set resourceIdValue(resourceIdValue: string | undefined) {
        this['resource_id_value'] = resourceIdValue;
    }
    public get resourceIdValue() {
        return this['resource_id_value'];
    }
    public withResourceKey(resourceKey: string): StackEvent {
        this['resource_key'] = resourceKey;
        return this;
    }
    public set resourceKey(resourceKey: string | undefined) {
        this['resource_key'] = resourceKey;
    }
    public get resourceKey() {
        return this['resource_key'];
    }
    public withTime(time: string): StackEvent {
        this['time'] = time;
        return this;
    }
    public withEventType(eventType: StackEventEventTypeEnum): StackEvent {
        this['event_type'] = eventType;
        return this;
    }
    public set eventType(eventType: StackEventEventTypeEnum | undefined) {
        this['event_type'] = eventType;
    }
    public get eventType() {
        return this['event_type'];
    }
    public withEventMessage(eventMessage: string): StackEvent {
        this['event_message'] = eventMessage;
        return this;
    }
    public set eventMessage(eventMessage: string | undefined) {
        this['event_message'] = eventMessage;
    }
    public get eventMessage() {
        return this['event_message'];
    }
    public withElapsedSeconds(elapsedSeconds: number): StackEvent {
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
export enum StackEventEventTypeEnum {
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
    UPDATE_IN_PROGRESS = 'UPDATE_IN_PROGRESS',
    UPDATE_FAILED = 'UPDATE_FAILED',
    UPDATE_COMPLETE = 'UPDATE_COMPLETE'
}
