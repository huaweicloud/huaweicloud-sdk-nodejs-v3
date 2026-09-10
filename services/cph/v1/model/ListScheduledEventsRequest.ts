

export class ListScheduledEventsRequest {
    public limit?: number;
    public marker?: string;
    private 'event_id'?: string;
    private 'server_id'?: string;
    private 'publish_since'?: string;
    private 'publish_until'?: string;
    public state?: Array<string>;
    public type?: Array<string>;
    public constructor() { 
    }
    public withLimit(limit: number): ListScheduledEventsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListScheduledEventsRequest {
        this['marker'] = marker;
        return this;
    }
    public withEventId(eventId: string): ListScheduledEventsRequest {
        this['event_id'] = eventId;
        return this;
    }
    public set eventId(eventId: string  | undefined) {
        this['event_id'] = eventId;
    }
    public get eventId(): string | undefined {
        return this['event_id'];
    }
    public withServerId(serverId: string): ListScheduledEventsRequest {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withPublishSince(publishSince: string): ListScheduledEventsRequest {
        this['publish_since'] = publishSince;
        return this;
    }
    public set publishSince(publishSince: string  | undefined) {
        this['publish_since'] = publishSince;
    }
    public get publishSince(): string | undefined {
        return this['publish_since'];
    }
    public withPublishUntil(publishUntil: string): ListScheduledEventsRequest {
        this['publish_until'] = publishUntil;
        return this;
    }
    public set publishUntil(publishUntil: string  | undefined) {
        this['publish_until'] = publishUntil;
    }
    public get publishUntil(): string | undefined {
        return this['publish_until'];
    }
    public withState(state: Array<string>): ListScheduledEventsRequest {
        this['state'] = state;
        return this;
    }
    public withType(type: Array<string>): ListScheduledEventsRequest {
        this['type'] = type;
        return this;
    }
}