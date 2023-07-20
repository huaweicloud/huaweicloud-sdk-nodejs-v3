

export class ListSingleStreamBitrateRequest {
    public domain?: string;
    public app?: string;
    public stream?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public constructor(domain?: string, app?: string, stream?: string) { 
        this['domain'] = domain;
        this['app'] = app;
        this['stream'] = stream;
    }
    public withDomain(domain: string): ListSingleStreamBitrateRequest {
        this['domain'] = domain;
        return this;
    }
    public withApp(app: string): ListSingleStreamBitrateRequest {
        this['app'] = app;
        return this;
    }
    public withStream(stream: string): ListSingleStreamBitrateRequest {
        this['stream'] = stream;
        return this;
    }
    public withStartTime(startTime: string): ListSingleStreamBitrateRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListSingleStreamBitrateRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
}