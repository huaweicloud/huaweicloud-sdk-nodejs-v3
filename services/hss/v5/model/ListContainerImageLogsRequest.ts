

export class ListContainerImageLogsRequest {
    private 'resource_name'?: string;
    private 'resource_type'?: string;
    private 'event_type'?: string;
    private 'event_name'?: string;
    private 'source_ip'?: string;
    private 'user_name'?: string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    public limit?: number;
    public offset?: number;
    public constructor() { 
    }
    public withResourceName(resourceName: string): ListContainerImageLogsRequest {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
    public withResourceType(resourceType: string): ListContainerImageLogsRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withEventType(eventType: string): ListContainerImageLogsRequest {
        this['event_type'] = eventType;
        return this;
    }
    public set eventType(eventType: string  | undefined) {
        this['event_type'] = eventType;
    }
    public get eventType(): string | undefined {
        return this['event_type'];
    }
    public withEventName(eventName: string): ListContainerImageLogsRequest {
        this['event_name'] = eventName;
        return this;
    }
    public set eventName(eventName: string  | undefined) {
        this['event_name'] = eventName;
    }
    public get eventName(): string | undefined {
        return this['event_name'];
    }
    public withSourceIp(sourceIp: string): ListContainerImageLogsRequest {
        this['source_ip'] = sourceIp;
        return this;
    }
    public set sourceIp(sourceIp: string  | undefined) {
        this['source_ip'] = sourceIp;
    }
    public get sourceIp(): string | undefined {
        return this['source_ip'];
    }
    public withUserName(userName: string): ListContainerImageLogsRequest {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withStartTime(startTime: number): ListContainerImageLogsRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ListContainerImageLogsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withLimit(limit: number): ListContainerImageLogsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListContainerImageLogsRequest {
        this['offset'] = offset;
        return this;
    }
}