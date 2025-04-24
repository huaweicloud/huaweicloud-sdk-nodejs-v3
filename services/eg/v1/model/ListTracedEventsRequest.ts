

export class ListTracedEventsRequest {
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'event_id'?: string;
    private 'source_name'?: string;
    private 'event_type'?: string;
    private 'subscription_name'?: string;
    public limit?: string;
    public offset?: number;
    private 'channel_id'?: string;
    public constructor(startTime?: number, endTime?: number, channelId?: string) { 
        this['start_time'] = startTime;
        this['end_time'] = endTime;
        this['channel_id'] = channelId;
    }
    public withStartTime(startTime: number): ListTracedEventsRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ListTracedEventsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withEventId(eventId: string): ListTracedEventsRequest {
        this['event_id'] = eventId;
        return this;
    }
    public set eventId(eventId: string  | undefined) {
        this['event_id'] = eventId;
    }
    public get eventId(): string | undefined {
        return this['event_id'];
    }
    public withSourceName(sourceName: string): ListTracedEventsRequest {
        this['source_name'] = sourceName;
        return this;
    }
    public set sourceName(sourceName: string  | undefined) {
        this['source_name'] = sourceName;
    }
    public get sourceName(): string | undefined {
        return this['source_name'];
    }
    public withEventType(eventType: string): ListTracedEventsRequest {
        this['event_type'] = eventType;
        return this;
    }
    public set eventType(eventType: string  | undefined) {
        this['event_type'] = eventType;
    }
    public get eventType(): string | undefined {
        return this['event_type'];
    }
    public withSubscriptionName(subscriptionName: string): ListTracedEventsRequest {
        this['subscription_name'] = subscriptionName;
        return this;
    }
    public set subscriptionName(subscriptionName: string  | undefined) {
        this['subscription_name'] = subscriptionName;
    }
    public get subscriptionName(): string | undefined {
        return this['subscription_name'];
    }
    public withLimit(limit: string): ListTracedEventsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListTracedEventsRequest {
        this['offset'] = offset;
        return this;
    }
    public withChannelId(channelId: string): ListTracedEventsRequest {
        this['channel_id'] = channelId;
        return this;
    }
    public set channelId(channelId: string  | undefined) {
        this['channel_id'] = channelId;
    }
    public get channelId(): string | undefined {
        return this['channel_id'];
    }
}