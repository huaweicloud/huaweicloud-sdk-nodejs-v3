import { MetricsDimension } from './MetricsDimension';


export class EventItemDetail {
    public content?: string;
    private 'group_id'?: string;
    private 'resource_id'?: string;
    private 'resource_name'?: string;
    private 'event_state'?: EventItemDetailEventStateEnum | string;
    private 'event_level'?: EventItemDetailEventLevelEnum | string;
    private 'event_user'?: string;
    private 'event_type'?: string;
    public dimensions?: MetricsDimension;
    public constructor() { 
    }
    public withContent(content: string): EventItemDetail {
        this['content'] = content;
        return this;
    }
    public withGroupId(groupId: string): EventItemDetail {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withResourceId(resourceId: string): EventItemDetail {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withResourceName(resourceName: string): EventItemDetail {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
    public withEventState(eventState: EventItemDetailEventStateEnum | string): EventItemDetail {
        this['event_state'] = eventState;
        return this;
    }
    public set eventState(eventState: EventItemDetailEventStateEnum | string  | undefined) {
        this['event_state'] = eventState;
    }
    public get eventState(): EventItemDetailEventStateEnum | string | undefined {
        return this['event_state'];
    }
    public withEventLevel(eventLevel: EventItemDetailEventLevelEnum | string): EventItemDetail {
        this['event_level'] = eventLevel;
        return this;
    }
    public set eventLevel(eventLevel: EventItemDetailEventLevelEnum | string  | undefined) {
        this['event_level'] = eventLevel;
    }
    public get eventLevel(): EventItemDetailEventLevelEnum | string | undefined {
        return this['event_level'];
    }
    public withEventUser(eventUser: string): EventItemDetail {
        this['event_user'] = eventUser;
        return this;
    }
    public set eventUser(eventUser: string  | undefined) {
        this['event_user'] = eventUser;
    }
    public get eventUser(): string | undefined {
        return this['event_user'];
    }
    public withEventType(eventType: string): EventItemDetail {
        this['event_type'] = eventType;
        return this;
    }
    public set eventType(eventType: string  | undefined) {
        this['event_type'] = eventType;
    }
    public get eventType(): string | undefined {
        return this['event_type'];
    }
    public withDimensions(dimensions: MetricsDimension): EventItemDetail {
        this['dimensions'] = dimensions;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum EventItemDetailEventStateEnum {
    NORMAL = 'normal',
    WARNING = 'warning',
    INCIDENT = 'incident'
}
/**
    * @export
    * @enum {string}
    */
export enum EventItemDetailEventLevelEnum {
    CRITICAL = 'Critical',
    MAJOR = 'Major',
    MINOR = 'Minor',
    INFO = 'Info'
}
