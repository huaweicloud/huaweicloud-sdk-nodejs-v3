

export class ShowEventDetailRequest {
    private 'trace_id'?: string;
    private 'span_id'?: string;
    private 'event_id'?: string;
    private 'env_id'?: number;
    public constructor(traceId?: string, spanId?: string, eventId?: string, envId?: number) { 
        this['trace_id'] = traceId;
        this['span_id'] = spanId;
        this['event_id'] = eventId;
        this['env_id'] = envId;
    }
    public withTraceId(traceId: string): ShowEventDetailRequest {
        this['trace_id'] = traceId;
        return this;
    }
    public set traceId(traceId: string  | undefined) {
        this['trace_id'] = traceId;
    }
    public get traceId(): string | undefined {
        return this['trace_id'];
    }
    public withSpanId(spanId: string): ShowEventDetailRequest {
        this['span_id'] = spanId;
        return this;
    }
    public set spanId(spanId: string  | undefined) {
        this['span_id'] = spanId;
    }
    public get spanId(): string | undefined {
        return this['span_id'];
    }
    public withEventId(eventId: string): ShowEventDetailRequest {
        this['event_id'] = eventId;
        return this;
    }
    public set eventId(eventId: string  | undefined) {
        this['event_id'] = eventId;
    }
    public get eventId(): string | undefined {
        return this['event_id'];
    }
    public withEnvId(envId: number): ShowEventDetailRequest {
        this['env_id'] = envId;
        return this;
    }
    public set envId(envId: number  | undefined) {
        this['env_id'] = envId;
    }
    public get envId(): number | undefined {
        return this['env_id'];
    }
}