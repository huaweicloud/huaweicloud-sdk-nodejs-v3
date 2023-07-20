

export class ListHistoryStreamsRequest {
    public domain?: string;
    public app?: string;
    public stream?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(domain?: string) { 
        this['domain'] = domain;
    }
    public withDomain(domain: string): ListHistoryStreamsRequest {
        this['domain'] = domain;
        return this;
    }
    public withApp(app: string): ListHistoryStreamsRequest {
        this['app'] = app;
        return this;
    }
    public withStream(stream: string): ListHistoryStreamsRequest {
        this['stream'] = stream;
        return this;
    }
    public withStartTime(startTime: string): ListHistoryStreamsRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListHistoryStreamsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withOffset(offset: number): ListHistoryStreamsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListHistoryStreamsRequest {
        this['limit'] = limit;
        return this;
    }
}