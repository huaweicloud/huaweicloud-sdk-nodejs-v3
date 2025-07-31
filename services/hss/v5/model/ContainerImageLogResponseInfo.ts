

export class ContainerImageLogResponseInfo {
    private 'resource_name'?: string;
    private 'resource_type'?: string;
    private 'event_name'?: string;
    private 'event_id'?: string;
    private 'event_type'?: string;
    private 'source_ip'?: string;
    private 'user_name'?: string;
    public time?: number;
    public content?: string;
    public constructor() { 
    }
    public withResourceName(resourceName: string): ContainerImageLogResponseInfo {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
    public withResourceType(resourceType: string): ContainerImageLogResponseInfo {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withEventName(eventName: string): ContainerImageLogResponseInfo {
        this['event_name'] = eventName;
        return this;
    }
    public set eventName(eventName: string  | undefined) {
        this['event_name'] = eventName;
    }
    public get eventName(): string | undefined {
        return this['event_name'];
    }
    public withEventId(eventId: string): ContainerImageLogResponseInfo {
        this['event_id'] = eventId;
        return this;
    }
    public set eventId(eventId: string  | undefined) {
        this['event_id'] = eventId;
    }
    public get eventId(): string | undefined {
        return this['event_id'];
    }
    public withEventType(eventType: string): ContainerImageLogResponseInfo {
        this['event_type'] = eventType;
        return this;
    }
    public set eventType(eventType: string  | undefined) {
        this['event_type'] = eventType;
    }
    public get eventType(): string | undefined {
        return this['event_type'];
    }
    public withSourceIp(sourceIp: string): ContainerImageLogResponseInfo {
        this['source_ip'] = sourceIp;
        return this;
    }
    public set sourceIp(sourceIp: string  | undefined) {
        this['source_ip'] = sourceIp;
    }
    public get sourceIp(): string | undefined {
        return this['source_ip'];
    }
    public withUserName(userName: string): ContainerImageLogResponseInfo {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withTime(time: number): ContainerImageLogResponseInfo {
        this['time'] = time;
        return this;
    }
    public withContent(content: string): ContainerImageLogResponseInfo {
        this['content'] = content;
        return this;
    }
}