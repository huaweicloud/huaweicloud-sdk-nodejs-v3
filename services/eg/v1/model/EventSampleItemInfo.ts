

export class EventSampleItemInfo {
    public id?: string;
    public name?: string;
    public content?: string;
    private 'event_type_id'?: string;
    private 'event_type_name'?: string;
    private 'event_source_id'?: string;
    private 'event_source_name'?: string;
    private 'created_time'?: string;
    private 'updated_time'?: string;
    private 'deleted_time'?: string;
    public constructor() { 
    }
    public withId(id: string): EventSampleItemInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): EventSampleItemInfo {
        this['name'] = name;
        return this;
    }
    public withContent(content: string): EventSampleItemInfo {
        this['content'] = content;
        return this;
    }
    public withEventTypeId(eventTypeId: string): EventSampleItemInfo {
        this['event_type_id'] = eventTypeId;
        return this;
    }
    public set eventTypeId(eventTypeId: string  | undefined) {
        this['event_type_id'] = eventTypeId;
    }
    public get eventTypeId(): string | undefined {
        return this['event_type_id'];
    }
    public withEventTypeName(eventTypeName: string): EventSampleItemInfo {
        this['event_type_name'] = eventTypeName;
        return this;
    }
    public set eventTypeName(eventTypeName: string  | undefined) {
        this['event_type_name'] = eventTypeName;
    }
    public get eventTypeName(): string | undefined {
        return this['event_type_name'];
    }
    public withEventSourceId(eventSourceId: string): EventSampleItemInfo {
        this['event_source_id'] = eventSourceId;
        return this;
    }
    public set eventSourceId(eventSourceId: string  | undefined) {
        this['event_source_id'] = eventSourceId;
    }
    public get eventSourceId(): string | undefined {
        return this['event_source_id'];
    }
    public withEventSourceName(eventSourceName: string): EventSampleItemInfo {
        this['event_source_name'] = eventSourceName;
        return this;
    }
    public set eventSourceName(eventSourceName: string  | undefined) {
        this['event_source_name'] = eventSourceName;
    }
    public get eventSourceName(): string | undefined {
        return this['event_source_name'];
    }
    public withCreatedTime(createdTime: string): EventSampleItemInfo {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: string  | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime(): string | undefined {
        return this['created_time'];
    }
    public withUpdatedTime(updatedTime: string): EventSampleItemInfo {
        this['updated_time'] = updatedTime;
        return this;
    }
    public set updatedTime(updatedTime: string  | undefined) {
        this['updated_time'] = updatedTime;
    }
    public get updatedTime(): string | undefined {
        return this['updated_time'];
    }
    public withDeletedTime(deletedTime: string): EventSampleItemInfo {
        this['deleted_time'] = deletedTime;
        return this;
    }
    public set deletedTime(deletedTime: string  | undefined) {
        this['deleted_time'] = deletedTime;
    }
    public get deletedTime(): string | undefined {
        return this['deleted_time'];
    }
}