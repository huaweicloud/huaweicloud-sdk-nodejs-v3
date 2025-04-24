

export class ListTracedEventsRespResult {
    private 'subscription_name'?: string;
    private 'source_name'?: string;
    private 'source_provider'?: string;
    private 'event_type'?: string;
    private 'event_id'?: string;
    private 'event_received_time'?: number;
    public constructor() { 
    }
    public withSubscriptionName(subscriptionName: string): ListTracedEventsRespResult {
        this['subscription_name'] = subscriptionName;
        return this;
    }
    public set subscriptionName(subscriptionName: string  | undefined) {
        this['subscription_name'] = subscriptionName;
    }
    public get subscriptionName(): string | undefined {
        return this['subscription_name'];
    }
    public withSourceName(sourceName: string): ListTracedEventsRespResult {
        this['source_name'] = sourceName;
        return this;
    }
    public set sourceName(sourceName: string  | undefined) {
        this['source_name'] = sourceName;
    }
    public get sourceName(): string | undefined {
        return this['source_name'];
    }
    public withSourceProvider(sourceProvider: string): ListTracedEventsRespResult {
        this['source_provider'] = sourceProvider;
        return this;
    }
    public set sourceProvider(sourceProvider: string  | undefined) {
        this['source_provider'] = sourceProvider;
    }
    public get sourceProvider(): string | undefined {
        return this['source_provider'];
    }
    public withEventType(eventType: string): ListTracedEventsRespResult {
        this['event_type'] = eventType;
        return this;
    }
    public set eventType(eventType: string  | undefined) {
        this['event_type'] = eventType;
    }
    public get eventType(): string | undefined {
        return this['event_type'];
    }
    public withEventId(eventId: string): ListTracedEventsRespResult {
        this['event_id'] = eventId;
        return this;
    }
    public set eventId(eventId: string  | undefined) {
        this['event_id'] = eventId;
    }
    public get eventId(): string | undefined {
        return this['event_id'];
    }
    public withEventReceivedTime(eventReceivedTime: number): ListTracedEventsRespResult {
        this['event_received_time'] = eventReceivedTime;
        return this;
    }
    public set eventReceivedTime(eventReceivedTime: number  | undefined) {
        this['event_received_time'] = eventReceivedTime;
    }
    public get eventReceivedTime(): number | undefined {
        return this['event_received_time'];
    }
}