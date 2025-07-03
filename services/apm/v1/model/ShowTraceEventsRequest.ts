

export class ShowTraceEventsRequest {
    private 'trace_id'?: string;
    public constructor(traceId?: string) { 
        this['trace_id'] = traceId;
    }
    public withTraceId(traceId: string): ShowTraceEventsRequest {
        this['trace_id'] = traceId;
        return this;
    }
    public set traceId(traceId: string  | undefined) {
        this['trace_id'] = traceId;
    }
    public get traceId(): string | undefined {
        return this['trace_id'];
    }
}