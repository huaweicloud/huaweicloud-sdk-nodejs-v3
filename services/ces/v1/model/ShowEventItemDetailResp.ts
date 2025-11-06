import { MetricsDimensionResp } from './MetricsDimensionResp';


export class ShowEventItemDetailResp {
    public content?: string;
    private 'group_id'?: string;
    private 'resource_id'?: string;
    private 'resource_name'?: string;
    private 'event_state'?: ShowEventItemDetailRespEventStateEnum | string;
    private 'event_level'?: ShowEventItemDetailRespEventLevelEnum | string;
    private 'event_user'?: string;
    private 'event_type'?: string;
    public dimensions?: Array<MetricsDimensionResp>;
    public constructor() { 
    }
    public withContent(content: string): ShowEventItemDetailResp {
        this['content'] = content;
        return this;
    }
    public withGroupId(groupId: string): ShowEventItemDetailResp {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withResourceId(resourceId: string): ShowEventItemDetailResp {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withResourceName(resourceName: string): ShowEventItemDetailResp {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
    public withEventState(eventState: ShowEventItemDetailRespEventStateEnum | string): ShowEventItemDetailResp {
        this['event_state'] = eventState;
        return this;
    }
    public set eventState(eventState: ShowEventItemDetailRespEventStateEnum | string  | undefined) {
        this['event_state'] = eventState;
    }
    public get eventState(): ShowEventItemDetailRespEventStateEnum | string | undefined {
        return this['event_state'];
    }
    public withEventLevel(eventLevel: ShowEventItemDetailRespEventLevelEnum | string): ShowEventItemDetailResp {
        this['event_level'] = eventLevel;
        return this;
    }
    public set eventLevel(eventLevel: ShowEventItemDetailRespEventLevelEnum | string  | undefined) {
        this['event_level'] = eventLevel;
    }
    public get eventLevel(): ShowEventItemDetailRespEventLevelEnum | string | undefined {
        return this['event_level'];
    }
    public withEventUser(eventUser: string): ShowEventItemDetailResp {
        this['event_user'] = eventUser;
        return this;
    }
    public set eventUser(eventUser: string  | undefined) {
        this['event_user'] = eventUser;
    }
    public get eventUser(): string | undefined {
        return this['event_user'];
    }
    public withEventType(eventType: string): ShowEventItemDetailResp {
        this['event_type'] = eventType;
        return this;
    }
    public set eventType(eventType: string  | undefined) {
        this['event_type'] = eventType;
    }
    public get eventType(): string | undefined {
        return this['event_type'];
    }
    public withDimensions(dimensions: Array<MetricsDimensionResp>): ShowEventItemDetailResp {
        this['dimensions'] = dimensions;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowEventItemDetailRespEventStateEnum {
    NORMAL = 'normal',
    WARNING = 'warning',
    INCIDENT = 'incident'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowEventItemDetailRespEventLevelEnum {
    CRITICAL = 'Critical',
    MAJOR = 'Major',
    MINOR = 'Minor',
    INFO = 'Info'
}
