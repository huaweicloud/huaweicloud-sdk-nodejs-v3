

export class ListScheduledEventsResponseBodyScheduledEvents {
    private 'event_id'?: string;
    private 'server_id'?: string;
    private 'server_name'?: string;
    private 'server_model_name'?: string;
    private 'server_state'?: number;
    public type?: string;
    private 'authorization_type'?: string;
    public state?: string;
    private 'publish_time'?: string;
    private 'start_time'?: string;
    private 'finish_time'?: string;
    private 'not_before'?: string;
    private 'not_after'?: string;
    private 'not_before_deadline'?: string;
    public description?: string;
    public constructor() { 
    }
    public withEventId(eventId: string): ListScheduledEventsResponseBodyScheduledEvents {
        this['event_id'] = eventId;
        return this;
    }
    public set eventId(eventId: string  | undefined) {
        this['event_id'] = eventId;
    }
    public get eventId(): string | undefined {
        return this['event_id'];
    }
    public withServerId(serverId: string): ListScheduledEventsResponseBodyScheduledEvents {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withServerName(serverName: string): ListScheduledEventsResponseBodyScheduledEvents {
        this['server_name'] = serverName;
        return this;
    }
    public set serverName(serverName: string  | undefined) {
        this['server_name'] = serverName;
    }
    public get serverName(): string | undefined {
        return this['server_name'];
    }
    public withServerModelName(serverModelName: string): ListScheduledEventsResponseBodyScheduledEvents {
        this['server_model_name'] = serverModelName;
        return this;
    }
    public set serverModelName(serverModelName: string  | undefined) {
        this['server_model_name'] = serverModelName;
    }
    public get serverModelName(): string | undefined {
        return this['server_model_name'];
    }
    public withServerState(serverState: number): ListScheduledEventsResponseBodyScheduledEvents {
        this['server_state'] = serverState;
        return this;
    }
    public set serverState(serverState: number  | undefined) {
        this['server_state'] = serverState;
    }
    public get serverState(): number | undefined {
        return this['server_state'];
    }
    public withType(type: string): ListScheduledEventsResponseBodyScheduledEvents {
        this['type'] = type;
        return this;
    }
    public withAuthorizationType(authorizationType: string): ListScheduledEventsResponseBodyScheduledEvents {
        this['authorization_type'] = authorizationType;
        return this;
    }
    public set authorizationType(authorizationType: string  | undefined) {
        this['authorization_type'] = authorizationType;
    }
    public get authorizationType(): string | undefined {
        return this['authorization_type'];
    }
    public withState(state: string): ListScheduledEventsResponseBodyScheduledEvents {
        this['state'] = state;
        return this;
    }
    public withPublishTime(publishTime: string): ListScheduledEventsResponseBodyScheduledEvents {
        this['publish_time'] = publishTime;
        return this;
    }
    public set publishTime(publishTime: string  | undefined) {
        this['publish_time'] = publishTime;
    }
    public get publishTime(): string | undefined {
        return this['publish_time'];
    }
    public withStartTime(startTime: string): ListScheduledEventsResponseBodyScheduledEvents {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withFinishTime(finishTime: string): ListScheduledEventsResponseBodyScheduledEvents {
        this['finish_time'] = finishTime;
        return this;
    }
    public set finishTime(finishTime: string  | undefined) {
        this['finish_time'] = finishTime;
    }
    public get finishTime(): string | undefined {
        return this['finish_time'];
    }
    public withNotBefore(notBefore: string): ListScheduledEventsResponseBodyScheduledEvents {
        this['not_before'] = notBefore;
        return this;
    }
    public set notBefore(notBefore: string  | undefined) {
        this['not_before'] = notBefore;
    }
    public get notBefore(): string | undefined {
        return this['not_before'];
    }
    public withNotAfter(notAfter: string): ListScheduledEventsResponseBodyScheduledEvents {
        this['not_after'] = notAfter;
        return this;
    }
    public set notAfter(notAfter: string  | undefined) {
        this['not_after'] = notAfter;
    }
    public get notAfter(): string | undefined {
        return this['not_after'];
    }
    public withNotBeforeDeadline(notBeforeDeadline: string): ListScheduledEventsResponseBodyScheduledEvents {
        this['not_before_deadline'] = notBeforeDeadline;
        return this;
    }
    public set notBeforeDeadline(notBeforeDeadline: string  | undefined) {
        this['not_before_deadline'] = notBeforeDeadline;
    }
    public get notBeforeDeadline(): string | undefined {
        return this['not_before_deadline'];
    }
    public withDescription(description: string): ListScheduledEventsResponseBodyScheduledEvents {
        this['description'] = description;
        return this;
    }
}