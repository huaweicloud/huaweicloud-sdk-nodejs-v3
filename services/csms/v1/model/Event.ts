import { Notification } from './Notification';


export class Event {
    public name?: string;
    private 'event_id'?: string;
    private 'event_types'?: Array<EventEventTypesEnum> | Array<string>;
    public state?: EventStateEnum | string;
    private 'create_time'?: number;
    private 'update_time'?: number;
    public notification?: Notification;
    public constructor() { 
    }
    public withName(name: string): Event {
        this['name'] = name;
        return this;
    }
    public withEventId(eventId: string): Event {
        this['event_id'] = eventId;
        return this;
    }
    public set eventId(eventId: string  | undefined) {
        this['event_id'] = eventId;
    }
    public get eventId(): string | undefined {
        return this['event_id'];
    }
    public withEventTypes(eventTypes: Array<EventEventTypesEnum> | Array<string>): Event {
        this['event_types'] = eventTypes;
        return this;
    }
    public set eventTypes(eventTypes: Array<EventEventTypesEnum> | Array<string>  | undefined) {
        this['event_types'] = eventTypes;
    }
    public get eventTypes(): Array<EventEventTypesEnum> | Array<string> | undefined {
        return this['event_types'];
    }
    public withState(state: EventStateEnum | string): Event {
        this['state'] = state;
        return this;
    }
    public withCreateTime(createTime: number): Event {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): Event {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withNotification(notification: Notification): Event {
        this['notification'] = notification;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum EventEventTypesEnum {
    SECRET_VERSION_CREATED = 'SECRET_VERSION_CREATED',
    SECRET_VERSION_EXPIRED = 'SECRET_VERSION_EXPIRED',
    SECRET_ROTATED = 'SECRET_ROTATED',
    SECRET_DELETED = 'SECRET_DELETED'
}
/**
    * @export
    * @enum {string}
    */
export enum EventStateEnum {
    ENABLED = 'ENABLED',
    DISABLED = 'DISABLED'
}
