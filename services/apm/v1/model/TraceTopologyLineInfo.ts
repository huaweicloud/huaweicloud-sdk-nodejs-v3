

export class TraceTopologyLineInfo {
    private 'start_time'?: number;
    private 'time_used'?: number;
    public argument?: string;
    private 'event_id'?: string;
    public constructor() { 
    }
    public withStartTime(startTime: number): TraceTopologyLineInfo {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withTimeUsed(timeUsed: number): TraceTopologyLineInfo {
        this['time_used'] = timeUsed;
        return this;
    }
    public set timeUsed(timeUsed: number  | undefined) {
        this['time_used'] = timeUsed;
    }
    public get timeUsed(): number | undefined {
        return this['time_used'];
    }
    public withArgument(argument: string): TraceTopologyLineInfo {
        this['argument'] = argument;
        return this;
    }
    public withEventId(eventId: string): TraceTopologyLineInfo {
        this['event_id'] = eventId;
        return this;
    }
    public set eventId(eventId: string  | undefined) {
        this['event_id'] = eventId;
    }
    public get eventId(): string | undefined {
        return this['event_id'];
    }
}