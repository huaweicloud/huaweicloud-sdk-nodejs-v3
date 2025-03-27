

export class ListScheduledEventsRequest {
    public marker?: string;
    public id?: string;
    private 'instance_id'?: Array<string>;
    public type?: Array<string>;
    public state?: Array<string>;
    private 'publish_since'?: string;
    private 'publish_until'?: string;
    public limit?: number;
    public constructor() { 
    }
    public withMarker(marker: string): ListScheduledEventsRequest {
        this['marker'] = marker;
        return this;
    }
    public withId(id: string): ListScheduledEventsRequest {
        this['id'] = id;
        return this;
    }
    public withInstanceId(instanceId: Array<string>): ListScheduledEventsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: Array<string>  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): Array<string> | undefined {
        return this['instance_id'];
    }
    public withType(type: Array<string>): ListScheduledEventsRequest {
        this['type'] = type;
        return this;
    }
    public withState(state: Array<string>): ListScheduledEventsRequest {
        this['state'] = state;
        return this;
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
    public withLimit(limit: number): ListScheduledEventsRequest {
        this['limit'] = limit;
        return this;
    }
}